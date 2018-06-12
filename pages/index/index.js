//index.js
Page({
  data: {
  },
  
  onLoad: function (options) {
    if (options.guide) {
      wx.setStorageSync('guide', 1);
    }
  }
})
