<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧 menu -->
    <sidebar class="sidebar-container"
    :style="{ background:  $store.getters.cssVar.menuBg }"/>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
        <!-- tags -->
        <tags-view></tags-view>
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import { } from 'vue'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import variables from '@/styles/variables.module.scss'
import TagsView from '@/components/TagsView'

</script>

<style lang="scss" scoped>
@import '~@/styles/mixins.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  transition: width #{$sideBarDuration};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
