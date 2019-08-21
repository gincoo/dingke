var jsondata = {
  "code": 200,
  "data": [{
      "groupName": "旧宫一组",
      "groupId": "001"
    },
    {
      "groupName": "旧宫二组",
      "groupId": "002"
    },
    {
      "groupName": "旧宫三组",
      "groupId": "003"
    }
  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupLists: jsondata.data,
    // groupLists: null
  },

  //item 点击事件
  itemClick: function(e) {
    // console.log(e);
    var index = e.currentTarget.dataset.id;
    var groupInfo = jsondata.data[index];
    console.log(groupInfo)
    wx.navigateTo({
      url: '../groupdetail/groupdetail?groupId=' + groupInfo.groupId + "&groupName=" + groupInfo.groupName,
    })
  },
  createGroup: function(e) {
    wx.navigateTo({
      url: '../creategroup/creategroup'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 获取组数据
   */
  getGroupFromServer: function() {
    const db = wx.cloud.database()
    db.collection('t_group').get().then(res => {
      console.log(res)
      this.setData({
        groupLists: res.data
      })
    }).catch(console.error)
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
    // this.getGroupFromServer();
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