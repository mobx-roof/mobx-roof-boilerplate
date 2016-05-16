import { createModel } from 'mobx-roof';
import * as GithubAPI from '../api/github';

export default createModel({
  name: 'Readme',
  data() {
    return  {
    };
  },
  actions: {
    async login(username, password) {
      const userInfo = await GithubAPI.fetchUser(username, password);
      if (userInfo.message) throw new Error('Login error ' + userInfo.message);
      this.isLogin = true;
      this.username = username;
      this.password = password;
      this.userInfo = userInfo;
    },
  },
});
