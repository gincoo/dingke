// pages/creategroup/creategroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupName: null,
    groupDetail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


  /**标题 input 事件 */
  groupNameInput: function(e) {
    console.log(e)
    this.setData({
      groupName: e.detail.value
    })
  },

  /**内容 input 事件 */
  groupDetailInput: function(e) {
    console.log(e)
    this.setData({
      groupDetail: e.detail.value
    })
  },

  /**
   * 创建点击事件
   */
  createClick: function(e) {
    if (!this.data.groupName && typeof (this.data.groupName) != "undefined" && this.data.groupName != 0) {
      console.log('createClick groupName is null!')
      return;
    }
    if (!this.data.groupDetail && typeof (this.data.groupDetail) != "undefined" && this.data.groupDetail != 0) {
      console.log('createClick groupDetail is null!')
      return;
    }　　
    //执行服务端数据库插入语句
    const db = wx.cloud.database()
    db.collection('t_group').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          name: this.data.groupName,
          detail: this.data.groupDetail,
        }
      })
      .then(res => {
        console.log(res)
        console.log('创建成功')
      })
      .catch(console.error)

  },

  /**
   * 返回点击事件
   */
  backClick:function(e){
    wx.navigateBack({
      delta: 1
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