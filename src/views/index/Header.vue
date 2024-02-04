<template>
  <div class="app_header">
    <div class="header_logo">
      <img src="@/assets/image/logo.png" />
    </div>
    <div class="header-settings"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header_logo {
  display: flex;
  align-items: center;
  height: 100%;
  width: $unify-aside;
  justify-content: center;
  border-right: $unify-line;

  img {
    height: 70%;
  }
}
</style>
