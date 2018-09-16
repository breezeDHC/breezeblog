<%@ page import="top.dhcblog.entity.Message,java.util.List" %>
<%@ page contentType="text/html; UTF-8" pageEncoding="UTF-8" language="java" isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html lang="en">
<head>
    <title>留言板</title>
    <meta  charset="UTF-8">
    <style>
        div {
            margin: 0;
            padding: 0;
            font-size: 12px;
            margin: 0 auto;
        }

        h3 {
            text-align: center
        }

        #container {
            width: 500px;
        }

        .article {
            border: 1px solid #a6cbe7;
            margin-top: 5px;
        }

        .author {
            background-color: #0099FF;
            width: 100%;
            height: 24px;
            line-height: 24px;
        }

        .content {
            height: 40px;
            padding: 10px;
        }

        .author span {
            float: right;
            padding-right: 10px;
        }

        .time {
            border-top: solid 1px #a6cbe7;
        }

        .page {
            text-align: right;
            height: 30px;
            line-height: 30px;
            padding-right: 10px;
        }
    </style>
</head>

<body>
<div id="container">
    <div><h3>留言板</h3></div>

    <div class="show">
        <c:forEach items="${msgList}" var = "msg">
            <div class="article">
                <div class="author">${msg.username}<span>${msg.id}</span></div>
                <div class="content">${msg.msg}</div>
                <div class="page time">${msg.createTime}</div>
            </div>
        </c:forEach>
    </div>
    <div class="page">
        <input class="btn1" type="button" value="上一页" onClick="">
        <input class="btn1" type="button" value="下一页" onClick="">
    </div><br>
    <div>
        <form action="/MessageServlet" method="post">
            <div>
                用户名: <input type="text" name="author" value=""/>
            </div><br>
            <div>
                留言信息: <textarea name="message" rows="5" cols="72"></textarea>
            </div>
            <div align="center"><input type="reset" value="清除"/> <input type="submit" value="留言"/></div>
        </form>
    </div>
</div>

</body>
</html>
