<template>
  <div class="w-full flex gap-x-3 px-2">
    <div class="card-item bg-card1">
      <Button styles="w-[120px]" :is-primary="true">
        <p class="button-text-sm">More Bonuses</p>
      </Button>
    </div>
    <div class="card-item bg-card2 gap-x-4">
      <Button styles="">
        <p class="button-text-sm">Invite</p>
      </Button>
      <Button styles="">
        <div class="w-4">
          <img src="/assets/currency.svg" alt="currency" />
        </div>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from "@/components/Button.vue";
</script>

<style lang="css" scoped>
  .card-item {
    @apply flex justify-center items-end border-solid border-2 border-cardBorder w-1/2 h-[115px] bg-cover rounded-xl pb-1 shadow-cardItem font-movavi text-xs;
  }
</style>
