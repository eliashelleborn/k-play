const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.setupUserData = functions.auth.user().onCreate(user => {
  db.collection('users')
    .doc(user.uid)
    .set({
      image: null
    });
});
