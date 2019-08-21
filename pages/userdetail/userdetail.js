var jsonString = {
  "code": 200,
  "data": {
    "userId": "000001",
    "userName": "张三",
    "sumdata": [{
      "id": "10001",
      "name": "心经",
      "num": 1000
    }, {
      "id": "10002",
      "name": "大悲咒",
      "num": 1000
    }, {
      "id": "10003",
      "name": "金刚经",
      "num": 1000
    }, {
      "id": "10004",
      "name": "药师经",
      "num": 1000
    }],
    "dateLists": [{
      "date": "2018年11月20日",
      "content": [{
        "id": "10001",
        "name": "心经",
        "num": 10
      }, {
        "id": "10002",
        "name": "大悲咒",
        "num": 10
      }, {
        "id": "10003",
        "name": "金刚经",
        "num": 10
      }, {
        "id": "10004",
        "name": "药师经",
        "num": 10
      }]
    }, {
      "date": "2018年11月19日",
      "content": [{
        "id": "10001",
        "name": "心经",
        "num": 10
      }, {
        "id": "10002",
        "name": "大悲咒",
        "num": 10
      }, {
        "id": "10003",
        "name": "金刚经",
        "num": 10
      }, {
        "id": "10004",
        "name": "药师经",
        "num": 10
      }]
    }, {
      "date": "2018年11月18日",
      "content": [{
        "id": "10001",
        "name": "心经",
        "num": 10
      }, {
        "id": "10002",
        "name": "大悲咒",
        "num": 10
      }, {
        "id": "10003",
        "name": "金刚经",
        "num": 10
      }, {
        "id": "10004",
        "name": "药师经",
        "num": 10
      }]
    }, {
      "date": "2018年11月17日",
      "content": [{
        "id": "10001",
        "name": "心经",
        "num": 10
      }, {
        "id": "10002",
        "name": "大悲咒",
        "num": 10
      }, {
        "id": "10003",
        "name": "金刚经",
        "num": 10
      }, {
        "id": "10004",
        "name": "药师经",
        "num": 10
      }]
    }]
  }
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sumdata: null,
    dateLists: null,
    userName: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      sumdata: jsonString.data.sumdata,
      dateLists: jsonString.data.dateLists,
      userName: jsonString.data.userName
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