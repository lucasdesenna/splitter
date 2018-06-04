import BackendService from 'services/Backend.service';

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

    return BackendService.get(`/circle?id=${id}`)
      .then(response => response.data)
      .catch(error => console.error(error));
  },
};

export default circleRepo;
