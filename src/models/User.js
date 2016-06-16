import { createModel } from 'mobx-roof';
import * as GithubAPI from '../api/github';
import storage from '../common/storage';

export default createModel({
  name: 'User',
  data: {
    isLogin: false,
    password: null,
    username: null,
    userInfo: null || {},
  },
  init() {
    const user = storage.user || {};
    this.set({
      isLogin: user.isLogin,
      password: user.password,
      username: user.username,
      userInfo: user.userInfo || {},
    });
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
