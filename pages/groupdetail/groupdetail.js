var jsondata = {
  "code": 200,
  "data": [{
      "id": "1000320181110",
      "date": "2018年11月10日",
      "state": 0,
      "userNum": 0,
      "userLists": [{
          "username": "阿一",
          "userId": 10001
        },
        {
          "username": "阿二",
          "userId": 10002
        },
        {
          "username": "阿三",
          "userId": 10003
        },
        {
          "username": "阿四",
          "userId": 10004
        },
        {
          "username": "阿五",
          "userId": 10005
        }
      ]
    },
    {
      "id": "1000320181109",
      "date": "2018年11月9日",
      "state": 1,
      "userNum": 4,
      "userLists": [{
          "username": "阿一",
          "userId": 10001
        },
        {
          "username": "阿二",
          "userId": 10002
        },
        {
          "username": "阿三",
          "userId": 10003
        },
        {
          "username": "阿四",
          "userId": 10004
        }
      ]
    },
    {
      "id": "1000320181108",
      "date": "2018年11月8日",
      "state": 1,
      "userNum": 5,
      "userLists": [{
          "username": "阿一",
          "userId": 10001
        },
        {
          "username": "阿二",
          "userId": 10002
        },
        {
          "username": "阿三",
          "userId": 10003
        },
        {
          "username": "阿四",
          "userId": 10004
        },
        {
          "username": "阿五",
          "userId": 10005
        }
      ]
    },
    {
      "id": "1000320181107",
      "date": "2018年11月7日",
      "state": 2,
      "userNum": 4,
      "userLists": [{
          "username": "阿一",
          "userId": 10001
        },
        {
          "username": "阿二",
          "userId": 10002
        },
        {
          "username": "阿三",
          "userId": 10003
        },
        {
          "username": "阿四",
          "userId": 10004
        }
      ]
    },
    {
      "id": "1000320181106",
      "date": "2018年11月6日",
      "state": 1,
      "userNum": 4,
      "userLists": [{
        "username": "阿一",
        "userId": 10001
      },
      {
        "username": "阿二",
        "userId": 10002
      },
      {
        "username": "阿三",
        "userId": 10003
      },
      {
        "username": "阿四",
        "userId": 10004
      }
      ]
    }
  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupInfo: null,
    groupName: null,
    groupId: null,
    reponseData: jsondata.data
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.groupInfo = options
    this.groupName = options.groupName
    this.groupId = options.groupId
    wx.setNavigationBarTitle({
      title: options.groupName + '定课'
    })
    this.setData({
      groupInfo: options,
      groupName: options.groupName,
      groupId: options.groupId
    })
  },

  btnClick: function(e) {
    wx.navigateTo({
      url: '../group_statistics/group_statistics?groupId=' + this.data.groupId + '&groupName=' + this.data.groupName
    })
  },

  itemClick: function(e) {
    console.log(e)
    var index = e.currentTarget.dataset.id;
    var info = jsondata.data[index]
    console.log(info);
    if (info.state == 0){
      wx.navigateTo({
        url: '../create_group_dingke/create_group_dingke?groupName=' + this.data.groupName + '&groupId=' + this.data.groupId + '&id=' + info.id + '&date=' + info.date
      })
    }else if(info.state ==1){
      wx.navigateTo({
        url: '../daydayup/daydayup?dateId=' + info.id,
      })
    }

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