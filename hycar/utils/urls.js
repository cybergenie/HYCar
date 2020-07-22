const globalUrls = {
  ModuleCarList:
    "https://wanxin.souche.com/json/car/getCarListByModule.json",
  RecommendCarList:
    "https://wanxin.souche.com/api/car/homepage/recommend.json",
  BrandList:
    "https://wanxin.souche.com/api/search/options/brands.json",
  DetailCarImageslider:
    "https://wanxin.souche.com/api/dfc/cardetail/car/imageslider.json",
  DetailCarTitle:
    "https://wanxin.souche.com/api/dfc/cardetail/car/title.json",
  SearchCarList:
    "https://wanxin.souche.com/api/search/car.json"
}

function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getExt(filePath) {
  //获取最后一个.的位置
  var index = filePath.lastIndexOf(".");
  //获取后缀
  var ext = filePath.substr(index + 1);
  return ext;
}

export {
  globalUrls,
  getUUID,
  getExt
}