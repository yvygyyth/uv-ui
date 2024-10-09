export default class WebStorage {
    static getItem(key, config = {}) {
        const storage = config.storage || window.localStorage;
        const json = storage.getItem(key);
        if (!json) return null;
        const { value, expired } = JSON.parse(json);
        if (expired && Date.now() >= expired) {
          storage.removeItem(key);
            return null;
      }
      return value;
    }
  
    static setItem(key, value, config = {}) {
      const expired = config.expired || 0;
      const storage = config.storage || window.localStorage;
      const data = { value, expired };
      storage.setItem(key, JSON.stringify(data));
    }
  
    static removeItem(key, config = {}) {
      const storage = config.storage || window.localStorage;
      storage.removeItem(key);
    }
  
    static clear(config = {}) {
      const storage = config.storage || window.localStorage;
      storage.clear();
    }
}
  