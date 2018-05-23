import firebaseService from 'services/Firebase.service';
import { fakeCircleData } from './fakeData';

const defaultCircleId = '0bd010f641291705095902aaebd41824';
const isEnvProd = process.env.NODE_ENV === 'production';

const _getUsers = circle => {
  return Promise.all(
    circle.users.map(userId =>
      firebaseService
        .database()
        .ref(`/users/${userId}`)
        .once('value')
        .then(snapshot => snapshot.val())
    )
  );
};

const _getEntries = circle => {
  return firebaseService
    .database()
    .ref(`/entries`)
    .orderByChild('circleId')
    .equalTo(circle.id)
    .once('value')
    .then(snapshot => snapshot.val());
};

const circleRepository = {
  get: (id = defaultCircleId) => {
    if (!isEnvProd) return new Promise(resolve => resolve(fakeCircleData));

    let circle;

    return firebaseService
      .database()
      .ref(`/circles/${id}`)
      .once('value')
      .then(snapshot => {
        circle = snapshot.val();

        return Promise.all([_getUsers(circle), _getEntries(circle)]);
      })
      .then(data => ({ ...circle, users: data[0], entries: data[1] }))
      .catch(error => console.error(error));
  },
};

export default circleRepository;
