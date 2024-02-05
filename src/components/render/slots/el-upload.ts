export default {
 listType(_h: any, _conf: any, _key: string) {
    const list: any[] = [];
    const config = _conf.__config__;

    if (_conf['list-type'] === 'picture-card') {
      list.push(_h('i', { class: 'el-icon-plus' }));
    } else {
      list.push(
        _h(
          'el-button',
          {
            size: 'small',
            type: 'primary',
            icon: 'el-icon-upload',
          },
          config.buttonText
        )
      );
    }

    if (config.showTip) {
      list.push(
        _h(
          'div',
          { slot: 'tip', class: 'el-upload__tip' },
          `只能上传不超过 ${config.fileSize}${config.sizeUnit} 的${_conf.accept}文件`
        )
      );
    }

    return list;
  }
}
