const BASE_URL = 'https://m.myxiaodi.com/yrg/'
/* 首页轮播图 */
const carouselList = [
  {
    src: '/static/temp/banner1.jpg',
    background: 'rgb(203, 87, 60)'
  },
  {
    src: '/static/temp/banner2.jpg',
    background: 'rgb(205, 215, 218)'
  },
  {
    src: '/static/temp/banner3.jpg',
    background: 'rgb(183, 73, 69)'
  }
]

const tagsList = [
  {
    id: 1,
    name: '小地家族'
  },
  {
    id: 2,
    name: '小地单挑'
  },
  {
    id: 3,
    name: '二十四鲜'
  },
  {
    id: 3,
    name: '抢鲜'
  },
  {
    id: 4,
    name: '88折会员卡'
  },
  {
    id: 5,
    name: '超级年卡'
  },
  {
    id: 6,
    name: '精选农场'
  },
  {
    id: 7,
    name: '品牌故事'
  }
]

const msgs = [
  '果小地以城市、企业、个人为圈层，为会员提供各种折扣，随时关注群动态',
  '随时关注所在群动态，享受超低折扣，及特价商品，超始折扣为88折',
  '免费开通88折会员卡，并惠及朋友，请点咨询按钮'
]

const productList = [{
  id: 1,
  type: '小地家族',
  productList: [{
    title: '盲盒款｜酷工作', // 标题
    pic: 'upload/files/20200715090440RVEg9HYf.jpg',
    describe: '办公族专享｜实价24.2元/盒/次起', // 描述
    price: 29.9, // 价格
    xl: 10,
    xssl: 200
  }, {
    title: '定制款｜酷礼遇', // 标题
    pic: 'upload/files/20200715090602IfNUAd9w.jpg',
    describe: '日常关系型礼品｜实价32.56元/盒/次起', // 描述
    price: 39.9, // 价格
    xl: 10,
    xssl: 300
  }]
}, {
  id: 2,
  type: '二十四鲜',
  productList: [{
    title: '24鲜3次体验卡', // 标题
    pic: 'upload/files/20200715113820j4NuLrJ9.jpg',
    describe: '顺身｜顺时｜顺果', // 描述
    price: 29.9, // 价格
    xl: 10,
    xssl: null
  }, {
    title: '二十四鲜卡', // 标题
    pic: 'upload/files/20200715113835RUriTKaL.jpg',
    describe: '顺应时节才是最好的营养师；24节气得240斤时令鲜果……', // 描述
    price: 2199, // 价格
    xl: 548,
    xssl: null
  }]
}, {
  id: 3,
  type: '超级尊享',
  productList: [{
    title: '粉礼｜事半功倍', // 标题
    pic: 'upload/files/20200418115636ULQYPpca.jpg',
    describe: '承包您半年的水果食用量，用出类拔萃的水果！', // 描述
    price: 9588, // 价格
    xl: 10,
    xssl: null
  }, {
    title: '兰礼｜高人一等的享受', // 标题
    pic: 'upload/files/20200418115713BjOghDRm.jpg',
    describe: '承包您一年的食用量，用出类拔萃的水果！', // 描述
    price: 16888, // 价格
    xl: 7,
    xssl: 0
  }]
}]

const partnerList = [
  {
    id: 1,
    name: '酉花 酉果',
    url: '#',
    pic: 'upload/files/20191224230859jngxI9va.jpg'
  },
  {
    id: 2,
    name: '优美科技',
    url: '#',
    pic: 'upload/files/2019122423005753EFU341.jpg'
  },
  {
    id: 3,
    name: '德蒽 视界',
    url: '#',
    pic: 'upload/files/20191224225657n8DReQOF.jpg'
  },
  {
    id: 4,
    name: '自然农法',
    url: '#',
    pic: 'upload/files/20191224224609Q2kWWR3v.jpg'
  },
  {
    id: 5,
    name: '微妙军团',
    url: '#',
    pic: 'upload/files/20191224224055t9ryHaTc.jpg'
  },
  {
    id: 6,
    name: '会小宝',
    url: '#',
    pic: 'upload/files/20191224223359BrRGJR6K.jpg'
  }
]

export default {
  carouselList,
  tagsList,
  msgs,
  productList,
  partnerList
}
