Component({
  data:{
    camera: {
      takePhotoIcon: '../../image/image_4.png',
      flashOnIcon:'../../image/flash_4.png',
      flashOffIcon:'../../image/flash_off_4.png',
      cameraIcon:'../../image/camera.png',
      previewIcon:'../../image/featureType1.png',
      returnCameraIcon:'../../image/reback.png'
    },
    isHidden:false 
  },
  ready: function () {
    if (wx.getStorageSync('guide')) {
      this.chooseImage();
      wx.removeStorageSync('guide');
    }
  },
  methods:{
    takePhoto: function () {
      let that = this;
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'normal',
        success: (res) => {
          let camera = that.data.camera;
          camera.previewIcon = res.tempImagePath;
          that.setData({
            camera: camera,
            isHidden: true
          })
        }
      })
    },
    chooseImage: function () {
      let that = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          let camera = that.data.camera;
          camera.previewIcon = res.tempFilePaths;
          that.setData({
            camera: camera,
            isHidden: true
          })
        }
      })
    },
    returnCamera: function () {
      this.setData({
        isHidden: false
      });
    },
    previewHandle: function () {
      let isHidden = true;
      this.setData({
        isHidden: isHidden
      });
    }
  }
  
  
})