<template>
  <header class="my-5 flex flex-col lg:flex-row justify-between items-center">
    <div class="menu flex w-full items-center justify-between">
      <NuxtLink class="text-lg" to="/">
        <span class="text-slate-800 font-bold">Nuxt</span>
        <span class="text-slate-500">ship</span>
      </NuxtLink>
      <div class="menu_item lg:w-auto mt-2 lg:flex lg:mt-0 block">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li>
            <NuxtLink class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900" to="">Features</NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900" to="/pricing">Pricing</NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex items-center gap-4">
        <NuxtLink to="/login">Log in</NuxtLink>
        <NuxtLink class="rounded text-center transition focus-visible:ring-2
        ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800
        border-2 border-transparent" to="/signup">Sign up</NuxtLink>
      </div>
    </div>
  </header>
  <slot />
  <footer class="my-20">
    <p class="text-center text-sm text-slate-500">Copyright © 2024 Nuxtship. All rights reserved.</p>
    <p class="text-center text-xs text-slate-500 mt-1">
      Made by
      <NuxtLink to="https://github.com/Gr33nW33n" target="_blank" class="hover:underline">Gr33nW33n</NuxtLink>
      with attribution to
      <NuxtLink to="https://web3templates.com/" target="_blank" class="hover:underline">Web3Templates</NuxtLink>
    </p>
  </footer>
</template>
