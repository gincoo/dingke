var responseData = {
  "code": 200,
  "data": {
    "dateId": "1000320181120",
    "groupId": "10003",
    "groupName": "旧宫三组",
    "title": "2018年11月20日定课",
    "content": "顶礼本师释迦牟尼佛\n各位师兄好！我们约定共同增上，勤修弟子相。每天完成定课，定课情况接龙如下",
    "users": [{
        "userId": "100001",
        "userName": "师兄一",
        "content": [{
            "id": "00001",
            "name": "金刚经",
            "num": 10
          },
          {
            "id": "00002",
            "name": "药师经",
            "num": 10
          },
          {
            "id": "00003",
            "name": "打坐",
            "num": 3
          }
        ]
      },
      {
        "userId": "100002",
        "userName": "师兄二",
        "content": [{
            "id": "00001",
            "name": "金刚经",
            "num": 10
          },
          {
            "id": "00002",
            "name": "药师经",
            "num": 10
          },
          {
            "id": "00003",
            "name": "打坐",
            "num": 3
          }
        ]
      },
      {
        "userId": "100003",
        "userName": "师兄三",
        "content": [{
            "id": "00001",
            "name": "金刚经",
            "num": 10
          },
          {
            "id": "00002",
            "name": "药师经",
            "num": 10
          },
          {
            "id": "00003",
            "name": "打坐",
            "num": 3
          }
        ]
      },
      {
        "userId": "100004",
        "userName": "师兄四",
        "content": [{
            "id": "00001",
            "name": "金刚经",
            "num": 10
          },
          {
            "id": "00002",
            "name": "药师经",
            "num": 10
          },
          {
            "id": "00003",
            "name": "打坐",
            "num": 3
          },
          {
            "id": "00004",
            "name": "心经",
            "num": 10
          },
          {
            "id": "00005",
            "name": "大悲咒",
            "num": 10
          },
          {
            "id": "00006",
            "name": "文殊心咒",
            "num": 10
          },
          {
            "id": "00007",
            "name": "阿弥陀佛佛号",
            "num": 10
          },
          {
            "id": "00008",
            "name": "百字明",
            "num": 10
          }
        ]
      },
      {
        "userId": "100005",
        "userName": "师兄五",
        "content": [{
            "id": "00001",
            "name": "金刚经",
            "num": 10
          },
          {
            "id": "00002",
            "name": "药师经",
            "num": 10
          },
          {
            "id": "00003",
            "name": "打坐",
            "num": 3
          }
        ]
      },
      {
        "userId": "100001",
        "userName": "师兄六",
        "content": [{
            "id": "00001",
            "name": "金刚经",
            "num": 10
          },
          {
            "id": "00002",
            "name": "药师经",
            "num": 10
          },
          {
            "id": "00003",
            "name": "打坐",
            "num": 3
          }
        ]
      }
    ]
  }
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData: null,
    userLists: null
  },

  createDingke: function(e) {
    console.log(e)
    //点击定课按钮
    wx.navigateTo({
      url: '../create_user_dingke/createdingke?dateId=' + responseData.data.dateId + "&groupId=" + responseData.data.groupId + "&groupName=" + responseData.data.groupName+"&title="+responseData.data.title
    })
  },

  userClick: function(e) {
    //用户详情页跳转
    wx.navigateTo({
      url: '../userdetail/userdetail'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var dateId = options

    //使用id 发起网络请求获取详细信息。此处使用假数据 responeData
    console.log(responseData.data.title)

    wx.setNavigationBarTitle({
      title: responseData.data.groupName,
    })

    this.setData({
      pageData: responseData.data,
      userLists: responseData.data.users
    });


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