// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
 const seriesName = event.seriesName;
 const simpleModelName = event.simpleModelName; 
 const price = event.price;
 const newPriceTax = event.newPriceTax;
 const cityName = event.cityName;
 const color = event.color;
 const engineSize = event.engineSize;
 const firstLicensePlateDate = event.firstLicensePlateDate;
 const mileage = event.mileage;
 const type = event.type;
 const carDescription = event.carDescription;
 const status = event.status;
 const images = event.images;
 return await db.collection("carlist").add({
   data:{
    seriesName:seriesName,
      simpleModelName:simpleModelName,      
      price:price,
      newPriceTax:newPriceTax,
      cityName:cityName,
      color:color,
      engineSize:engineSize,
      firstLicensePlateDate:firstLicensePlateDate,
      mileage:mileage,
      type:type,
      carDescription:carDescription,
      status:status,
      createTime:db.serverDate(),
    images:images
   }
 })
}