### Bootstrap 网格系统

```html
<div class="container">
    <h1>Hello, world!</h1>
    <div class="row">
        <div class="col-md-3" style="background-color: #dedef8;box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
            <h4>第一列</h4>
            <p>hello</p>
        </div>
        <div class="col-md-9" style="background-color: #dedef8;box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
            <h4>第二列 - 分为四个盒子</h4>
            <div class="row">
                <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                    <p>hi</p>
                </div>
                <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                    <p>hello</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                    <p>hi</p>
                </div>
                <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                    <p>hello</p>
                </div>
            </div>
        </div>
    </div>
</div>
```



[Bootstrap 代码](http://www.runoob.com/bootstrap/bootstrap-code.html)

* 使用 \<code\> 或 \<pre\> 标签

```html
<p><code>&lt;header&gt;</code> 作为内联元素被包围。</p>
<p>如果需要把代码显示为一个独立的块元素，请使用 &lt;pre&gt; 标签：</p>
<pre>
    &lt;article&gt;
        &lt;h1&gt;Article Heading&lt;/h1&gt;
    &lt;/article&gt;
</pre>
```



[Bootstrap 表单](http://www.runoob.com/bootstrap/bootstrap-forms.html)

* 使用 radio 设置单选

```html
<div class="radio">
    <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked> 选项 1
    </label>
</div>
<div class="radio">
    <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">选项 2 - 选择它将会取消选择选项 1
    </label>
</div>
<!-- 使用相同 name 来对于某一选项单选 -->
```

* 大小

```html
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label class="col-sm-2 control-label">聚焦</label>
    <div class="col-sm-10">
      <input class="form-control" id="focusedInput" type="text" value="该输入框获得焦点...">
    </div>
  </div>
</form>
<!-- 修改 col-sm-10 数字来修改大小（1-12） -->
```



[Bootstrap 按钮](http://www.runoob.com/bootstrap/bootstrap-buttons.html)

```
可以在 <a>、<button> 或 <input> 元素上使用按钮 class。但是建议在 <button> 元素上使用按钮 class，避免跨浏览器的不一致性问题
```



[Bootstrap 图片](http://www.runoob.com/bootstrap/bootstrap-images.html)



[Bootstrap 辅助类](http://www.runoob.com/bootstrap/bootstrap-helper-classes.html)

.caret：显示下拉式功能

```html
<div class="container">
	<div class="btn-group">
		<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Menu <span class="caret"></span></button>
		<ul class="dropdown-menu" role="menu">
			<li><a href="#">一个链接</a></li>
			<li><a href="#">另一个链接 link</a></li>
			<li><a href="#">其他功能</a></li>
		</ul>
	</div>        
</div>
```



[Bootstrap CSS编码规范](http://www.runoob.com/bootstrap/bootstrap-css-codeguide-html.html)



### Modal

```html
<button type="button" class="btn default" data-dismiss="modal">关闭</button>
```

由于属性：data-dismiss，如果一个 Modal 中包含该 button，那么该 button 的 click 效果就是关闭该 Modal。

```

```













