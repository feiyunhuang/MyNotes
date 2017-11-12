### 建表

```
DROP TABLE IF EXISTS tableName;

CREATE TABLE tableName(
...
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```



### 查询

```Java
String sql = "SELECT ... FROM tableName WHERE ...";
try{
  PreparedStatement pstmt = connect.prepareStatement(sql);
  ResultSet rset = pstmt.executeQuery();
  while( rset.next() ){
    ...
  }
  ptst.close()
}
```

### 插入

```

```



### 日期字段相减

* 两个 DateTime 字段名分别为 beginDateTime，endDateTime

```
// 得到日期之间的秒数
UNIX_TIMESTAMP(endDateTime) - UNIX_TIMESTAMP(beginDateTime)
```

* 两个字段都为Time类型

```
// 如果两个时间都在同一天，相减可以得到相差的秒数，但如果跨天，月，年都有问题
TIME_TO_SEC(endDateTime) - TIME_TO_SEC(beginDateTime)
```



### 字符串转 int / double

```Sql
CAST(value as type);  
CONVERT(value, type); 

type 可以是：
	二进制:	BINARY    
    字符型:	CHAR()，可带参数     
    日期:		DATE     
    时间: 	TIME     
    日期时间型:DATETIME     
    浮点数:	DECIMAL      
    整数:		SIGNED     
    无符号整数:UNSIGNED 
```

```
eg:
	CONVERT( value, DECIMAL(10,2) )
		保留两位小数
```



















