## schema 元素

```xml
<?xml version="1.0"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
targetNamespace="http://www.runoob.com"
xmlns="http://www.runoob.com"
elementFormDefault="qualified">
...
</xs:schema>
```

```xml
xmlns:xs = "http://www.w3.org/2001/XMLSchema"

显示 schema 中用到的元素和数据类型来自命名空间 "http://www.w3.org/2001/XMLSchema"。
同时它还规定了来自命名空间 "http://www.w3.org/2001/XMLSchema" 的元素和数据类型应该使用前缀 xs：
```

```xml
targetNamespace = "http://www.runoob.com"

显示被此 schema 定义的元素(note, to, from ……)来自命名空间: "http://www.runoob.com"
```

```xml
xmlns="http://www.runoob.com"

指出默认的命名空间是 "http://www.runoob.com"。
```

```xml
elementFormDefault="qualified"

指出任何 XML 实例文档所使用的且在此 schema 中声明过的元素必须被命名空间限定。
```





## 简易元素

```xml
<xs:element name="xxx" type="yyy"/>
```



### 常用类型

```xml
xs:string
xs:decimal
xs:integer
xs:boolean
xs:date
xs:time
```



### 默认值和固定值

简易元素可拥有指定的默认值或固定值

```xml
当没有其他的值被规定时，默认值就会自动分配给元素。
在下面的例子中，缺省值是 "red"：
<xs:element name="color" type="xs:string" default="red"/>
```

```xml
固定值同样会自动分配给元素，并且您无法规定另外一个值。
在下面的例子中，固定值是 "red"：
<xs:element name="color" type="xs:string" fixed="red"/>
```





## 属性

所有的属性均作为简易类型来声明

简易元素无法拥有属性。假如某个元素拥有属性，它就会被当作某种复合类型。但是属性本身总是作为简易类型被声明的

```xml
声明属性
<xs:attribute name="xxx" type="yyy"/>
```





## 限定

* 限定（restriction）用于为 XML 元素或者属性定义可接受的值



### 对值的限定

定义了带有一个限定且名为 "age" 的元素。age 的值不能低于 0 或者高于 120

```xml
<xs:element name="age">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="120"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```



### 对一组值的限定

* 使用枚举约束把 XML 元素的内容限制为一组可接受的值

定义了带有一个限定的名为 "car" 的元素。可接受的值只有：Audi, Golf, BMW

```xml
<xs:element name="car">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:enumeration value="Audi"/>
      <xs:enumeration value="Golf"/>
      <xs:enumeration value="BMW"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

也可写为

```xml
<xs:element name="car" type="carType"/>

<xs:simpleType name="carType">
  <xs:restriction base="xs:string">
    <xs:enumeration value="Audi"/>
    <xs:enumeration value="Golf"/>
    <xs:enumeration value="BMW"/>
  </xs:restriction>
</xs:simpleType>
```

在这种情况下，类型 "carType" 可被其他元素使用，因为它不是 "car" 元素的组成部分。



### 对一系列值的限定

* 使用模式约束（pattern constraint)把 XML 元素的内容限制定义为一系列可使用的数字或字母

定义了带有一个限定的名为 "letter" 的元素。可接受的值只有小写字母 a - z 其中的一个

```xml
<xs:element name="letter">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```



### 对空白字符的限定

不会移除任何空白字符

```xml
<xs:element name="address">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:whiteSpace value="preserve"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

移除所有空白字符（换行、回车、空格以及制表符）

```xml
<xs:element name="address">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:whiteSpace value="replace"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

移除所有空白字符（换行、回车、空格以及制表符会被替换为空格，开头和结尾的空格会被移除，而多个连续的空格会被缩减为一个单一的空格）

```xml
<xs:element name="address">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:whiteSpace value="collapse"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```



### 对长度的限定

精确到 8 个字符

```xml
<xs:element name="password">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:length value="8"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

最小为 5 个字符，最大为 8 个字符

```xml
<xs:element name="password">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:minLength value="5"/>
      <xs:maxLength value="8"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```



## 复合元素

### 四种类型的复合元素

```
空元素
包含其他元素的元素
仅包含文本的元素
包含元素和文本的元素
```



### 定义复合元素

* 命名此元素

```xml
<xs:element name="employee">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

```
"firstname" 以及 "lastname"，被包围在指示器 <sequence>中。这意味着子元素必须以它们被声明的次序出现
```

* 使用 type 属性引用要使用的复合类型的名称

```xml
<xs:element name="employee" type="personinfo"/>

<xs:complexType name="personinfo">
  <xs:sequence>
    <xs:element name="firstname" type="xs:string"/>
    <xs:element name="lastname" type="xs:string"/>
  </xs:sequence>
</xs:complexType>
```

* 在已有的复合元素之上以某个复合元素为基础，然后添加一些元素

```xml
<xs:element name="employee" type="fullpersoninfo"/>

<xs:complexType name="personinfo">
  <xs:sequence>
    <xs:element name="firstname" type="xs:string"/>
    <xs:element name="lastname" type="xs:string"/>
  </xs:sequence>
</xs:complexType>

