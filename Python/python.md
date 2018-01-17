## 中文编码

```python
# -*- coding:UTF-8 -*-
#coding=UTF-8
```

## python 基本注意点

### python 标识符

* 字符、数字、下划线
* 区分大小写

### 行和缩进

* 所有代码块必须包含相同的缩进空白数量

```python
if True:
    print "True"
else:
    print "False"
```

### 多行语句

* 一般以新行作为语句的结束符

```python
total = item_one + \
        item_two + \
        item_three
```

* 语句中包含[ ]、{}、()就不需要使用多行连接符

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

* 同一行中使用多条语句，语句之间使用分号(;)分割

### 引号

*  可以使用引号( **'** )、双引号( **"** )、三引号( **'''** 或 **"""** ) 来表示字符串，引号的开始与结束必须的相同类型的。
*  三引号可以由多行组成

```python
word = 'word'
sentence = "这是一个句子。"
paragraph = """这是一个段落。
包含了多个语句"""
```

* 三引号：三引号自始至终保持一小块字符串的格式是所谓的WYSIWYG（所见即所得）格式的。

  一个典型的用例是，当你需要一块HTML或者SQL时，这时用字符串组合，特殊字符串转义将会非常的繁琐。

  ```python
   errHTML = '''
  <HTML><HEAD><TITLE>
  Friends CGI Demo</TITLE></HEAD>
  <BODY><H3>ERROR</H3>
  <B>%s</B><P>
  <FORM><INPUT TYPE=button VALUE=Back
  ONCLICK="window.history.back()"></FORM>
  </BODY></HTML>
  '''
  cursor.execute('''
  CREATE TABLE users (  
  login VARCHAR(8), 
  uid INTEGER,
  prid INTEGER)
  ''')
  ```


### 注释

* python单行注释采用#开头

```python
# 第一个注释
```

* python 中多行注释使用三个单引号(''')或三个双引号(""")。

### 多个变量赋值

```python
a = b = c = 1
a, b, c = 1, 2, "John"
```

### 删除对象的引用

```python
del var1, var2, ... varn
```



## 基本变量

```python
id( parameter )
# 查看在内存的地址
```

### 字符串

