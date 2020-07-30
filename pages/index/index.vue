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
.banner {
  .swiper {
    width: 100%;
    height: 303px;
  }
}
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
      background: #828c6e;
      text-align: right;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
    &:last-child {
      margin-top: 6px;
    }
  }
}
  
</style>