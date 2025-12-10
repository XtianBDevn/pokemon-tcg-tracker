<script setup lang="ts">
import { ref } from 'vue'
import Background3D from './three/Background3D.vue'
import PokeballSprite from './three/PokeballSprite.vue'

const sprites = ref([
  { id: 1, top: '10%', left: '5%', size: 80, delay: 0 },
  { id: 2, top: '20%', right: '10%', size: 60, delay: 1 },
  { id: 3, bottom: '15%', left: '15%', size: 70, delay: 2 },
  { id: 4, top: '60%', right: '5%', size: 50, delay: 1.5 },
  { id: 5, bottom: '30%', right: '20%', size: 90, delay: 0.5 },
  { id: 6, top: '40%', left: '8%', size: 55, delay: 1.2 },
])
</script>

<template>
  <div class="fixed inset-0 -z-20 overflow-hidden">
    <!-- 2D Sprites Layer (furthest back) -->
    <div class="absolute inset-0 -z-10">
      <PokeballSprite
        v-for="sprite in sprites"
        :key="sprite.id"
        :size="sprite.size"
        :delay="sprite.delay"
        :style="{
          top: sprite.top,
          left: sprite.left,
          right: sprite.right,
          bottom: sprite.bottom
        }"
      />
    </div>

    <!-- 3D Scene Layer (closer) -->
    <ClientOnly>
      <Background3D />
    </ClientOnly>

    <!-- Gradient overlay for depth and atmosphere -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80 pointer-events-none"></div>
  </div>
</template>
