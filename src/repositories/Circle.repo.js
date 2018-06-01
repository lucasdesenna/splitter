import firebaseService from 'services/Firebase.service';

import userRepo from 'repositories/User.repo';
import entryRepo from 'repositories/Entry.repo';

import { fakeCircleData, fakeUsersData, fakeEntriesData } from './fakeData';
const defaultCircleId = '0bd010f641291705095902aaebd41824';
const isEnvProd = process.env.NODE_ENV === 'production';

const circleRepo = {
  get: (id: string = defaultCircleId): Promise => {
    if (!isEnvProd)
      return new Promise(resolve =>
        resolve({
          circle: fakeCircleData,
          users: fakeUsersData,
          entries: fakeEntriesData,
        })
      );

    let circle;

    return firebaseService
      .database()
      .ref(`/circles/${id}`)
      .once('value')
      .then(snapshot => {
        circle = snapshot.val();

        return Promise.all([
          userRepo.get(circle.users),
          entryRepo.getAllFromCircle(id),
        ]);
      })
      .then(data => ({ circle: circle, users: data[0], entries: data[1] }))
      .catch(error => console.error(error));
  },
};

export default circleRepo;
