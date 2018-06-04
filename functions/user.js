const functions = require('firebase-functions');
const firebase = require('firebase');

const get = (request, response) => {
  if (request.query.id) {
    return firebase
      .database()
      .ref(`/users/${request.query.id}`)
      .once('value')
      .then(snapshot => {
        response.status(200).send(snapshot.val());
        return console.log(`SUCCESS: got user ${request.query.id}`);
      })
      .catch(reason => console.warn(reason));
  } else {
    const reason = 'missing param: "id"';
    response.status(500).send(reason);
    return console.warn(reason);
  }
};

function User(userData) {
  this.id = userData.uid;
  this.name = userData.displayName;
  this.email = userData.email;
  this.avatarUrl = userData.photoURL;
  this.lastLoginAt = userData.lastLoginAt;
  this.createdAt = userData.createdAt;
}

const post = (request, response) => {
  if (request.body) {
    const user = new User(request.body);
    const userRef = firebase.database().ref(`/users/${user.id}`);

    return userRef.once('value', snapshot => {
      if (snapshot.exists()) {
        response.status(200).send(user);
        return console.log(`SUCCESS: user ${user.id} already exists`);
      } else {
        return userRef
          .set(user)
          .then(sucess => {
            response.status(200).send(user.id);
            return console.log(`SUCCESS: added user ${user.id}`);
          })
          .catch(error => {
            response.status(500).send(error);
            return console.error(error);
          });
      }
    });
  } else {
    const error = 'ERROR: missing param: "body"';

    response.status(500).send(error);
    return console.error(error);
  }
};

exports.user = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'GET':
      get(request, response);
      break;

    case 'POST':
      post(request, response);
      break;

    default:
      response.end();
  }
});
