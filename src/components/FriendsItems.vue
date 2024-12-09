<script setup lang="ts">
  import FriendsItem from "@/components/FriendsItem.vue";
  import { FRIENDS } from "@/helpers/constants/friends";
</script>

<template>
  <div
    class="
      w-full
      flex flex-col
      gap-y-2
      rounded-xl
      px-1
      py-5
      shadow-listItems
      bg-[radial-gradient(circle,_#3081B4_0%,_#19488C_100%)]
    "
  >
    <FriendsItem v-for="(friend, index) in FRIENDS" :key="index" :name="friend.name" :level="friend.level" />
  </div>
</template>
