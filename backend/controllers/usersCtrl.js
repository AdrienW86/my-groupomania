// Imports

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/jwt.utils');
const models = require('../models/index');

const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_PASSWORD = /^[a-zA-Z]\w{3,14}$/;

// Routes

// Création des utilisateurs

exports.signup = (req, res, next) => {

    // Params

    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    let bio = req.body.bio;

    if (email == null || username == null || password == null) {
        return res.status(400).json({ 'erreur': "paramètres manquants "});
    }

    if (!REGEX_EMAIL.test(email)) {
        return res.status(400).json({ 'erreur': "email incorrect" });
    }

    if (!REGEX_PASSWORD.test(password)) {
        return res.status(400).json
        ({ 'erreur': "mot de passe incorrect (doit contenir entre 4 et 15 caractères, commencer par une lettre et ne contenir aucun symboles"});
    }

    models.User.findOne({
        attributes: ['email'],
        where: { email: email }
    })
    .then(userFound => {
        if (!userFound) {
                  bcrypt.hash(password, 10, function(err, bcryptedPassword) {

                const newUser = models.User.create({
                    email: email,
                    username: username,
                    password: bcryptedPassword,
                    bio: bio,
                    isAdmin: 0
                })
                .then(newUser => {
                    return res.status(201).json({
                        'userId': newUser.id
                    })
                })
                .catch(err => {
                    return res.status(500).json({ 'erreur': " impossible d'ajouter l'utilisateur " });
                });
            });
         }else{
            return res.status(409).json({ 'erreur': "l'utilisateur existe déjà "});
        }
    })
    .catch(function(err) {
        return res.status(500).json({ 'erreur': "impossible de vérifier l'utilisateur "});
    });
}
 
// Création du compte administrateur 

exports.admin = (req, res, next) => {

    // Params

    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    let bio = req.body.bio;

    if (email !== 'adrien@outlook.fr' || username !== 'Adrien' || password !== 'alibabas') {
        return res.status(400).json({ 'erreur': "paramètres manquants "});
    }

    models.User.findOne({
        attributes: ['email'],
        where: { email: email }
    })
    .then(userFound => {
        if (!userFound) {
            bcrypt.hash(password , 10, function(err, bcryptedPassword) { 
            
                const newUser = models.User.create({
                    email: email,
                    username: username,
                    password: bcryptedPassword,
                    bio: bio,
                    isAdmin: +1 
                })
                .then(newUser => {
                    return res.status(201).json({
                        'userId': newUser.id
                    })
                })
                .catch(err => {
                    return res.status(500).json({ 'erreur': " impossible d'ajouter l'utilisateur " });
                });
            });
        }else{
            return res.status(409).json({ 'erreur': "l'utilisateur existe déjà "});
        }
    })
    .catch(function(err) {
        return res.status(500).json({ 'erreur': "impossible de vérifier l'utilisateur "});
    });
}

// Se connecter

exports.login = (req, res, next) => { 

    // Params

    let email = req.body.email;
    let password = req.body.password;

    if (email == null || password == null) {
        return res.status(400).json({ 'erreur': "paramètres manquants" });
    }

    models.User.findOne({
        where: { email: email }
    })
    .then(userFound=> {
        if (userFound) {
            bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
                if(resBycrypt) {
                    return res.status(200).json({
                        'userId': userFound.id,
                        'token': jwtUtils.generateTokenForUser(userFound),
                        'isAdmin': userFound.isAdmin,
                        'username': userFound.username,
                        'isLog': +1
                    });

                }else{
                    return res.status(403).json({ 'erreur': "mot de passe invalide" });
                }
            });

        }else{
            return res.status(404).json({ 'erreur': "utilisateur introuvable dans la base de données" });
        }

    })
    .catch (err => {
        return res.status(500).json({ 'erreur': "impossible de connecter l'utilisateur" });
    });
}

exports.getUserProfil = (req, res, next) => {
    let headerAuth = req.headers['authorization'];
    let userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
    return res.status(400).json({ 'erreur': "token erroné" });

    models.User.findOne({
    attributes: ['id', 'email','username','bio',"isAdmin","createdAt","updatedAt"],
        where: { id: userId }
    }).then(user => {
        if (user) {
            res.status(201).json(user);
        }else{
            res.status(404).json({ 'erreur': "utilisateur introuvable" });
        }
    }).catch(err => {
        res.status(500).json({ 'erreur': "recherche de l'utilisateur impossible" });
    });
}


exports.getOneUser = (req, res, next) => {
    let headerAuth = req.headers['authorization'];
    let userid = jwtUtils.getUserId(headerAuth);

    if (userid < 0)
    return res.status(400).json({ 'erreur': "token erroné"});

    models.User.findOne({
        attributes
    })
}









exports.getAllUsers = (req, res, next) => {

    models.User.findAll()

    .then(users => {
        res.status(200).json(users);

    }).catch (err => {
        res.status(500).json({ 'erreur': "impossible d'afficher les utilisateurs"});
    });   
}

exports.updateUserProfil = (req, res, next) => {
    let headerAuth = req.headers['authorization'];
    let userId = jwtUtils.getUserId(headerAuth);

    // Params 
    let password = req.body.password;
    let bio = req.body.bio;
    let username = req.body.username;

    models.User.findOne({
        attributes: ['id', 'password'],
        where: { id: userId }
    }).then(userFound => {
        if(userFound) {
            userFound.update({
                password: (password ? password : userFound.password),
                username: (username ? username : userFound.username),
                bio: (bio ? bio : userFound.bio),
            }).then(userFound => {
                if (userFound) {
                    return res.status(201).json(userFound);
                }else{
                    return res.status(500).json({ 'erreur': "la mise à jour de l'utilisateur a échouée"})
                }

            }).catch(err => {
                res.status(500).json({ 'erreur': "la mise à jour de l'utilisateur a échouée" });
            });
        }else{
            res.status(404).json({ 'erreur': "utilisateur introuvable" });
        }
    
    }).catch(err => {
        return res.status(500).json({ 'erreur': "utilisateur introuvable" });
    });
}

exports.deleteUserProfil = (req, res, next) => {

    let headerAuth = req.headers['authorization'];
    let userId = jwtUtils.getUserId(headerAuth);

    
    models.User.findOne({
        where: { id: userId}
    })
    .then((user) => {
        user.destroy();
        res.status(200).json(user.id + " a été supprimé");

    }).catch((err) => {
        res.status(404).json({ 'erreur': "la suppression a échouée" });
    });

}