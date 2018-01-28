import BackendService from 'services/Backend.service';

const defaultCircleId = '0bd010f641291705095902aaebd41824';

const circleRepository = {
  get: id => {
    return BackendService.get('/circle', {
      params: {
        id: id || defaultCircleId,
      },
    })
      .then(response => {
        return response.data;
      })
      .catch(error => console.error(error));
  },
};

export default circleRepository;
