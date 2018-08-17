import {loadingConfig } from "@models/index";
//Get请求
export const Get = (url,params)=>{
  console.log('params',params)
  let para = {req: "readed"};
  wx.showLoading(loadingConfig);
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: params,
      header: {
        "content-type": "application/json" // 默认值
      },
      method:"GET",
      success: res => {
        if (!res.data) {
          console.log("无数据退出");
        }
        resolve(res)
        wx.hideLoading();

         
      },
      fail: res => {
        reject(res);
        wx.hideLoading();

      }
    })
    
  })
}

//POST请求
export const Post = (url,params)=>{
  wx.showLoading(loadingConfig);
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: params,
      header: {
        "content-type": "application/json" // 默认值
      },
      method:"POST",
      success: res => {
       
        if (!res.data) {
          console.log("无数据退出");
        }
        resolve(res)
        wx.hideLoading();

         
      },
      fail: res => {
        reject(res);
        wx.hideLoading();

      }
    })
    
  })
}