# 5月爆更活动bug汇总

## 单行文本超出加...

css:

```
text-overflow:ellipsis; 
overflow: hidden;
white-space:nowrap;

```

不加 white-space:nowrap;属性，  text-overflow:ellipsis 属性不起作用

## 多行文本超出加...

```
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
```

需要利用 webkit-line-clamp 属性 


## 安卓5.0  不支持 justify-content: space-evenly 属性;   利用 autoprefixer 也不行

另外配置 autoprefixer 也遇到了点麻烦，webpack官网的方式试了也不行，下面直接上配置，可能配置只适合当前项目，没去深入研究

webpack:


```
{
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              plugins: () =>
                autoprefixer({
                  browsers: ["last 3 versions", "> 1%"],
                }),
            },
          },
          "less-loader",
        ], // 将 Less 编译为 CSS
      },
```


## inline-block 导致元素下沉问题 

由于HTML空白符造成的，

解决办法：父元素font-size:0  

还有问题？那就是文字的baseline造成的

设置 ： vertical-align: top/middle/bottom  