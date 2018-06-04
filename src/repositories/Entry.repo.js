import FirebaseService from 'services/Firebase.service';
import BackendService from 'services/Backend.service';

const entryRepo = {
  getAllFromCircle: (circleId: string): Promise => {
    return FirebaseService.database()
      .ref(`/entries/${circleId}`)
      .once('value')
      .then(snapshot => snapshot.val());
  },
  add: entryData => {
    return BackendService.post('/entries', entryData, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.data)
      .catch(error => console.error(error));
  },
};

export default entryRepo;
