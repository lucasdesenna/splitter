// flow
import firebaseService from 'services/Firebase.service';

const userRepo = {
  get: (ids: string[] | string): Promise => {
    ids = typeof ids === 'string' ? [ids] : ids;

    return Promise.all(
      ids.map(userId =>
        firebaseService
          .database()
          .ref(`/users/${userId}`)
          .once('value')
          .then(snapshot => snapshot.val())
      )
    );
  },
};

export default userRepo;
