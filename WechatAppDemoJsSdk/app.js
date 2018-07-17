//app.js
const Bmob = require("/dist/Bmob-1.4.4.min.js");
const common = require("/utils/common.js");

//初始化 Bmob.initialize("你的Application ID", "你的REST API Key");
Bmob.initialize("2b515d918cf5e1b45b5ad89164fcd7ff","927950dd9128da998c752d1addfcf47e");
//Bmob.initialize("e304f0d93e776974b5fe905d5da282b4", "8be82da0f1ed4e5f18a495069ed5b176");

App({
  onLaunch: function () {
    //一键登录
    Bmob.User.auth().then(res=>{
      console.log(res);
      console.log("一键登录成功");
      var userData = {nickName:res.nickName,objectId:res.objectId,openid:res.openid,userPic:res.userPic,username:res.username};
      wx.setStorageSync('userData', userData);
      wx.setStorageSync('openid', res.openid)
    }).catch(err=>{
      console.log(err);
    })
  },
  globalData: {
    userInfo: null
  }
})