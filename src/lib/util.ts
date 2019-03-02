class Util {
  abp: any = window.abp;

  extend(...args: any[]): any {
    let options: any,
      name: any,
      src: any,
      srcType: any,
      copy: any,
      copyType: any,
      copyIsArray: any,
      clone: any,
      target: any = args[0] || {},
      i: number = 1,
      length: number = args.length,
      deep: boolean = false;
    if (typeof target === "boolean") {
      deep = target;
      target = args[i] || {};
      i++;
    }
    if (typeof target !== "object" && typeof target !== "function") {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = args[i]) !== null) {
        // tslint:disable-next-line:forin
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          srcType = Array.isArray(src) ? "array" : typeof src;
          if (deep && copy && ((copyIsArray = Array.isArray(copy)) || typeof copy === "object")) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && srcType === "array" ? src : [];
            } else {
              clone = src && srcType === "object" ? src : {};
            }
            target[name] = this.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  }
}
const util: Util = new Util();
export default util;
