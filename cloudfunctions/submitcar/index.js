// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
 const content = event.content;
 const images = event.images;
 return await db.collection("carlist").add({
   data:{
     content:content,
     images:images
   }
 })
}