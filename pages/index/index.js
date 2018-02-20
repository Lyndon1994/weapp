//index.js
//获取应用实例
const app = getApp()

function changeDate(that) {
  var objDate = new Date();
  var intNow = objDate.getTime();
  var time = 1493474400;
  var date;
  let t = intNow - time * 1000;
  let d = parseInt(t / 86400000);
  let h = parseInt((t - d * 86400000) / 3600000);
  let m = parseInt((t - d * 86400000 - h * 3600000) / 60000);
  let s = parseInt((t - d * 86400000 - h * 3600000 - m * 60000) / 1000);
  date = d + "天" + h + "小时" + m + "分钟" + s + "秒";
  that.setData({ mottoDate: date });
  setTimeout(function () {
    changeDate(that);
  }
    , 1000)
}

Page({
  data: {
    motto: '我们在一起'
  },
  onLoad: function () {
    changeDate(this);
  }
})
