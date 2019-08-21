import onfire from '../onfire.js';

var jsonResponse = {
  "code": 200,
  "data": [{
      "id": "000001",
      "name": "金刚经"
    },
    {
      "id": "000002",
      "name": "药师经"
    },
    {
      "id": "000003",
      "name": "阿弥陀经"
    },
    {
      "id": "000004",
      "name": "心经"
    },
    {
      "id": "000005",
      "name": "妙法莲华经"
    },
    {
      "id": "000006",
      "name": "楞严经"
    },
    {
      "id": "000007",
      "name": "楞伽经"
    },
    {
      "id": "000008",
      "name": "地藏经"
    },
    {
      "id": "000009",
      "name": "楞严咒"
    },
    {
      "id": "000010",
      "name": "大悲咒"
    },
    {
      "id": "000011",
      "name": "文殊心咒"
    },
    {
      "id": "000012",
      "name": "绿度母心咒"
    },
    {
      "id": "000013",
      "name": "三十五佛忏"
    },
    {
      "id": "000014",
      "name": "金刚萨埵心咒"
    },
    {
      "id": "000015",
      "name": "百字明"
    }
  ]
};


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataLists: null,
    index: null
  },

  pickClick: function(e) {
    console.log(e)
    console.log('index:'+this.data.index)
    var json = {
      'index': this.data.index,
      "id": e.currentTarget.dataset.id.id,
      "name": e.currentTarget.dataset.id.name
    };
    onfire.fire('key', json); //key 为上文中订阅的消息
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      dataLists: jsonResponse.data,
      index: options.index
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
    console.log("onUnload()")

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