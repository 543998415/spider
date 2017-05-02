/**
 * Created by dllo on 17/5/2.
 */
const async = require('async');


var arr=[
    {name:'文冠龙',age:999,delay:500},
    {name:'李青',age:998,delay:200},
    {name:'于凤祥',age:997,delay:1000},
    {name:'丁伊雪',age:996,delay:100},
    {name:'赵高阳',age:995,delay:1500}
];

/*
map(arr, iterator(item, callback), callback(err, results))
map的重点是转换，即把集合中的元素通过异步操作转为另一个对象，最后可以得到转换后的对象数组。它也提供了并行与顺序执行两种方式。
这里给一个示例，给集合中的每个元素以异步方式增加

*/
async.map(arr, function(item, callback) {
    console.log('1.1 enter:' + item.name+item.delay);
    setTimeout(function() {
        console.log('1.2 handle:' + item.name);
        callback(null, item.name+'!!!');
    }, item.delay);
}, function(err,results) {
    console.log('1.3 err: ', err);
    console. log('1.4 results: ', results);
});

// map 对各元素的操作是并行的，结果会汇总在一起交给最后的回调。

// mapSeries 顺序执行

async.mapSeries(arr, function(item, callback) {
    console.log('2.1 enter:' + item.name+item.delay);
    setTimeout(function() {
        console.log('2.2 handle:' + item.name);
        callback(null, item.name+'!!!');
    }, item.delay);
}, function(err,results) {
    console.log('2.3 err: ', err);
    console. log('2.4 results: ', results);
});