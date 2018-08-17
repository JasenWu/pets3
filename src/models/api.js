import { assetsSrc } from "@models/index";
import { Get,Post } from "@assets/js/ajax";

 //获取目录列表
export const getList = (params = {}) => {
  return Get(`${assetsSrc}contentData/unitList.json`, params)
}

//获取已读数量
export const getCount = (params = {}) => {
  return Get(`${assetsSrc}api/RestController.php`, params)
}
//更新已读数量
export const updateCount = (params = {}) => {
  return Post(`${assetsSrc}api/RestController.php`, params)
}