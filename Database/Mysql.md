### 建库

```sql
CREATE DATABASE databaseName
	CHARACTER SET utf8
	DEFAULT CHARACTER SET utf8
	COLLATE utf8_general_ci
	DEFAULT COLLATE utf8_general_ci ;
```

### 建表

```sql
DROP TABLE IF EXISTS tableName;

CREATE TABLE tableName(
...
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```



### 连接

* jdbc

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class database {
	private static final String URL = "jdbc:mysql://localhost:3306/hotel?useSSL=true&characterEncoding=utf8";
	private static final String UNAME = "***";
	private static final String PWD = "***";
	private static Connection connect = null;
	
	static{
		try{
			Class.forName("com.mysql.jdbc.Driver");
			//加载MySQL JDBC驱动程序
			connect = DriverManager.getConnection(URL,UNAME,PWD);	
		}catch (ClassNotFoundException e){
			e.printStackTrace();
		}catch (SQLException e){
		      e.printStackTrace();
		}catch (Exception e){
			e.printStackTrace();
		}
	}
	
	protected static Connection getInstance(){
		return connect;
	}
}
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

[mysql datetime 类型与java.util.Date类型的值如何比较](https://segmentfault.com/q/1010000008617215)

[mysql中类型为datetime的时间比较](https://segmentfault.com/q/1010000003055302)



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









```

```











