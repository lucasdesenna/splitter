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
    let circle;
    firebase
      .database()
      .ref(`/circles/${request.query.id}`)
      .once('value')
      .then(snapshot => {
        circle = snapshot.val();

        return Promise.all([_getUsers(circle), _getEntries(circle)]);
      })
      .then(data => {
        circle = Object.assign({}, circle, {
          users: data[0],
          entries: data[1],
        });
        response.send(circle);
        return console.log(circle);
      })
      .catch(error => {
        response.status(500).send(error);
        return console.error(error);
      });
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
