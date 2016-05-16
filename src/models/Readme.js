import { createModel } from 'mobx-roof';
import marked from 'marked';
import * as GithubAPI from '../api/github';

export default createModel({
  name: 'Readme',
  data() {
    return  {
      repo: null,
      readme: null,
    };
  },
  actions: {
    async readmeFetch(repo, username, password) {
      const result = await GithubAPI.getReadme(repo, username, password);
      if (result) {
        this.readme = marked(decodeURIComponent(escape(atob(result.content))));
        this.repo = repo;
      }
    },
  },
});
