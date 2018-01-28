import BackendService from 'services/Backend.service';

const entryRepository = {
  add: entryData => {
    return BackendService.post('entries', entryData).catch(error =>
      console.error(error)
    );
  },
};

export default entryRepository;
