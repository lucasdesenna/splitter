const functions = require('firebase-functions');
const firebase = require('firebase');

const _getUsers = circle => {
  return Promise.all(
    circle.users.map(userId =>
      firebase
        .database()
        .ref(`/users/${userId}`)
        .once('value')
        .then(snapshot => snapshot.val())
    )
  );
};

const _getEntries = circle => {
  return firebase
    .database()
    .ref(`/entries`)
    .orderByChild('circleId')
    .equalTo(circle.id)
    .once('value')
    .then(snapshot => snapshot.val());
};

const get = (request, response) => {
  if (request.query.id) {
    return firebase
      .database()
      .ref(`/circles/${request.query.id}`)
      .once('value')
      .then(snapshot => {
        const circle = snapshot.val();

        return Promise.all([_getUsers(circle), _getEntries(circle)])
          .then(data => {
            console.log(data[0]);
             response.send({ ...circle, users: data[0], entries: data[1] });
          })
          .catch(error => response.status(500).send(error));
      })
      .catch(error => response.status(500).send(error));
  } else {
    response.status(500).send('missing param: "id"');
  }
};

const post = (request, response) => {
  response.end();
};

exports.circle = functions.https.onRequest((request, response) => {
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
