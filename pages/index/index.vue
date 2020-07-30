<template>
  <view class="wrapper">
    <view class="banner">
      <swiper class="swiper" :indicator-dots="swiperOptions.indicatorDots" :autoplay="swiperOptions.autoplay">
        <swiper-item v-for="(item, index) in MockData.carouselList" :key="index">
          <img :src="item.src" alt="">
        </swiper-item>
      </swiper>
    </view>
    <view class="tags">
      <ul class="tag-1">
        <li v-for="(item, index) in tagList1" :key="index">{{ item.name }}</li>
      </ul>
      <ul calss="tag-2">
        <li v-for="(item, index) in tagList2" :key="index">{{ item.name }}</li>
      </ul>
    </view>
    <view class="msgs">
      <swiper class="swiper" :autoplay="swiperOptions2.autoplay" :vertical="swiperOptions2.vertical">
        <swiper-item class="swiper-slide" v-for="(item, index) in MockData.msgs" :key="index">
          {{item}}
        </swiper-item>
      </swiper>
    </view>
    <button type="default" @click="getData">确定</button>
  </view>
</template>
<script>
import MockData from '@/data.js'
export default {
  data() {
    return {
      MockData,
      swiperOptions: {
        indicatorDots: true, // 指示点
        autoplay: true, // 自动轮播
      },
      swiperOptions2: {
        autoplay: true, // 自动轮播
        vertical: true // 纵向
      }
    }
  },
  computed: {
    tagList1() {
      return MockData.tagsList.slice(0, 4)
    },
    tagList2() {
      return MockData.tagsList.slice(4)
    }
	},
	mounted() {
    console.log(MockData)
	},
  methods: {
  }
}
</script>
<style lang="scss" scope>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
// banner 模块
.banner {
  .swiper {
    width: 100%;
    height: 303px;
  }
}
// tags模块
.tags {
  margin-top: 13px;
  ul {
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    color: #fff;
    padding: 0 6px;
    li {
      width: calc(100% / 4 - 16px);
      padding: 6px 9px 6px 0;
      text-align: right;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
      &:nth-child(1) {
        background: url('~@/static/resource/icon-1.png') #828c6e no-repeat left center;
        background-size: 19px;
      }
      &:nth-child(2) {
        background: url('~@/static/resource/icon-2.png') #828c6e no-repeat left center;
        background-size: 19px;
      }
      &:nth-child(3) {
        background: url('~@/static/resource/icon-3.png') #828c6e no-repeat left center;
        background-size: 19px;
      }
      &:nth-child(4) {
        background: url('~@/static/resource/icon-4.png') #828c6e no-repeat left center;
        background-size: 19px;
      }
    }
    &:last-child {
      margin-top: 6px;
      li {
        &:nth-child(1) {
          background: url('~@/static/resource/icon-5.png') #828c6e no-repeat left center;
          background-size: 19px;
        }
        &:nth-child(2) {
          background: url('~@/static/resource/icon-6.png') #828c6e no-repeat left center;
          background-size: 19px;
        }
        &:nth-child(3) {
          background: url('~@/static/resource/icon-7.png') #828c6e no-repeat left center;
          background-size: 19px;
        }
        &:nth-child(4) {
          background: url('~@/static/resource/icon-8.png') #828c6e no-repeat left center;
          background-size: 19px;
        }
      }
    }
  }
}

// msgs模块
.msgs {
  height: 30px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-top: 1px dashed #cdd0cc;
  border-bottom: 1px dashed #cdd0cc;
  margin-top: 20px;
  padding: 0 15px;
  .swiper {
    height: 100%;
    .swiper-slide {
      background: url('~@/static/icon-tips.png') no-repeat;
      background-size: 14px 14px;
      background-position: left center;
      padding: 0 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  /*不换行*/
    }
  }
  uni-swiper-item {
    display: flex;
    align-items: center;
  }
}
  
</style>