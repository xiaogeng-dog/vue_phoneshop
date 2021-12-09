<template>
  <div class="cart-list">
    <scroll class="content" :data="[cartList]" ref="scroll">
      <cart-list-item
        v-for="item in cartList"
        :key="item.iid"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px);
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 93px;

  height: calc(100% - 93px - 44px);
  overflow: hidden;
}
</style>
