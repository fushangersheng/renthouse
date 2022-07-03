<template>
  <div class="login">
    <img src="http://liufusong.top:8080/img/profile/bg.png" alt="背景图" />
    <div class="img">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div>游客</div>
      <van-button type="primary">主要按钮</van-button>
    </div>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item,index) in list"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </van-grid>
    <img src="http://liufusong.top:8080/img/profile/join.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: 'star-o',
          text: '我的收藏'
        },
        {
          icon: 'wap-home-o',
          text: '我的出租'
        },
        {
          icon: 'clock-o',
          text: '看房记录'
        },
        {
          icon: 'idcard',
          text: '成为房主'
        },
        {
          icon: 'manager-o',
          text: '个人资料'
        },
        {
          icon: 'service-o',
          text: '联系我们'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.login {
  position: relative;
  img {
    width: 100%;
    height: 190px;
    border-style: none;
  }
  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -82.5px;
    margin-left: -160px;
    width: 320px;
    height: 165px;
    background: #000;
  }
}
</style>
