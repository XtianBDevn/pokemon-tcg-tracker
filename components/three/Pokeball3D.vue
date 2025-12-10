<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'
import { useRenderLoop } from '@tresjs/core'

interface Props {
  position?: [number, number, number]
  scale?: number
}

const props = withDefaults(defineProps<Props>(), {
  position: () => [0, 0, 0],
  scale: 1
})

const groupRef = shallowRef()
const { onLoop } = useRenderLoop()

let rotationSpeed = 0.5

onLoop(({ elapsed }) => {
  if (groupRef.value) {
    groupRef.value.rotation.y = elapsed * rotationSpeed
    groupRef.value.rotation.x = Math.sin(elapsed * 0.3) * 0.2
  }
})
</script>

<template>
  <TresGroup ref="groupRef" :position="position" :scale="scale">
    <!-- Top half (red) -->
    <TresMesh :position="[0, 0.25, 0]">
      <TresSphereGeometry :args="[1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]" />
      <TresMeshStandardMaterial
        color="#DC2626"
        :metalness="0.3"
        :roughness="0.4"
        :emissive="0xDC2626"
        :emissive-intensity="0.2"
      />
    </TresMesh>

    <!-- Bottom half (white) -->
    <TresMesh :position="[0, -0.25, 0]">
      <TresSphereGeometry :args="[1, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]" />
      <TresMeshStandardMaterial
        color="#FFFFFF"
        :metalness="0.2"
        :roughness="0.5"
      />
    </TresMesh>

    <!-- Center black band -->
    <TresMesh>
      <TresCylinderGeometry :args="[1.01, 1.01, 0.15, 32]" />
      <TresMeshStandardMaterial color="#000000" :metalness="0.8" :roughness="0.2" />
    </TresMesh>

    <!-- Center button (white circle) -->
    <TresMesh :position="[0, 0, 1.02]">
      <TresCircleGeometry :args="[0.25, 32]" />
      <TresMeshStandardMaterial
        color="#FFFFFF"
        :metalness="0.9"
        :roughness="0.1"
        :emissive="0xFFFFFF"
        :emissive-intensity="0.3"
      />
    </TresMesh>

    <!-- Button border ring -->
    <TresMesh :position="[0, 0, 1.01]">
      <TresRingGeometry :args="[0.25, 0.3, 32]" />
      <TresMeshStandardMaterial color="#000000" />
    </TresMesh>
  </TresGroup>
</template>
