var jsonString = {
  "content": [{
      "id": "00001",
      "name": "金刚经",
      "num": 100000
    },
    {
      "id": "00002",
      "name": "药师经",
      "num": 100000
    },
    {
      "id": "00003",
      "name": "打坐",
      "num": 1000
    },
    {
      "id": "00004",
      "name": "心经",
      "num": 100000
    },
    {
      "id": "00005",
      "name": "大悲咒",
      "num": 100000
    },
    {
      "id": "00006",
      "name": "文殊心咒",
      "num": 100000
    },
    {
      "id": "00007",
      "name": "阿弥陀佛佛号",
      "num": 100000
    },
    {
      "id": "00008",
      "name": "百字明",
      "num": 100000
    }
  ],
  "users": [{
      "userId": "100001",
      "userName": "师兄一",
      "content": [{
          "id": "00001",
          "name": "金刚经",
          "num": 1000
        },
        {
          "id": "00002",
          "name": "药师经",
          "num": 1000
        },
        {
          "id": "00003",
          "name": "打坐",
          "num": 300
        }
      ]
    },
    {
      "userId": "100002",
      "userName": "师兄二",
      "content": [{
          "id": "00001",
          "name": "金刚经",
          "num": 1000
        },
        {
          "id": "00002",
          "name": "药师经",
          "num": 1000
        },
        {
          "id": "00003",
          "name": "打坐",
          "num": 300
        }
      ]
    },
    {
      "userId": "100003",
      "userName": "师兄三",
      "content": [{
          "id": "00001",
          "name": "金刚经",
          "num": 1000
        },
        {
          "id": "00002",
          "name": "药师经",
          "num": 1000
        },
        {
          "id": "00003",
          "name": "打坐",
          "num": 300
        }
      ]
    },
    {
      "userId": "100004",
      "userName": "师兄四",
      "content": [{
          "id": "00001",
          "name": "金刚经",
          "num": 1000
        },
        {
          "id": "00002",
          "name": "药师经",
          "num": 1000
        },
        {
          "id": "00003",
          "name": "打坐",
          "num": 300
        },
        {
          "id": "00004",
          "name": "心经",
          "num": 1000
        },
        {
          "id": "00005",
          "name": "大悲咒",
          "num": 1000
        },
        {
          "id": "00006",
          "name": "文殊心咒",
          "num": 1000
        },
        {
          "id": "00007",
          "name": "阿弥陀佛佛号",
          "num": 1000
        },
        {
          "id": "00008",
          "name": "百字明",
          "num": 1000
        }
      ]
    },
    {
      "userId": "100005",
      "userName": "师兄五",
      "content": [{
          "id": "00001",
          "name": "金刚经",
          "num": 1000
        },
        {
          "id": "00002",
          "name": "药师经",
          "num": 1000
        },
        {
          "id": "00003",
          "name": "打坐",
          "num": 300
        }
      ]
    },
    {
      "userId": "100001",
      "userName": "师兄六",
      "content": [{
          "id": "00001",
          "name": "金刚经",
          "num": 1000
        },
        {
          "id": "00002",
          "name": "药师经",
          "num": 1000
        },
        {
          "id": "00003",
          "name": "打坐",
          "num": 300
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
    groupName: null,
    groupId: null,
    users: null,
    contents: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      groupName: options.groupName,
      groupId: options.groupId,
      users: jsonString.users,
      contents: jsonString.content
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