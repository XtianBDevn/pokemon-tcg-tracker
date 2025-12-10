<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Initialize scroll animations
useScrollAnimation()
</script>

<template>
  <div>
    <!-- Animated Background -->
    <BackgroundManager />

    <!-- Navigation -->
    <Navbar />

    <!-- Page Sections -->
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <PricingSection />
    <ContactSection />

    <!-- Footer -->
    <Footer />
  </div>
</template>
