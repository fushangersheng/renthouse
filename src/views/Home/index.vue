<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <Search class="search"></Search>
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="wap-home-o" text="整租" />
      <van-grid-item icon="friends-o" text="合租" />
      <van-grid-item icon="map-marked" text="地图找房" />
      <van-grid-item icon="wap-home" text="去合租" />
    </van-grid>
    <van-cell-group>
      <van-cell title="租房小组" value="更多" />
    </van-cell-group>
    <van-grid direction="horizontal" :column-num="2">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
import Search from '@/components/Search'
import { groups } from '@/api'
export default {
  components: {
    Search
  },
  data() {
    return {
      images: [
        'http://liufusong.top:8080/img/swiper/1.png',
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/3.png'
      ],
      group: []
    }
  },
  created() {
    this.groups()
  },
  methods: {
    async groups() {
      this.group = (await this.groups()).data
      console.log(this.group)
    }
  }
}
</script>

<style scoped lang="less">
.home {
  position: relative;
}
.van-swipe {
  height: 176px;
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
}
.search {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
