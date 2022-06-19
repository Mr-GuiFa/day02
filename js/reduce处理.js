let url = 'http://www.baidu.com/?name=zhangsan&age=18&sex=nan'
let fk = url.split('?')[1]
console.log(fk);
let pp = fk.replace(/(^\?)|(&$)/g, "").split("&")
    .reduce((query, it) => {
        const [key, value] = it.split("=");
        query[key] = decodeURIComponent(value);
        return query;
    }, {});
console.log(pp);
