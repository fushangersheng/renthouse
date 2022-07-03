<template>
  <van-search
    v-model="value"
    show-action
    label="北京"
    placeholder="请输入小区或地址"
    @search="onSearch"
  >
    <template #action>
      <div @click="onSearch" >
      <van-icon name="map-marked" /></div>
    </template>
  </van-search>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang="less">

</style>
