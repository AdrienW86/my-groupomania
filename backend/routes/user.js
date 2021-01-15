// Imports

const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const messageCtrl = require('../controllers/messageCtrl');
const userCtrl = require('../controllers/usersCtrl');
//const likesCtrl = require('../controllers/likesCtrl');



// Users routes

router.post('/signup/', userCtrl.signup);
router.post('/login/',userCtrl.login);
router.get('/all/', userCtrl.getAllUsers)
router.get('/me/', userCtrl.getUserProfil);
router.put('/me/', userCtrl.updateUserProfil);
router.delete('/me/', userCtrl.deleteUserProfil);

// Messages routes

router.post('/messages/new/', multer, messageCtrl.createMessage);
router.get('/messages/', messageCtrl.listMessage);
router.delete('/messages/:id/', messageCtrl.deleteMessage); // a finaliser
router.put('messages/:id/', messageCtrl.modifyMessage);     // à finaliser

// Likes

//router.post('/messages/:messageId/vote/like',likesCtrl.likePost);       // a terminer
//router.post('/messages/:messageId/vote/dislike',likesCtrl.dislikePost);

   
module.exports = router;