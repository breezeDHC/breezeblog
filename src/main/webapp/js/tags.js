$(function () {
    var array = [
        {text:'AJAX异步请求',weight: 5},
        {text:'LeetCode',weight: 3},
        {text:'树',weight: 5},
        {text:'图',weight: 4},
        {text:'排序',weight: 2},
        {text:'查找',weight: 3},
        {text:'算法',weight: 3},
        {text:'Java',weight: 5},
        {text:'Python',weight: 5},
        {text:'爬虫',weight: 3},
        {text:'Mysql',weight: 5},
        {text:'Oracle',weight: 4},
        {text:'Mybatis',weight: 7},
        {text:'Spring',weight: 2},
        {text:'SpringMVC',weight: 5},
        {text:'Maven',weight: 4},
        {text:'Git',weight: 4},
        {text:'Idea',weight: 3},
    ];
    $("#cloud").jQCloud(array, {
        removeOverflowing: true,
        shape: "elliptic",
        delayedMode:"true",
        height:300,
        width:900
    });
});


