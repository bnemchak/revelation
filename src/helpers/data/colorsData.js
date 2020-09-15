import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseURl = apiKeys.firebaseConfig.databaseURL;

const getColors = () => new Promise((resolve, reject) => {
  axios.get(`${baseURl}/colors.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getColors };
