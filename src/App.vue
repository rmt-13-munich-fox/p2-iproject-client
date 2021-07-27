<template>
  <div id="app">
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
}) 
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 2.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
