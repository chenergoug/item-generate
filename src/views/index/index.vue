<template>
  <div class="container">
    <app-header />
    <div class="container_body">
      <app-aside />
      <app-main />
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
