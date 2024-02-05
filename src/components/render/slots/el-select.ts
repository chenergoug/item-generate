export default {
 options(_h: any, _conf: any, _key: string) {
    const list: any[] = [];
    _conf.__slot__.options.forEach((item: any) => {
      list.push(
        _h('el-option', {
          label: item.label,
          value: item.value,
          disabled: item.disabled,
        })
      );
    });
    return list;
  }
}

