jQuery.validator.addMethod("regex",function (value,element,params) {
    var reg = new RegExp(params);
    return reg.test(value);
})