<script setup lang="ts">
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div class="max-w-6xl mx-auto px-6 text-center relative z-10">
      <!-- Badge -->
      <div class="mb-6 hero-badge opacity-0">
        <span class="inline-flex items-center gap-2 px-4 py-2 bg-pokered-500/10 border border-pokered-500/30 rounded-full text-pokered-400 text-sm backdrop-blur-sm">
          <Icon name="mdi:pokeball" />
          <span>Track, Collect, Master</span>
        </span>
      </div>

      <!-- Main Headline -->
      <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 hero-title opacity-0">
        <span class="block">Master Your</span>
        <span class="block text-gradient">Pokemon TCG</span>
        <span class="block">Collection</span>
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 hero-desc opacity-0">
        The ultimate tool for Pokemon card collectors. Track your collection, monitor prices, and build your dream deck with ease.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center hero-cta opacity-0">
        <button class="group px-8 py-4 bg-gradient-to-r from-pokered-500 to-pokeyellow-500 text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
          <span>Start Tracking Free</span>
          <Icon name="mdi:arrow-right" class="group-hover:translate-x-1 transition-transform" />
        </button>
        <button class="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-pokeyellow-500 hover:text-pokeyellow-500 transition-all">
          Watch Demo
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto hero-stats opacity-0">
        <div>
          <div class="text-4xl font-bold text-gradient">10K+</div>
          <div class="text-sm text-slate-400 mt-1">Active Users</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-gradient">50M+</div>
          <div class="text-sm text-slate-400 mt-1">Cards Tracked</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-gradient">99%</div>
          <div class="text-sm text-slate-400 mt-1">Satisfaction</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 scroll-indicator opacity-0">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <div class="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
        <div class="w-1 h-2 bg-pokeyellow-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
