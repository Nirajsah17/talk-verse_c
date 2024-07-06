/**
 * Represents an object that can be observed for changes to its properties.
 * @template T
 * @description https://stackoverflow.com/questions/41299642/how-to-use-javascript-proxy-for-nested-objects
 * TODO: Not working for nested Objects
 */
class Observable {
  /**
   *  Creates an instance of Observable.
   * @param {T} target - The object to observe.
   */
  constructor(target) {
    /**
     * An array of observer callbacks.
     * @private
     * @type {Array.<{callback: Function}>}
     */
    this.observers = [];
    /**
     * Error handler callback | overwrite to add custom error handler 
     */
    this.errorHandler;

    const handler = {
      // get(target, key) {
      //   if (key == 'isProxy') return true;
      //   const prop = target[key];
      //   // return if property not found
      //   if (typeof prop == 'undefined') return;
      //   // set value as proxy if object
      //   if (!prop.isProxy && typeof prop === 'object')
      //     target[key] = new Proxy(prop, handler);
      //   return target[key];
      // },
      set(target, key, value, receiver) {
        const currentValue = Reflect.get(target, key);
        const result = Reflect.set(target, key, value);
        if (value !== currentValue) {
          this._notify(key, value);
        }
        return result;
      },
      _notify: (key, value) => {
        this.observers.forEach(observer => {
          try {
            observer.callback(key, value);
          } catch (error) {
            this._handleError(error, observer.callback);
          }
        });
      }
    };
    
    /**
     * A proxy object that intercepts property access on the observed object.
     * @type {T}
     */
    this.proxy = new Proxy(target, handler);
  }

  /**
   * Adds an observer callback to the list of observers.
   * @param {Function} callback - The callback function to add.
   * @throws {Error} Throws an error if the callback parameter is not a function.
   */
  addObserver(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
    if (!this.observers.some(observer => observer.callback === callback)) {
      this.observers.push({
        callback
      });
    }
  }

  /**
   * Removes an observer callback from the list of observers.
   * @param {Function} callback - The callback function to remove.
   */
  removeObserver(callback) {
    const index = this.observers.findIndex(
      observer => observer.callback === callback
    );
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Handle error while executing callback
   * @param {Error} error
   */
  _handleError(error) {
    if (this.errorHandler) {
      this.errorHandler(error);
    } else {
      console.error(error);
    }
  }
}

export {
  Observable
};
export default Observable;