<xs:complexType name="fullpersoninfo">
  <xs:complexContent>
    <xs:extension base="personinfo">
      <xs:sequence>
        <xs:element name="address" type="xs:string"/>
        <xs:element name="city" type="xs:string"/>
        <xs:element name="country" type="xs:string"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
```



## 混合内容

```xml
<xs:element name="letter">
  <xs:complexType mixed="true">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="orderid" type="xs:positiveInteger"/>
      <xs:element name="shipdate" type="xs:date"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```





## 指示器

```
Order 指示器：
	All
	Choice
	Sequence
Occurrence 指示器：
	maxOccurs
	minOccurs
Group 指示器：
	Group name
	attributeGroup name
```

### Order 指示器

* 定义元素的顺序

#### All

* 子元素可以按照任意顺序出现，且每个子元素必须只出现一次

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:all>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:all>
  </xs:complexType>
</xs:element>
```



#### choice

* 可出现某个子元素或者可出现另外一个子元素（非此即彼）

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:choice>
      <xs:element name="employee" type="employee"/>
      <xs:element name="member" type="member"/>
    </xs:choice>
  </xs:complexType>
</xs:element>
```



#### sequence 

* 规定子元素必须按照特定的顺序出现：

```xml
<xs:element name="person">
   <xs:complexType>
    <xs:sequence>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```



### Occurrence 指示器

* 定义某个元素出现的频率

#### maxOccurs

* 规定某个元素可出现的最大次数

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="full_name" type="xs:string"/>
      <xs:element name="child_name" type="xs:string" maxOccurs="10"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```



#### minOccurs

* 规定某个元素能够出现的最小次数

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="full_name" type="xs:string"/>
      <xs:element name="child_name" type="xs:string"
      maxOccurs="10" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

如需使某个元素的出现次数不受限制，使用 maxOccurs="unbounded" 声明



#### eg

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>

<persons xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="family.xsd">

<person>
  <full_name>Hege Refsnes</full_name>
  <child_name>Cecilie</child_name>
</person>

<person>
  <full_name>Tove Refsnes</full_name>
  <child_name>Hege</child_name>
  <child_name>Stale</child_name>
  <child_name>Jim</child_name>
  <child_name>Borge</child_name>
</person>

<person>
  <full_name>Stale Refsnes</full_name>
</person>

</persons>
```

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
elementFormDefault="qualified">

<xs:element name="persons">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="person" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="full_name" type="xs:string"/>
            <xs:element name="child_name" type="xs:string"
            minOccurs="0" maxOccurs="5"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>

</xs:schema>
```



### Group 指示器

* 用于定义相关的数批元素

#### 元素组

* 通过 group 声明进行定义
* 必须在 group 声明内部定义一个 all、choice 或者 sequence 元素

定义

```xml
<xs:group name="persongroup">
  <xs:sequence>
    <xs:element name="firstname" type="xs:string"/>
    <xs:element name="lastname" type="xs:string"/>
    <xs:element name="birthday" type="xs:date"/>
  </xs:sequence>
</xs:group>
```

引用

```xml
<xs:group name="persongroup">
  <xs:sequence>
    <xs:element name="firstname" type="xs:string"/>
    <xs:element name="lastname" type="xs:string"/>
    <xs:element name="birthday" type="xs:date"/>
  </xs:sequence>
</xs:group>

<xs:element name="person" type="personinfo"/>

<xs:complexType name="personinfo">
  <xs:sequence>
    <xs:group ref="persongroup"/>
    <xs:element name="country" type="xs:string"/>
  </xs:sequence>
</xs:complexType>
```



#### 属性组

* 通过 attributeGroup 声明来进行定义

定义

```xml
<xs:attributeGroup name="personattrgroup">
  <xs:attribute name="firstname" type="xs:string"/>
  <xs:attribute name="lastname" type="xs:string"/>
  <xs:attribute name="birthday" type="xs:date"/>
</xs:attributeGroup>
```

引用

```xml
<xs:attributeGroup name="personattrgroup">
  <xs:attribute name="firstname" type="xs:string"/>
  <xs:attribute name="lastname" type="xs:string"/>
  <xs:attribute name="birthday" type="xs:date"/>
</xs:attributeGroup>

<xs:element name="person">
  <xs:complexType>
    <xs:attributeGroup ref="personattrgroup"/>
  </xs:complexType>
</xs:element>
```



## any 元素

* <any> 元素使我们有能力通过未被 schema 规定的元素来拓展 XML 文档

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
      <xs:any minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```



## anyAttribute 元素

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:sequence>
    <xs:anyAttribute/>
  </xs:complexType>
</xs:element>
```



## 元素替换

### 元素替换

* 首先声明主元素，然后声明次元素，这些次元素可声明它们能够替换主元素。

```xml
<xs:element name="name" type="xs:string"/>
<xs:element name="navn" substitutionGroup="name"/>
```



### 阻止元素替换

* 使用 block 属性

```xml
<xs:element name="name" type="xs:string" block="substitution"/>
```



## [XSD 实例](http://www.runoob.com/schema/schema-example.html)



