// pages/welcome/welcome.js
const app = getApp()

function changeDate(that) {
  var objDate = new Date();
  var intNow = objDate.getTime();
  var arrDatas = [{
    time: 1514736000,
    title: '神盾局特工1'
  }, {
    time: 1519106603,
    title: '神盾局特工2'
  }];

  for (let i in arrDatas) {
    let t = intNow - arrDatas[i].time * 1000;
    let d = parseInt(t / 86400000);
    let h = parseInt((t - d * 86400000) / 3600000);
    let m = parseInt((t - d * 86400000 - h * 3600000) / 60000);
    let s = parseInt((t - d * 86400000 - h * 3600000 - m * 60000) / 1000);
    arrDatas[i].date = "至今已经" + d + "天" + h + "小时" + m + "分钟" + s + "秒";
  }
  that.setData({ datesArry: arrDatas });
  setTimeout(function () {
    changeDate(that);
  }
    , 1000)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    changeDate(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})