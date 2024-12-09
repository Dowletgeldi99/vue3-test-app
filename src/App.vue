<template>
  <div class="w-full h-full bg-gradient-radial from-sky to-navy text-white px-2 py-6 font-black font-lato">
    <HeaderTitle />

    <div class="my-3">
      <Cards />
    </div>

    <div class="my-3">
      <FriendList />
    </div>
  </div>
</template>

<script setup lang="ts">
  import "reflect-metadata";
  import HeaderTitle from "@/components/HeaderTitle.vue";
  import Cards from "@/components/Cards.vue";
  import FriendList from "@/components/FriendList.vue";
</script>

<style lang="scss" scoped></style>
