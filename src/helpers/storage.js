import store from 'store';

export default {
  setItem: (key, value, exp) => {
    if (key) {
      store.set(key, {
        value,
        exp: exp || null,
        time: new Date().getTime()
      });

      return store.get(key);
    }
    return null;
  },

  getItem: key => {
    const info = store.get(key);

    if (!info) return null;
    if (info.exp && new Date().getTime() > info.exp) {
      this.a.removeItem(key);
      return null;
    }

    return info.value;
  },

  removeItem: key => {
    const info = store.get(key);

    if (!info) return null;
    return store.remove(key);
  },

  clear: () => store.clearAll()
};
