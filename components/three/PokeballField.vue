<script setup lang="ts">
import { computed } from 'vue'
import Pokeball3D from './Pokeball3D.vue'

const pokeballCount = 10

// Generate random positions for pokeballs
const pokeballs = computed(() => {
  return Array.from({ length: pokeballCount }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 20,
      Math.random() * 10 - 5,
      (Math.random() - 0.5) * 15 - 5
    ] as [number, number, number],
    scale: 0.3 + Math.random() * 0.4
  }))
})
</script>

<template>
  <TresGroup>
    <Pokeball3D
      v-for="ball in pokeballs"
      :key="ball.id"
      :position="ball.position"
      :scale="ball.scale"
    />
  </TresGroup>
</template>
