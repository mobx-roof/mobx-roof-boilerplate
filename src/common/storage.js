
export function getStorage() {
  const data = localStorage.getItem('github');
  return data ? JSON.parse(data) : {};
}

export function saveToStorage(key, val) {
  const storage = getStorage();
  storage[key] = val;
  localStorage.setItem('github', JSON.stringify(storage));
}

export default getStorage();
