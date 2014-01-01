import axios from 'axios';
import { getUserToken } from '../../utils';

export default class BaseApiHandler {
  constructor() {
    // add additional configs here
    this.axios = axios.create({});

    this.axios.defaults.transformRequest.splice(0, -1, (data, header) => {
      let accessToken = getUserToken();
      if (accessToken) {
        header['Authorization'] = `Token ${accessToken}`;
      }
      return data;
    });
  }
}
