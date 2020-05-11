# 一个简单的活动页，没想到遇到如此多的 bug，猝不及防！！

## 安卓 5.0 下 vue 页面加载不出来

- 使用了 vue2.6 的库，然后在安卓 5.0 下页面出不来，怎么都想不出来是什么原因，最后由于测试给了云真机的账号在云真机上找到了问题， Object.assgin is not a function , undifine is not a function ,fetch is not a function
- 答案呼之欲出。很多 API 不支持，于是使用 polyfill 解决 ，具体添加了 “https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js” 这个库
- 之后还是很多机型不出来，接着找问题，猜测 document.querySelectorAll 也不知道，替换掉
- 上传再测，还是有机型不出来这回是 ‘ fetch is not a function ’ 于是 做一下判断 if(window.fetch){...}
- 终于大部分安卓 5.0 机型都可以顺利加载，其他再有问题如法炮制，应该都可以解决了。

## 安卓下 keyCode 总是 229

背景： 做一个 输入验证码的输入框，5 个框，输入完一个光标定位到下一个，

在安卓下发现，按删除键时会出现光标后退的情况。

开始排查 bug，初步诊断为安卓键盘 keycode 与标准的不同（思路对了）。

然后写 demo，在安卓上 alert 出来发现所有建都是 229（接近真相了），开始 Google 答案都是 229，遗憾的是每一个写出了标准答案，无意中打开了 MDN，救了我的老命，复制下面的代码，突然就接近了 bug....泪流满面

解决办法：

```
自 Firefox 65起,  keydown 与 keyup 事件会在IME（输入法编辑器）复合事件中被触发,目的是为了提升CJKT（中日韩台地区）用户跨浏览器性能, (bug 354358，更多详情访问 keydown and keyup events are now fired during IME composition ). 若要忽略复合事件中所有 keydown 事件, 可以按照如下代码修改 (229是某个在IME中触发的键盘事件对应的 keyCode):

eventTarget.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

[原文链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/keydown_event)， 这个故事告诉我们，遇到问题请先找官方文档
