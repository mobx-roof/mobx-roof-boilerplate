import { Relation } from 'mobx-roof';
import { saveToStorage } from '../common/storage';
const relation = new Relation;

relation.init((context) => {
  const { user, stars } = context;
  // When isLogin in first loaded, sync the stars.
  if (user.isLogin) {
    stars.sync(user.userInfo, user.username, user.password);
  }
});

relation.listen('user.login', ({ context }) => {
  const { user, stars } = context;
  // When login, sync the stars.
  stars.sync(user.userInfo, user.username, user.password);
});


// Auto fetch the readme if selctedStar changed
relation.autorun((context) => {
  const { stars, readme, user } = context;
  const selectedStar = stars.selectedStar;
  if (!selectedStar.repo) return;
  // SetTimeout means just listen the `selectedStar`
  setTimeout(() => {
    readme.readmeFetch(selectedStar.repo, user.username, user.password);
  });
});

// Auto save reactive data to localstorage
relation.autorun((context) => {
  const { user, stars } = context;
  saveToStorage('user', user.toJSON());
  saveToStorage('stars', stars.toJSON());
});

export default relation;