import {loadingConfig,assetsSrc } from "@models/index";
//Get请求
export const Get = (url,params)=>{
  let para = {req: "readed"};
  wx.showLoading(loadingConfig);
  return new Promise((resolve,reject)=>{
    wx.request({
      url:  assetsSrc + url, //仅为示例，并非真实的接口地址
      data: params,
      header: {
        "content-type": "application/json" // 默认值
      },
      method:"GET",
      success: res => {
        wx.hideLoading();
        return resolve(res)  
      },
      fail: res => {
        wx.hideLoading();
        return reject(res);
      }
    })
    
  })
}

//POST请求
export const Post = (url,params)=>{
  wx.showLoading(loadingConfig);
  return new Promise((resolve,reject)=>{
    wx.request({
      url: assetsSrc + url, //仅为示例，并非真实的接口地址
      data: params,
      header: {
        "content-type": "application/json" // 默认值
      },
      method:"POST",
      success: res => {
       
        if (!res.data) {
          console.log("无数据退出");
        }
         
        wx.hideLoading();
        return resolve(res) 

         
      },
      fail: res => {
        wx.hideLoading();
        return reject(res);
       

      }
    })
    
  })
}
 

//getContent获取内容
export const getContentFunc = (url)=>{
  wx.showLoading(loadingConfig);
  return new Promise((resolve,reject)=>{
    wx.request({
      url: assetsSrc + url, //仅为示例，并非真实的接口地址
 
      header: {
        "content-type": "application/json" // 默认值
      },
      method:"GET",
      success: res => {
        
        
        wx.hideLoading();
        return resolve(res)

         
      },
      fail: res => {
        
        wx.hideLoading();
        return reject(res);

      }
    })
    
  })
}