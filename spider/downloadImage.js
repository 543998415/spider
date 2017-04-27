/**
 * Created by dllo on 17/4/27.
 */
const request = require('request');
const fs = require('fs');
const url = require('url');
const systemPath = require('path')

function downloadImage(imageUrl,imageDirName) {

    //1。功过url解析图片url
    var urlObj = url.parse(imageUrl);
    //2.取得pathname 但是其中包含干扰项
    var urlarr = urlObj.pathname.split('/');
    //3.取的字符串中最后一个元素 作为文件名
    // console.log(urlarr[urlarr.length-1]);
    //删除数组中其他元素 返回数组中最后一个
    var imageName = urlarr.pop();
    //4.生成图片路径
    var imagePath = systemPath.join(__dirname,'images',imageDirName,imageName);
    // request(imageUrl).pipe(fs.createWriteStream(imagePath));
    //给数据库使用的位置
    var sqlImagePath = systemPath.join('images',imageDirName,imageName);
    console.log('img=='+imagePath);
    console.log('sql=='+sqlImagePath);
    return sqlImagePath;
}

module.exports = downloadImage;
