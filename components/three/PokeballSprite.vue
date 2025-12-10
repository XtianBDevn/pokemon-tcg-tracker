<script setup lang="ts">
interface Props {
  size?: number
  delay?: number
}

withDefaults(defineProps<Props>(), {
  size: 60,
  delay: 0
})
</script>

<template>
  <div
    class="pokeball-sprite absolute rounded-full animate-float"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
    }"
  >
    <!-- Pokeball design using divs -->
    <div class="absolute inset-0 overflow-hidden rounded-full border-4 border-slate-950">
      <!-- Top half (red) -->
      <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-pokered-400 to-pokered-600"></div>
      <!-- Bottom half (white) -->
      <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-slate-100 to-slate-300"></div>
      <!-- Center band -->
      <div class="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 bg-slate-950"></div>
    </div>
    <!-- Center button -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-slate-50 rounded-full border-2 border-slate-950 shadow-lg"></div>
  </div>
</template>

<style scoped>
.pokeball-sprite {
  opacity: 0.3;
  filter: blur(1px);
}
</style>
