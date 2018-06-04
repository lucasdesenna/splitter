// @flow
import FirebaseService from 'services/Firebase.service';
import BackendService from 'services/Backend.service';

const userRepo = {
  get: (id: string): Promise<*> =>
    BackendService.get(`/user?id=${id}`).then(response => response.data),
  list: (ids: string[] | string): Promise<*> => {
    ids = typeof ids === 'string' ? [ids] : ids;

    return Promise.all(
      ids.map(userId =>
        BackendService.get(`/user?id=${userId}`).then(response => response.data)
      )
    );
  },
  signIn: (): Promise<*> =>
    FirebaseService.signIn().then(
      response =>
        response.additionalUserInfo.isNewUser
          ? BackendService.post('/user', response.user).then(
              response => response.data
            )
          : BackendService.get(`/user?id=${response.user.uid}`).then(
              response => response.data
            )
    ),
  listenForAuthChange: (callback: Function) =>
    FirebaseService.onAuthStateChanged(callback),
};

export default userRepo;
