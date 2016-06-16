import { createModel } from 'mobx-roof';
import * as GithubAPI from '../api/github';
import storage from '../common/storage';

export default createModel({
  name: 'Stars',
  data: {
    data: [],
    selectedStar: {},
  },
  init() {
    const stars = storage.stars || {};
    this.set({
      data: stars.data || [],
      selectedStar: stars.selectedStar || { id: null, repo: null },
    });
  },
  actions: {
    async sync(userInfo, username, password) {
      const url = `https://api.github.com/users/${userInfo.login}/starred?per_page=100&page=1`;
      const data = await GithubAPI.fetchStars(url, username, password);
      if (data && data.result) {
        this.data = data.result.slice();
        if (this.data.length > 0 && !this.selectedStar) {
          const first = this.data[0];
          this.starsSelect(first.id, first.name);
        }
      }
      return data;
    },
    starsSelect(id, repo) {
      if (this.selectedStar.id !== id) {
        this.selectedStar = { id, repo };
      }
    },
    async unStar(repo, username, password) {
      await GithubAPI.unstar(repo, username, password);
    }
  }
});
