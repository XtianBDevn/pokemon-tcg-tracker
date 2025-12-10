<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-slate-800 py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Footer Content -->
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-pokered-500 to-pokeyellow-500 rounded-full flex items-center justify-center pokeball-shadow">
              <Icon name="mdi:pokeball" class="text-xl text-white" />
            </div>
            <span class="font-display text-xl font-bold">PokeDex TCG</span>
          </div>
          <p class="text-slate-400 text-sm">
            The ultimate Pokemon TCG collection tracker for collectors worldwide.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><a href="#features" class="hover:text-pokeyellow-500 transition-colors">Features</a></li>
            <li><a href="#pricing" class="hover:text-pokeyellow-500 transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">API</a></li>
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">Changelog</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">About</a></li>
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">Blog</a></li>
            <li><a href="#contact" class="hover:text-pokeyellow-500 transition-colors">Contact</a></li>
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">Careers</a></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-pokeyellow-500 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-400 text-sm">
          &copy; {{ currentYear }} PokeDex TCG. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex gap-4">
          <a href="#" class="text-slate-400 hover:text-pokeyellow-500 transition-colors">
            <Icon name="mdi:twitter" class="text-xl" />
          </a>
          <a href="#" class="text-slate-400 hover:text-pokeyellow-500 transition-colors">
            <Icon name="mdi:discord" class="text-xl" />
          </a>
          <a href="#" class="text-slate-400 hover:text-pokeyellow-500 transition-colors">
            <Icon name="mdi:reddit" class="text-xl" />
          </a>
          <a href="#" class="text-slate-400 hover:text-pokeyellow-500 transition-colors">
            <Icon name="mdi:youtube" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
