## transition

把鼠标指针放到 div 元素上，其宽度会从 100px 逐渐变为 300px

```css
div
{
	width:100px;
	transition: width 2s;
  	-webkit-transition: width 2s; /* Safari 和 Chrome */
	-moz-transition: width 2s; /* Firefox 4 */
	-o-transition: width 2s; /* Opera */
}
```





```css
/*文本不可以被选中*/
user-select: none;
```

```css
/*行高*/
line-height: 24px;
```



## Clear

```css
/* 图像的左侧和右侧均不允许出现浮动元素 */
img {
  	float:left;
  	clear:both;
}
```

