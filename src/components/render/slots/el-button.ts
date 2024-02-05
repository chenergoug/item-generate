export default {
  defaultSlot(_h: any, _conf: any, _key: string) {
    return _conf.__slot__[_key];
  }
}
