<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView.vue'

import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  created() {
    getHomeMultidata().then(({ data: res }) => {
      this.banners = res.banner.list
      this.recommends = res.recommend.list
    })
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  }
}
</script>

<style scoped>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
