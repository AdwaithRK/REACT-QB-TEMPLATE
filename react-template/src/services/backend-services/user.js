import BaseApiHandler from './baseApi';
import { LOGIN_URL } from '../../constants/urls';

class UserApi extends BaseApiHandler {
  // login user
  login = (credentials) => this.axios.post(LOGIN_URL, credentials);
}

export default new UserApi();
