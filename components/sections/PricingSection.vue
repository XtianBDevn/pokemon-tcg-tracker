<script setup lang="ts">
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for casual collectors getting started',
    features: [
      'Track up to 100 cards',
      'Basic price tracking',
      'Mobile app access',
      'Community access',
      'Email support'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'For serious collectors and competitive players',
    features: [
      'Unlimited card tracking',
      'Real-time price alerts',
      'Advanced analytics',
      'Deck builder tools',
      'Priority support',
      'Trade marketplace access',
      'Export & backup'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Team',
    price: '$29.99',
    period: 'per month',
    description: 'For stores and professional collectors',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Bulk import tools',
      'Inventory management',
      'Custom reports',
      'API access',
      'Dedicated support'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]
</script>

<template>
  <section id="pricing" class="relative py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">
          Simple, <span class="text-gradient">Transparent Pricing</span>
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Start free and upgrade as your collection grows. No hidden fees, cancel anytime.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative rounded-xl p-8 transition-all duration-300"
          :class="[
            plan.highlighted
              ? 'bg-gradient-to-b from-pokered-500/10 to-pokeyellow-500/10 border-2 border-pokered-500 scale-105'
              : 'glass-effect hover:border-pokered-500/50'
          ]"
        >
          <!-- Popular Badge -->
          <div
            v-if="plan.highlighted"
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pokered-500 to-pokeyellow-500 rounded-full text-sm font-semibold"
          >
            Most Popular
          </div>

          <!-- Plan Name -->
          <h3 class="font-display text-2xl font-bold mb-2">{{ plan.name }}</h3>

          <!-- Price -->
          <div class="mb-4">
            <span class="text-4xl font-bold text-gradient">{{ plan.price }}</span>
            <span class="text-slate-400 ml-2">{{ plan.period }}</span>
          </div>

          <!-- Description -->
          <p class="text-slate-400 text-sm mb-6">{{ plan.description }}</p>

          <!-- Features List -->
          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-2 text-sm"
            >
              <Icon name="mdi:check-circle" class="text-pokeyellow-500 mt-0.5 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button
            class="w-full py-3 rounded-lg font-semibold transition-all duration-300"
            :class="[
              plan.highlighted
                ? 'bg-gradient-to-r from-pokered-500 to-pokeyellow-500 text-white hover:scale-105'
                : 'border-2 border-slate-600 hover:border-pokeyellow-500 hover:text-pokeyellow-500'
            ]"
          >
            {{ plan.cta }}
          </button>
        </div>
      </div>

      <!-- Money Back Guarantee -->
      <div class="text-center mt-12 text-slate-400 text-sm">
        <Icon name="mdi:shield-check" class="inline mr-1" />
        30-day money-back guarantee on all paid plans
      </div>
    </div>
  </section>
</template>
