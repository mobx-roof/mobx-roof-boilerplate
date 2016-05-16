import { createModel } from 'mobx-roof';
import * as GithubAPI from '../api/github';
import storage from '../common/storage';

export default createModel({
  name: 'Stars',
  data() {
    const stars = storage.stars || {};
    return {
      data: stars.data || [],
      selectedStar: stars.selectedStar || '',
    };
  },
  actions: {
    async sync(userInfo, username, password) {
      const url = `https://api.github.com/users/${userInfo.login}/starred?per_page=100&page=1`;
      const data = await GithubAPI.fetchStars(url, username, password);
      if (data && data.result) {
        this.data = data.result.slice();
      }
    },
    starsSelect(id, repo) {
      this.selectedStar = id;
    }
  }
});
