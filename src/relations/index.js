import { Relation } from 'mobx-roof';
import { saveToStorage } from '../common/storage';
const relation = new Relation;

relation.init((context) => {
  const { user, stars } = context.pick('user', 'stars');
  // When isLogin in first loaded, sync the stars.
  if (user.isLogin) {
    stars.sync(user.userInfo, user.username, user.password);
  }
});

relation.listen('user.login', ({ context }) => {
  const { user, stars } = context.pick('user', 'stars');
  // When login, sync the stars.
  stars.sync(user.userInfo, user.username, user.password);
});

relation.autorun((context) => {
  const { stars } = context.pick('user', 'stars');
  console.log(stars.selectedStar);
});

// Auto save reactive data to localstorage
relation.autorun((context) => {
  const { user, stars } = context.pick('user', 'stars');
  saveToStorage('user', user.toJSON());
  saveToStorage('stars', stars.toJSON());
});

export default relation;