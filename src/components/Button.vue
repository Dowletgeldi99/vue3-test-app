<script setup lang="ts">
  import { defineProps, PropType } from "vue";

  type ButtonProps = {
    isPrimary?: boolean;
    styles?: string;
  };

  defineProps({
    isPrimary: {
      type: Boolean as PropType<ButtonProps["isPrimary"]>,
      default: false,
    },
    styles: {
      type: String as PropType<ButtonProps["styles"]>,
      default: "",
    },
  });
</script>

<template>
  <button
    :class="[
      'rounded-xl relative px-[16px] py-1 h-[30px]',
      isPrimary ? 'bg-primaryButton shadow-primaryButton' : 'bg-secondaryButton shadow-secondaryButton',
      styles,
    ]"
  >
    <img
      class="absolute right-0.5 top-0"
      :src="`/assets/${isPrimary ? 'primaryBorderSide' : 'secondaryBorderSide'}.svg`"
      alt=""
    />
    <slot />
  </button>
</template>
