<template>
  <div class="container mx-auto">
    <h1 class="text-blue-600 text-lg">App component</h1>
    <router-view></router-view>
  </div>
  <div class="box">
    <div class="box-inner">
        <div class="item">Hello</div>
    </div>
  </div>
</template>
<style scoped>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    .box-inner {

        .item {
            color: red;
        }
    }
}
</style>
