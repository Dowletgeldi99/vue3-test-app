<script setup lang="ts">
  import { defineProps } from "vue";

  type IFriendsProps = {
    name: string;
    level: number;
  };
  defineProps<IFriendsProps>();
</script>

<template>
  <div
    class="
      relative
      px-1
      py-1.5
      flex
      items-center
      justify-between
      bg-[radial-gradient(circle,_#3081B4_0%,_rgba(25,72,140,0)_100%)]
    "
  >
    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-listItem"></div>
    <div class="flex items-center gap-x-2">
      <div class="bg-[#15376C] shadow-listItemInfo w-[30px] h-[30px] px-auto rounded">
        <img class="max-h-full w-full" src="/assets/question.svg" alt="question icon" />
      </div>
      <p class="text-xs text-stroke text-shadow-p">{{ name }}</p>
    </div>
    <p class="w-[30%] font-black text-stroke text-shadow-halfBlack">{{ level }} lvl</p>
  </div>
</template>
