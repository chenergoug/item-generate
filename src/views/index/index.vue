<template>
  <div class="container">
    <div class="container-body">
      <app-aside />
      <div class="container-init">
        <app-header />
        <app-main />
      </div>
      <app-side />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppAside from './Aside.vue'
import AppFooter from './Footer.vue'
import AppHeader from './Header.vue'
import AppMain from './Main.vue'
import AppSide from './Side.vue'
</script>

<style lang="scss" scoped></style>
