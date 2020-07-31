<template>
  <view class="wrapper">
    <view class="banner">
      <swiper
        class="swiper"
        :indicator-dots="swiperOptions.indicatorDots"
        :autoplay="swiperOptions.autoplay"
      >
        <swiper-item v-for="(item, index) in MockData.carouselList" :key="index">
          <img :src="item.src" alt />
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
      <swiper
        class="swiper"
        :autoplay="swiperOptions2.autoplay"
        :vertical="swiperOptions2.vertical"
      >
        <swiper-item
          class="swiper-slide"
          v-for="(item, index) in MockData.msgs"
          :key="index"
        >{{item}}</swiper-item>
      </swiper>
    </view>
    <view class="product" v-for="(item, index) in 4" :key="index">
      <view class="product-item">
        <view class="title">
          <view class="text">
            <text class="letter" v-for="(item, index) in title" :key="index">{{item}}</text>
          </view>
          <view class="more">更多>></view>
        </view>
        <view class="intro">
          <view class="p-i" v-for="(item, index) in 2" :key="index">
            <view class="con">
              <view class="pic">
                <img src="~@/static/img1.jpg" alt />
              </view>
              <view class="info">
                <view class="title">定制款|酷礼遇</view>
                <view class="describe">办公族专享｜实价24.2元/盒/次起</view>
                <view class="price">
                  <text class="num">100</text>
                  <view class="sell-num">1791付款</view>
                  <view class="more">...</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="partner">
      <view class="title">
        <view class="text">
          <text class="letter" v-for="(item, index) in partnerTitle" :key="index">{{item}}</text>
        </view>
        <view class="more">更多>></view>
      </view>
      <view class="sponsor">
        <a href="#" class="s-i" v-for="(item, index) in MockData.partnerList" :key="index">
          <img :src="item.pic" />
        </a>
      </view>
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
        autoplay: true // 自动轮播
      },
      swiperOptions2: {
        autoplay: true, // 自动轮播
        vertical: true // 纵向
      },
      title: '小地家族',
      productList: [{}],
      partnerTitle: '合作伙伴'
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
  methods: {}
}
</script>
<style lang="scss" scope>
// banner 模块
.banner {
  .swiper {
    width: 100%;
    height: 550rpx;
  }
}
// tags模块
.tags {
  margin-top: 26rpx;
  ul {
    display: flex;
    justify-content: space-around;
    font-size: $uni-font-size-sm;
    color: #fff;
    padding: 0 12rpx;
    li {
      width: calc(100% / 4 - 10rpx);
      padding: 10rpx 15rpx 10rpx 0;
      text-align: right;
      border: 1px solid #ccc;
      border-radius: 8rpx;
      margin-right: 14rpx;
      &:last-child {
        margin-right: 0;
      }
      &:nth-child(1) {
        background: url('~@/static/resource/icon-1.png') #828c6e no-repeat left
          center;
        background-size: 30rpx;
      }
      &:nth-child(2) {
        background: url('~@/static/resource/icon-2.png') #828c6e no-repeat left
          center;
        background-size: 30rpx;
      }
      &:nth-child(3) {
        background: url('~@/static/resource/icon-3.png') #828c6e no-repeat left
          center;
        background-size: 30rpx;
      }
      &:nth-child(4) {
        background: url('~@/static/resource/icon-4.png') #828c6e no-repeat left
          center;
        background-size: 30rpx;
      }
    }
    &:last-child {
      margin-top: 10rpx;
      li {
        &:nth-child(1) {
          background: url('~@/static/resource/icon-5.png') #828c6e no-repeat
            left center;
          background-size: 30rpx;
        }
        &:nth-child(2) {
          background: url('~@/static/resource/icon-6.png') #828c6e no-repeat
            left center;
          background-size: 30rpx;
        }
        &:nth-child(3) {
          background: url('~@/static/resource/icon-7.png') #828c6e no-repeat
            left center;
          background-size: 30rpx;
        }
        &:nth-child(4) {
          background: url('~@/static/resource/icon-8.png') #828c6e no-repeat
            left center;
          background-size: 30rpx;
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
      white-space: nowrap; /*不换行*/
    }
  }
  uni-swiper-item {
    display: flex;
    align-items: center;
  }
}

// product模块
.product {
  > .product-item {
    > .title {
      position: relative;
      padding: 20rpx 0;
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 42rpx;
        color: #5a961e;
        position: relative;
        .letter {
          padding: 0 20rpx;
          border-left: 1px solid #5a961e;
          position: relative;
          &:first-child {
            &::before {
              content: '';
              display: block;
              width: 70rpx;
              height: 1px;
              background: #787878;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(-100%, -50%);
            }
            &::after {
              content: '';
              display: block;
              position: absolute;
              width: 16rpx;
              height: 16rpx;
              border-radius: 50%;
              border: 1px solid #787878;
              top: 50%;
              transform: translate(0, -50%);
              left: -90rpx;
            }
          }
          &:last-child {
            border-right: 1px solid #5a961e;
            &::after {
              content: '';
              display: block;
              width: 70rpx;
              height: 1px;
              background: #787878;
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(100%, -50%);
            }
            &::before {
              content: '';
              display: block;
              position: absolute;
              width: 16rpx;
              height: 16rpx;
              border-radius: 50%;
              border: 1px solid #787878;
              top: 50%;
              transform: translate(0, -50%);
              right: -90rpx;
            }
          }
        }
      }
      .more {
        position: absolute;
        font-size: 22rpx;
        right: 5px;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    .intro {
      padding: 0 10px;
      overflow: hidden;
      .p-i {
        width: 50%;
        height: 280rpx;
        // border: 1px solid red;
        padding: 0 10rpx;
        float: left;
        .con {
          width: 100%;
          height: 100%;
          border-radius: 12rpx;
          border: 1px solid #ccc;
          .pic {
            width: 100%;
            height: 170rpx;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            padding: 0 20rpx;
            .title {
              font-size: 28rpx;
            }
            .describe {
              font-size: 24rpx;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #909399;
            }
            .price {
              position: relative;
              font-size: 24rpx;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .num {
                color: red;
                font-weight: bold;
                margin: 0 4rpx;
              }
              .sell-num {
                color: #909399;
                margin-left: 20rpx;
              }
              .more {
                margin-left: auto;
              }
              &::before {
                content: '￥';
                color: red;
              }
            }
          }
        }
      }
    }
  }
}

.partner {
  > .title {
    position: relative;
    padding: 20rpx 0;
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42rpx;
      color: #5a961e;
      position: relative;
      .letter {
        padding: 0 20rpx;
        border-left: 1px solid #5a961e;
        position: relative;
        &:first-child {
          &::before {
            content: '';
            display: block;
            width: 70rpx;
            height: 1px;
            background: #787878;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(-100%, -50%);
          }
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 16rpx;
            height: 16rpx;
            border-radius: 50%;
            border: 1px solid #787878;
            top: 50%;
            transform: translate(0, -50%);
            left: -90rpx;
          }
        }
        &:last-child {
          border-right: 1px solid #5a961e;
          &::after {
            content: '';
            display: block;
            width: 70rpx;
            height: 1px;
            background: #787878;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(100%, -50%);
          }
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 16rpx;
            height: 16rpx;
            border-radius: 50%;
            border: 1px solid #787878;
            top: 50%;
            transform: translate(0, -50%);
            right: -90rpx;
          }
        }
      }
    }
    .more {
      position: absolute;
      font-size: 22rpx;
      right: 5px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  > .sponsor {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 34rpx;
    > a.s-i {
      width: 96rpx;
      height: 96rpx;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>