<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled.value = window.scrollY > 50
    })
  }
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-slate-950/95 backdrop-blur-md py-4' : 'bg-transparent py-6'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3">
        <div class="w-12 h-12 bg-gradient-to-br from-pokered-500 to-pokeyellow-500 rounded-full flex items-center justify-center pokeball-shadow">
          <Icon name="mdi:pokeball" class="text-2xl text-white" />
        </div>
        <span class="font-display text-2xl font-bold">PokeDex TCG</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="hover:text-pokeyellow-500 transition-colors">Features</a>
        <a href="#how-it-works" class="hover:text-pokeyellow-500 transition-colors">How It Works</a>
        <a href="#pricing" class="hover:text-pokeyellow-500 transition-colors">Pricing</a>
        <a href="#contact" class="hover:text-pokeyellow-500 transition-colors">Contact</a>
      </div>

      <!-- CTA Button -->
      <button class="hidden md:block px-6 py-3 bg-gradient-to-r from-pokered-500 to-pokeyellow-500 rounded-lg font-semibold hover:scale-105 transition-transform">
        Get Started
      </button>

      <!-- Mobile menu button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
        <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-2xl" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-lg border-t border-slate-800 py-6"
    >
      <div class="flex flex-col gap-4 px-6">
        <a href="#features" @click="isMenuOpen = false" class="py-2 hover:text-pokeyellow-500 transition-colors">Features</a>
        <a href="#how-it-works" @click="isMenuOpen = false" class="py-2 hover:text-pokeyellow-500 transition-colors">How It Works</a>
        <a href="#pricing" @click="isMenuOpen = false" class="py-2 hover:text-pokeyellow-500 transition-colors">Pricing</a>
        <a href="#contact" @click="isMenuOpen = false" class="py-2 hover:text-pokeyellow-500 transition-colors">Contact</a>
        <button class="mt-2 px-6 py-3 bg-gradient-to-r from-pokered-500 to-pokeyellow-500 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  </nav>
</template>
