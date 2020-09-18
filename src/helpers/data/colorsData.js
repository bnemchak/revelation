import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseURl = apiKeys.firebaseConfig.databaseURL;

const getColorsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseURl}/colors.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const deleteColor = (colorId) => axios.delete(`${baseURl}/colors/${colorId}.json`);

const createColor = (newColor) => axios.post(`${baseURl}/colors.json`, newColor);

const updateColor = (colorId, editedColor) => axios.put(`${baseURl}/colors/${colorId}.json`, editedColor);

export default {
  getColorsByUid,
  deleteColor,
  createColor,
  updateColor,
};
