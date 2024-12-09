<script setup lang="ts">
  import Button from "@/components/Button.vue";
  import FriendsItems from "@/components/FriendsItems.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-y-2">
    <h2 class="text-stroke text-shadow-halfBlack">List of your friends</h2>
    <Button :is-primary="true" styles="w-fit">
      <div class="flex items-center gap-x-2 font-movavi text-sm">
        <p class="button-text-large">Claim</p>
        <div class="flex items-center gap-x-1">
          <div class="w-3">
            <img class="w-full h-full" src="/assets/coin.svg" alt="coin" />
          </div>
          <p class="button-text-large">12.5k</p>
        </div>
      </div>
    </Button>

    <FriendsItems />
  </div>
</template>
