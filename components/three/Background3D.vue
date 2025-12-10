<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { Stars } from '@tresjs/cientos'
import PokeballField from './PokeballField.vue'
</script>

<template>
  <div class="fixed inset-0 -z-10 pointer-events-none">
    <TresCanvas
      clear-color="#0F172A"
      :alpha="true"
      :antialias="true"
    >
      <!-- Ambient light for overall illumination -->
      <TresAmbientLight :intensity="0.5" />

      <!-- Main directional light -->
      <TresDirectionalLight
        :position="[5, 5, 5]"
        :intensity="1"
        color="#FFFFFF"
      />

      <!-- Red accent light (pokeball theme) -->
      <TresPointLight
        :position="[-5, 3, -5]"
        :intensity="0.8"
        color="#EF4444"
      />

      <!-- Yellow accent light (pikachu theme) -->
      <TresPointLight
        :position="[5, -3, 5]"
        :intensity="0.6"
        color="#F59E0B"
      />

      <!-- Background stars for depth -->
      <Stars :radius="100" :depth="50" :count="5000" :factor="4" />

      <!-- Pokeball field -->
      <PokeballField />

      <!-- Camera positioned for good view -->
      <TresPerspectiveCamera :position="[0, 0, 10]" />
    </TresCanvas>
  </div>
</template>
