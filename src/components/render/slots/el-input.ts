export default {
  prepend(_h: any, _conf: any, _key: string) {
    return _h('template', { slot: 'prepend' }, _conf.__slot__[_key]);
  },
  append(_h: any, _conf: any, _key: string) {
    return _h('template', { slot: 'append' }, _conf.__slot__[_key]);
  }
}
