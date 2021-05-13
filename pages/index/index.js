// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    index1: 0,
    index2: 0,
    message: "?",
    arrayX: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrayY: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    number: 0
  },
  createNumber: function () {
    let value = parseInt(100 * Math.random());
    this.number = value;
  },
  bindPickerChange: function (e) {
    this.setData({
      index1: e.detail.value
    })
    this.index1 = e.detail.value
  },
  bindPickerChangeY: function (e) {
    this.setData({
      index2: e.detail.value
    })
    this.index2 = e.detail.value
  },
  ok: function () {
    let sum = parseInt(this.index1) * 10 + parseInt(this.index2)
    if (sum > this.number) { wx.showModal({ content: '大了' }) }
    else if (sum < this.number) { wx.showModal({ content: '小了' }); } else { wx.showModal({ content: '正确' }); }
  }
})
