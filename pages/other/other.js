// pages/creatgroup/creatgroup.js
Page({

  bindDateChange: function(e) {
    var show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
    var date = new Date();
    var showTime;
    if ((date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() > 10 ? date.getDate : '0' + date.getDate())) == e.detail.value) {
      showTime = '今天 ' + e.detail.value + show_day[date.getDay()];
    } else {
      showTime = e.detail.value + ' ' + show_day[date.getDay()];
    }
    this.setData({
      date: showTime
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    array: ['旧宫一组', '旧宫二组', '旧宫三组', '旧宫四组'], index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
    var my_date = new Date();
    this.setData({
      date: '今天 ' + my_date.getFullYear() + '-' + (my_date.getMonth() + 1) + '-' + (my_date.getDate() > 10 ? my_date.getDate : '0' + my_date.getDate()) +' '+ show_day[my_date.getDay()]
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})