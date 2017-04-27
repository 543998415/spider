/**
 * Created by dllo on 17/4/27.
 */
const request = require('request');
const queryString = require('querystring');
const http =require('http');
const fs = require('fs');
const url = require('url');
const downloadImage = require('./downloadImage')
const path = require('path');

//请求内容
var options = {
    method: 'GET',
    url: 'http://news-at.zhihu.com/api/4/news/latest',
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var jsonObj = JSON.parse(body);
    var objArr = jsonObj.stories;
    // console.log(obj)
    // console.log(jsonObj);
    objArr.forEach(function (obj) {
        var name = obj.title+'.jpg';
        var images = obj.images[0];
        var thePath = path.join('stories',name)
        // request(images).pipe(fs.createWriteStream(thePath))
    })
    var topArr = jsonObj.top_stories;
    topArr.forEach(function (obj) {
        console.log(obj.image)
        var name = obj.title+'.jpg';
        var images = obj.image;
        var thePath = path.join('top_stories',name)
        request(images).pipe(fs.createWriteStream(thePath))
    })
});