# 国际化自动翻译
国际化自动翻译，不需要手动翻译，利用百度翻译的api完成自动翻译，大大提高开发效率。
## 使用方式
```
npm i
npm i -g i18n-replace
```
然后去[百度翻译官网](https://fanyi-api.baidu.com/doc/11)申请appid和key，在根目录的i18n.config.js配置appid和key。

然后执行rep命令，那么在i18n.data.js里面就会生成翻译后的文本。

最后执行`npm run serve`，即可启动应用。
## 注意事项
只能使用vue2，vue3不兼容。
