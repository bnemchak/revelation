import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseURl = apiKeys.firebaseConfig.databaseURL;

const getColors = () => new Promise((resolve, reject) => {
  axios.get(`${baseURl}/colors.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const deleteColor = (colorId) => axios.delete(`${baseURl}/colors/${colorId}.json`);

export default { getColors, deleteColor };
