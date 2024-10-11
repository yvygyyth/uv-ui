export default class WebStorage {
  static getItem(key) {
    const json = uni.getStorageSync(key);
    if (!json) return null;

    const { value, expired } = json;
    if (expired && Date.now() >= expired) {
      uni.removeStorageSync(key);
      return null;
    }
    return value;
  }

  static setItem(key, value, config = {}) {
    const expired = config.expired || 0;
    const data = { value, expired };
    uni.setStorageSync(key, data);
  }

  static removeItem(key) {
    uni.removeStorageSync(key);
  }

  static clear() {
    uni.clearStorageSync();
  }
}
