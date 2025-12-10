<script setup lang="ts">
const features = [
  {
    icon: 'mdi:cards',
    title: 'Collection Management',
    description: 'Organize your entire Pokemon TCG collection with ease. Add cards, track duplicates, and categorize by set, rarity, or type.'
  },
  {
    icon: 'mdi:chart-line',
    title: 'Price Tracking',
    description: 'Monitor real-time card values and market trends. Get alerts when your cards increase in value or deals appear.'
  },
  {
    icon: 'mdi:deck',
    title: 'Deck Builder',
    description: 'Build and save custom decks from your collection. Test strategies and share with the community.'
  },
  {
    icon: 'mdi:diamond-stone',
    title: 'Rarity Analysis',
    description: 'Identify your most valuable cards. Filter by rarity, condition, and edition for precise inventory management.'
  },
  {
    icon: 'mdi:account-group',
    title: 'Community Trading',
    description: 'Connect with other collectors. Browse wishlists, propose trades, and expand your collection safely.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Authentication Tools',
    description: 'Verify card authenticity with AI-powered scanning. Protect yourself from counterfeits and fakes.'
  }
]
</script>

<template>
  <section id="features" class="relative py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">
          Everything You Need to
          <span class="text-gradient">Manage Your Collection</span>
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Powerful features designed for collectors of all levels, from casual enthusiasts to competitive players.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card glass-effect rounded-xl p-6 hover:border-pokered-500/50 transition-all duration-300 hover:scale-105"
        >
          <div class="w-14 h-14 bg-gradient-to-br from-pokered-500 to-pokeyellow-500 rounded-lg flex items-center justify-center mb-4 pokeball-shadow">
            <Icon :name="feature.icon" class="text-3xl text-white" />
          </div>
          <h3 class="font-display text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
