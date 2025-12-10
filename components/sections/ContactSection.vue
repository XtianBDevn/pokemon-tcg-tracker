<script setup lang="ts">
const email = 'christianbryantmusic@gmail.com'
</script>

<template>
  <section id="contact" class="relative py-24 px-6 bg-slate-900/30">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Section Header -->
      <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">
        Get In <span class="text-gradient">Touch</span>
      </h2>
      <p class="text-lg text-slate-400 mb-12">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <!-- Contact Card -->
      <div class="glass-effect rounded-xl p-12 max-w-2xl mx-auto">
        <!-- Icon -->
        <div class="w-20 h-20 bg-gradient-to-br from-pokered-500 to-pokeyellow-500 rounded-full flex items-center justify-center mx-auto mb-6 pokeball-shadow">
          <Icon name="mdi:email" class="text-4xl text-white" />
        </div>

        <!-- Email Display -->
        <p class="text-slate-400 mb-4">Send us an email at:</p>
        <a
          :href="`mailto:${email}`"
          class="text-2xl md:text-3xl font-display font-bold text-gradient hover:opacity-80 transition-opacity inline-block mb-8"
        >
          {{ email }}
        </a>

        <!-- Quick Links -->
        <div class="grid grid-cols-2 gap-4 mt-8">
          <a
            href="mailto:christianbryantmusic@gmail.com?subject=Support Request"
            class="glass-effect px-6 py-4 rounded-lg hover:border-pokeyellow-500/50 transition-all group"
          >
            <Icon name="mdi:help-circle" class="text-3xl text-pokeyellow-500 mb-2" />
            <p class="font-semibold group-hover:text-pokeyellow-500 transition-colors">Support</p>
          </a>
          <a
            href="mailto:christianbryantmusic@gmail.com?subject=Partnership Inquiry"
            class="glass-effect px-6 py-4 rounded-lg hover:border-pokeyellow-500/50 transition-all group"
          >
            <Icon name="mdi:handshake" class="text-3xl text-pokeyellow-500 mb-2" />
            <p class="font-semibold group-hover:text-pokeyellow-500 transition-colors">Partnership</p>
          </a>
        </div>
      </div>

      <!-- Social Links -->
      <div class="mt-12">
        <p class="text-slate-400 mb-4">Follow us on social media</p>
        <div class="flex gap-4 justify-center">
          <a href="#" class="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-pokeyellow-500 transition-all">
            <Icon name="mdi:twitter" class="text-xl" />
          </a>
          <a href="#" class="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-pokeyellow-500 transition-all">
            <Icon name="mdi:discord" class="text-xl" />
          </a>
          <a href="#" class="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-pokeyellow-500 transition-all">
            <Icon name="mdi:reddit" class="text-xl" />
          </a>
          <a href="#" class="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-pokeyellow-500 transition-all">
            <Icon name="mdi:youtube" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
