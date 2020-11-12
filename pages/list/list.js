// pages/list/list.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:''


  },

  selfplay: function()
  {
    wx.playBackgroundAudio({
      dataUrl: 'http://182.140.219.18/amobile.music.tc.qq.com/C400003kdpaa3WDb2s.m4a?guid=4823501403&vkey=66DB5793A4816206EAC3AD294455385B99A6008BC7DB82BCEAA9D999F6210EDC49F1AF5F26F8999ECA6F55B3889AA00BCB289C0E05927D17&uin=4148&fromtag=66',
      title: '千千阙歌',
      coverImgUrl: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this
    wx.request({
      url: 'https://api.apiopen.top/musicRankings', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.result["0"].content)
        _this.setData({ musicList: res.data.result["0"].content })
      }
    })
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})