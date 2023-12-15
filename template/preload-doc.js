window.exports = {
  'features.code': { // 注意：键对应的是 plugin.json 中的 features.code
    mode: 'doc', // 文档模式
    args: {
      // 索引集合
      // indexes: require('./indexes.json')
      indexes: [
        {
          t: '这是标题',
          d: '这是描述',
          p: 'doc/xxx.html', //页面, 只能是相对路径
        },
      ],
      // 子输入框为空时的占位符，默认为字符串"搜索"
      placeholder: '搜索',
    },
  },
};
