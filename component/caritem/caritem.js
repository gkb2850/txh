// component/caritem/caritem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type: Array,
      value: []
    },
    typeticket: {
      type: Boolean,
      value: false
    },
    piaoBtn: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goupiao (e) {
      console.log(e)
      let id = e.currentTarget.dataset.id
      let obj = {
        id: id
      }
      this.triggerEvent('setCarChange', obj)
    },
  }
})