[教程](http://www.blog.csdn.net/pythonedu)

```python
str = 'Hello World!'
 
str[0]				# 第一个字符
str[-1]				# 最后一个字符
str[-2]				# 倒数第二个字符
str[2:5]			# 第三个至第五个之间的字符串
str[2: ]			# 从第三个字符开始的字符串
str[ :5]			# 到第五个字符开始的字符串

str[n:m:i]			# n:start, m:end, i:step: -1 从后往前 step=1
					# 逆序 str[-1::-1]

print str * 2		# 输出字符串两次
print str + "TEST"	# 输出连接的字符串
```

* r/R

```python
>>>print r'\n'
\n # 输出‘\n’		# str前有r，遇到‘\’不看作转义字符
```

* %：格式字符串。[python字符串格式化符号](http://www.runoob.com/python/python-strings.html)

```python
s = " age %d, sex %s, record %f " % (18, "male", 75.2)
```

* unicode字符串
* 字符串函数：string.**

#### 常用函数

```python
>>>ord('a')
97		# change letter to ascii
>>>chr( 99 )
c		# change ascii to letter
```

```python
str.find( str0 )
# return str 中 str0 第一次出现的起始位置
str.find( str0, 5 )
# 从 index = 5 开始查找
# find 从左至右，rfind从右至左
```

```python
str.strip() # 去首尾空格
# lstrip 去左，rstrip 去右
```

```python
str.split() # 默认空格拆分
```

 ```python
str.isalnum()	# 是否全是字符或数字
str.isalpha()	# 是否全是字符
str.isdigit()	# 是否全是数字
 ```

```python
str.islower()
str.isupper()
str.lower()		# 改为小写
str.upper()		# 改为大写
```

```python
str.isspace()	# 判断是否全是空格
str.startswith(str0)
# str 是否以 str0 开始
str.endswith(str0)
```

### 列表

```python
list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tinylist = [123, 'john']	#输出与字符串类似
```

* 更新：直接赋值
* 删除：del
* 列表截取：

```python
L = ['spam', 'Spam', 'SPAM!']
```

| python表达式 |   结果    |      描述      |
| :-------: | :-----: | :----------: |
|   L[2]    | 'SPAM!' |  读取列表中第三个元素  |
|   L[-2]   | 'Spam'  | 读取列表中倒数第二个元素 |

* 重复

```python
list = [...]
list * n
# n is time of repetition
```

### 元组

*  元组不能二次赋值，相当于只读列表。

```python
tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
tinytuple = (123, 'john')	#输出与字符串类似
```

```python
tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tuple[2] = 1000		# 元组中是非法应用
list[2] = 1000		# 列表中是合法应用
```

* 元组中的元素值是不允许删除的，但我们可以使用del语句来删除整个元组。
* 元组截取与列表类似

### 字典

* 列表是有序的对象结合，字典是无序的对象集合。
* 字典当中的元素是通过键来存取的，而不是通过偏移存取。
* 字典用"{ }"标识，字典由索引(key)和它对应的值value组成。

```python
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
 
print dict['one']			# 输出键为'one' 的值
print dict[2]				# 输出键为 2 的值
print tinydict				# 输出完整的字典
print tinydict.keys()		# 输出所有键
print tinydict.values()		# 输出所有值
```

```python
This is one
This is two
{'dept': 'sales', 'code': 6734, 'name': 'john'}
['dept', 'code', 'name']
['sales', 6734, 'john']
```

* [Python数据类型转换](http://www.runoob.com/python/python-variable-types.html)

```pyhton
*.clear() # 清空词典所有条目
del * ;   # 删除词典
```

* [字典函数操作](http://www.runoob.com/python/python-dictionary.html)



## if

### 条件分支

```python
if ...
elif ...
else ...
```

### 布尔表达式

- 0 / False：false
- 非 0（-1 / 2 / str）：true



## 算数运算符

### 算术运算符

| 运算符  |       描述       |          实例          |
| :--: | :------------: | :------------------: |
|  **  |  幂 - 返回x的y次幂   |      10**2=100       |
|  //  | 取整除 - 返回商的整数部分 | 9//2=4  9.0//2.0=4.0 |

### 比较运算符

* <> 类似于 !=

###　位运算符

* << : 右边的数指定移动的位数，高位丢弃，低位补0。

### 逻辑运算符

| 运算符  |  逻辑表达式  |                    描述                    |          实例           |
| :--: | :-----: | :--------------------------------------: | :-------------------: |
| and  | x and y | 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 |   (a and b) 返回 20。    |
|  or  | x or y  |     如果 x 是非 0，它返回 x 的值，否则它返回 y 的计算值。     |    (a or b) 返回 10。    |
| not  |  not x  | 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。 | not(a and b) 返回 False |

### 成员运算符

| 运算符  |               描述                |                实例                |
| :--: | :-----------------------------: | :------------------------------: |
|  in  | 如果在指定的序列中找到值返回 True，否则返回 False。 | x 在 y 序列中 , 如果 x 在 y 序列中返回 True。 |

### 身份运算符

| 运算符  |          描述          |                    实例                    |
| :--: | :------------------: | :--------------------------------------: |
|  is  | is是判断两个标识符是不是引用自一个对象 | x is y, 如果 id(x) 等于 id(y) , **is** 返回结果 1 |

* [Python运算符优先级](http://www.runoob.com/python/python-operators.html)



## python日期和时间

```python
import time;  # 引入time模块
ticks = time.time()
print "当前时间戳为:", ticks
```

```python
当前时间戳为: 1459994552.51
```

* 格式化时间获取

```python
import time

localtime = time.asctime( time.localtime(time.time()) )
print "本地时间为 :", localtime
```

```python
本地时间为 : Thu Apr  7 10:05:21 2016
```

* [格式化日期or时间处理or日历](http://www.runoob.com/python/python-date-time.html)

## python函数

### 语法

```python
def functionname( parameters ):
   "函数_文档字符串" #可选择
   function_suite
   return [expression]
```

* def function 后需要加一个 ":"

* 传入参数default值：有default值的形参写在后面

  ```python
  def fun( x, n = 15 ):
      ...
  ```

* 函数调用指定参数值

  ```python
  def fun( x, n, i=10 ):
      ...
  fun( x=1, n=2 )
  # or
  fun( n=2, x=1 )
  # but
  # fun( x=1, 2 ) is wrong
  ```

### 返回值

- 一个返回值

- 多个返回值

  - 需要多个参数接收

  ```python
  def fun1():
      ...
  	return x1, x2, x3, ..., xN

  m1, m2, m3, ..., mN = fun1()
  ```

  - 如果就一个赋值参数，则返回一个 **元组**

  ```python
  def fun1():
      ...
  	return x1, x2, x3, x4

  m = fun1()
  # m is a 元组
  ```

###  python参数传递

- **不可变类型：**类似 c++ 的值传递，如 整数、字符串、元组。如fun（a），传递的只是a的值，没有影响a对象本身。比如在 fun（a）内部修改 a 的值，只是修改另一个复制的对象，不会影响 a 本身。
- **可变类型：**类似 c++ 的引用传递，如 列表，字典。如 fun（la），则是将 la 真正的传过去，修改后fun外部的la也会受影响

### 关键字参数

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
#可写函数说明
def printinfo( name, age ):
   "打印任何传入的字符串"
   print "Name: ", name;
   print "Age: ", age;
   return;
 
#调用printinfo函数
printinfo( age=50, name="miki" );
```

```python
Name:  miki
Age:  50
```

### 缺省参数

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
#可写函数说明
def printinfo( name, age = 35 ):
   "打印任何传入的字符串"
   print "Name: ", name;
   print "Age: ", age;
   return;
 
#调用printinfo函数
printinfo( age=50, name="miki" );
printinfo( name="miki" );
```

```python
Name:  miki
Age:  50
Name:  miki
Age:  35
```

### 不定长参数

```python
def functionname([formal_args,] *var_args_tuple ):
   "函数_文档字符串"
   function_suite
   return [expression]
```

* 加了星号（*）的变量名会存放所有未命名的变量参数。

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
# 可写函数说明
def printinfo( arg1, *vartuple ):
   "打印任何传入的参数"
   print "输出: "
   print arg1
   for var in vartuple:
      print var
   return;
 
# 调用printinfo 函数
printinfo( 10 );
printinfo( 70, 60, 50 );
```

```python
输出:
10
输出:
70
60
50
```

### 匿名函数

* python 使用 lambda 来创建匿名函数。

```python
lambda [arg1 [,arg2,.....argn]]:expression
```

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
# 可写函数说明
sum = lambda arg1, arg2: arg1 + arg2;
 
# 调用sum函数
print "相加后的值为 : ", sum( 10, 20 )
print "相加后的值为 : ", sum( 20, 20 )
```

### 变量作用域

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

total = 0; # 这是一个全局变量
# 可写函数说明
def sum( arg1, arg2 ):
   #返回2个参数的和."
   total = arg1 + arg2; # total在这里是局部变量.
   print "函数内是局部变量 : ", total
   return total;
 
#调用sum函数
sum( 10, 20 );
print "函数外是全局变量 : ", total 
```

```python
函数内是局部变量 :  30
函数外是全局变量 :  0
```

## python模块

*  如果在函数内部调用locals()，返回的是所有能在该函数里访问的命名。
*  如果在函数内部调用globals()，返回的是所有在该函数里能访问的全局名字。

## python 文件I/O

### 读取键盘输入：raw_input、input

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*- 
 
str = raw_input("请输入：");
print "你输入的内容是: ", str
```

```python
请输入：Hello Python！
你输入的内容是:  Hello Python！
```

* 打开文件语法

```python
file object = open(file_name [, access_mode][, buffering])
```

* 关闭文件

```python
fileObject.close();
```

### 文件定位

* tell()方法告诉你文件内的当前位置。
* seek（offset [,from]）方法改变当前文件的位置。Offset变量表示要移动的字节数。From变量指定开始移动字节的参考位置。
* 如果from被设为0，文件的开头作为移动字节的参考位置。如果设为1，当前的位置作为参考位置。如果它被设为2，文件的末尾将作为参考位置。

### 重命名和删除文件

```python
import os
os.rename(current_file_name, new_file_name)
os.remove(file_name)
```

### mkdir()方法在当前目录下创建新的目录

```python
os.mkdir("newdir")
```

### chdir()方法来改变当前的目录

```python
os.chdir("newdir")
```

### getcwd()方法显示当前的工作目录

```python
os.getcwd()
```

### rmdir()方法删除目录，目录名称以参数传递

```python
os.rmdir('dirname')
```

[File/OS对象方法](http://www.runoob.com/python/python-files-io.html)

## 异常

```python
raise [Exception [, args [, traceback]]]
```

## 参数

* 类的方法与普通的函数只有一个特别的区别——他们 必须有一个额外的第一参数名称，按照惯例他的名字是 self。

```python
class Test:
    def prt(self):
        print(self)
        print(self._class_)
        
t = Test();
t.prt()
```

```python
<__main__.Test instance at 0x10d066878>
__main__.Test
```

* 从执行结果可以很明显的看出，self 代表的是类的实例，代表当前对象的地址，而 self.class 则指向类。
* self 不是 python 关键字，我们把他换成 runoob 也是可以正常执行的:

```python
class Test:
    def prt(runoob):
        print(runoob)
        print(runoob.__class__)
 
t = Test()
t.prt()
```

```python
<__main__.Test instance at 0x10d066878>
__main__.Test
```

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

class Employee:
   '所有员工的基类'
   empCount = 0

   def __init__(self, name, salary):
      self.name = name
      self.salary = salary
      Employee.empCount += 1
   
   def displayCount(self):
     print "Total Employee %d" % Employee.empCount

   def displayEmployee(self):
      print "Name : ", self.name,  ", Salary: ", self.salary

"创建 Employee 类的第一个对象"
emp1 = Employee("Zara", 2000)
"创建 Employee 类的第二个对象"
emp2 = Employee("Manni", 5000)
emp1.displayEmployee()
emp2.displayEmployee()
print "Total Employee %d" % Employee.empCount
```

```python
Name :  Zara ,Salary:  2000
Name :  Manni ,Salary:  5000
Total Employee 2
```

### 添加修改删除类的属性

```python
emp1.age = 7  # 添加一个 'age' 属性
emp1.age = 8  # 修改 'age' 属性
del emp1.age  # 删除 'age' 属性
```

## 一些函数

### range

```python
range( n, m, i )
# return from n to (m-1) 间隔 i 的列表
```

