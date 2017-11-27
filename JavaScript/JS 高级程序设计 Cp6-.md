## 第六章
P156

### 理解对象
#### 属性类型
* 数据属性
    * 4个特性
        * [[Configurable]]
        * [[Enumerable]]
        * [[Writable]]
        * [[Value]]
* 访问器属性
    * 4个特性
        * [[Configurable]]
        * [[Enumerable]]
        * [[Get]]
        * [[Set]] 
    * eg:
        ```javascript
        var book = {
            _year: 2004,
            edition: 1
        }
            
        Object.defineProperty( book, "year", {
            get: function(){
               return this._year;
            }
            set: function( newValue ){
                if( newValue>2004 ){
                    this._year = newValue;
                    this.edition += newValue - 2004;
                }
            }
        });
            
        book.year = 2005;
        alert( book.edition );      // 2
        ```
        
        * year 前面的下划线是一种常用的记号，用于表示只能通过对象方法访问的属性
* 定义多个属性
    * Object.defineProperties()
        * 第一个对象添加和修改其属性的对象
        * 第二个对象的属性与第一个对象中要添加或修改的属性一一对应
* 读取属性的特性
    * Object.getOwnPropertyDescriptor()
        * 第一个参数
            * 属性所在对象
        * 第二个参数
            * 要读取其描述符的属性名称
                
#### 创建对象
* 工厂模式
* 构造函数模式
    ```javascript
    function Person(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function(){
            alert( this.name );
        };
    }
    
    var ob = new Person( "Greg", 27, "Doctor" );
    // alert(person1 instanceof Object);  //true
    // alert(person1 instanceof Person);  //true
    ```
    * 将构造函数当做函数
    ```javascript
    // 当做构造函数使用
    var person = new Person( "Jack", 29, "SE" );
    person.sayNmae();               // "Jack"
    
    // 作为普通函数调用  
    Person( "Greg", 27, "Doctor" );   // 添加到 window
    window.sayName();               //"Greg"
    
    // 在另一个对象的作用域中调用 
    var o = new Object();
    Person.call( o, "Kristen", 25, "Nurse" ); 
    o.sayName();                    //"Kristen"
    ```
* 构造函数的问题
    * Person 中的 sayName 函数在不同对象中的实例化不一样
    ```javascript
    function Person(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = sayName;
    }
    function sayName(){
        alert(this.name);
    }
    ```
    * 将函数定义转移到构造函数外部，Person 内部 sayName 是一个指向函数的指针
    
#### 原型模式
P165
```javascript
 function Person(){
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function(){
        alert(this.name);
    };
    var person1 = new Person();
    person1.sayName();      //"Nicholas"
    var person2 = new Person();
    person2.sayName();      //"Nicholas"
    alert(person1.sayName == person2.sayName);  //true
```


    
    
    
    
    