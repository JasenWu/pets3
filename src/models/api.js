
import { Get,Post,getContentFunc } from "@assets/js/ajax";

 //获取目录列表
export const getList = (params = {}) => {
  return Get(`contentData/unitList.json`, params)
}

//获取已读数量
export const getCount = (params = {}) => {
  return Get(`api/RestController.php`, params)
}
//更新已读数量
export const updateCount = (params = {}) => {
  return Post(`api/RestController.php`, params)
}

//更新已读数量
export const getContent = (url) => {
  return getContentFunc(url)
}