<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: 'Create Your Account',
    description: 'Sign up for free in seconds. No credit card required to start tracking your collection.',
    icon: 'mdi:account-plus'
  },
  {
    number: 2,
    title: 'Add Your Cards',
    description: 'Scan cards with your phone camera or search our comprehensive database of every Pokemon TCG card ever released.',
    icon: 'mdi:camera-plus'
  },
  {
    number: 3,
    title: 'Track & Organize',
    description: 'Automatically track card values, organize by set or type, and get insights on your collection\'s worth.',
    icon: 'mdi:chart-bar'
  },
  {
    number: 4,
    title: 'Trade & Grow',
    description: 'Connect with collectors worldwide, trade cards safely, and build your dream collection.',
    icon: 'mdi:swap-horizontal'
  }
]
</script>

<template>
  <section id="how-it-works" class="relative py-24 px-6 bg-slate-900/30">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">
          How It <span class="text-gradient">Works</span>
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Get started in minutes and take control of your Pokemon card collection today.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="step in steps"
          :key="step.number"
          class="relative"
        >
          <!-- Step Card -->
          <div class="glass-effect rounded-xl p-6 h-full hover:border-pokered-500/50 transition-all duration-300">
            <!-- Step Number Badge -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pokered-500 to-pokeyellow-500 rounded-full flex items-center justify-center font-bold text-xl pokeball-shadow">
              {{ step.number }}
            </div>

            <!-- Icon -->
            <div class="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-4 mt-4">
              <Icon :name="step.icon" class="text-4xl text-pokeyellow-500" />
            </div>

            <!-- Content -->
            <h3 class="font-display text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ step.description }}</p>
          </div>

          <!-- Connecting Arrow (not on last item) -->
          <div
            v-if="step.number < steps.length"
            class="hidden lg:block absolute top-1/2 -right-4 text-pokeyellow-500/30"
          >
            <Icon name="mdi:arrow-right" class="text-3xl" />
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <button class="px-8 py-4 bg-gradient-to-r from-pokered-500 to-pokeyellow-500 text-white font-bold rounded-lg hover:scale-105 transition-transform">
          Start Your Collection Now
        </button>
      </div>
    </div>
  </section>
</template>
