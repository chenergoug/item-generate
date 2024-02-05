export default {
  options(_h: any, _conf: any, _key: string) {
    const list: any[] = [];

    _conf.__slot__.options.forEach((item: any) => {
      if (_conf.__config__.optionType === 'button') {
        list.push(
          _h('el-checkbox-button', { label: item.value }, item.label)
        );
      } else {
        list.push(
          _h('el-checkbox', { label: item.value, border: _conf.border }, item.label)
        );
      }
    });

    return list;
  }
}
