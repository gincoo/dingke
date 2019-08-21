import onfire from '../onfire.js';

var arrays = ["", "", "", ""];
var eventObj = onfire.on('key', function(args) {
  // 当消息被传递时，做具体的事
  console.log(args)
  arrays[args.index] = args.name;

});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupName: null,
    groupId: null,
    title: null,
    items: null,
    num: 1,
    minusStatus: 'disable'
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad")
    console.log(options);

    this.setData({
      groupName: options.groupName,
      groupId: options.groupId,
      title: options.title,
      items: arrays
    })

    var eventObj = onfire.on('event', function(args) {
      console.log('this is a event 2');
    });

  },


  //事件处理函数
  /*点击减号*/
  bindMinus: function() {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  /*点击加号*/
  bindPlus: function() {
    var num = this.data.num;
    num++;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  /*输入框事件*/
  bindManual: function(e) {
    console.log('bindManual'+e)
    var num = e.detail.value;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },

  addItem: function(e) {
    // items.push(1);
    // this.setData({
    //   items: item
    // })
    arrays.push(arrays.length)
    console.log(arrays)
    this.setData({
      items: arrays
    })
  },

  itemClick: function(e) {
    //点击item 选择定课
    console.log(e)
    wx.navigateTo({
      url: '../selectclass/selectclass?index=' + e.currentTarget.dataset.id
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
    console.log("onShow")
    this.setData({
      items: arrays
    })
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
    console.log(onUnload)
    onfire.un('key');
    onfire.un(eventObj2);
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

  },



})