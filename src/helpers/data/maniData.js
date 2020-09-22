import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getManisByColorId = (colorId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/manis.json?orderBy="colorId"&equalTo="${colorId}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getManisByColorId };
