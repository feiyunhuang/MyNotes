SOAP 是用于访问网络服务的协议

## 语法

```
必需的 Envelope 元素，可把此 XML 文档标识为一条 SOAP 消息
可选的 Header 元素，包含头部信息
必需的 Body 元素，包含所有的调用和响应信息
可选的 Fault 元素，提供有关在处理此消息所发生错误的信息
```



## Envelope

必需的 SOAP 的 Envelope 元素是 SOAP 消息的根元素。它可把 XML 文档定义为 SOAP 消息。

```xml
<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
  ...
  Message information goes here
  ...
</soap:Envelope>
```

```
SOAP 消息必须拥有与命名空间 "http://www.w3.org/2001/12/soap-envelope" 相关联的一个 Envelope 元素。
如果使用了不同的命名空间，应用程序会发生错误，并抛弃此消息。
```



* SOAP 在默认的命名空间中 ("http://www.w3.org/2001/12/soap-envelope") 定义了三个属性。

```
actor
mustUnderstand
encodingStyle
```

```
soap:actor="URI"
```

```
soap:encodingStyle="URI"
```

```
soap:mustUnderstand="0|1"
```





