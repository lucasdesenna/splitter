import firebaseService from 'services/Firebase.service';
import BackendService from 'services/Backend.service';

const entryRepo = {
  getAllFromCircle: (circleId: string): Promise => {
    return firebaseService
      .database()
      .ref(`/entries`)
      .orderByChild('circleId')
      .equalTo(circleId)
      .once('value')
      .then(snapshot => snapshot.val());
  },
  add: entryData => {
    return BackendService.post('entries', entryData, {
      headers: { 'Content-Type': 'application/json' },
    }).catch(error => console.error(error));
  },
};

export default entryRepo;
