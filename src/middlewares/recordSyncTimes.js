const filterActionKey = ['Stars.sync'];

let count = 0;
export default {
  // filter the action name
  filter({ type }) {
    return filterActionKey.includes(type);
  },
  after({ payload }) {
    console.log(`[Sync ${ ++count }]`);
    return payload;
  },
};

