<script setup lang="ts">
  onMounted(() => {
  const pass: any = document.querySelector("#password");
  const eye: any = document.querySelector("div.eye");
  const eyeclose: any = document.querySelector("div.eyeclose");

    eyeclose.addEventListener("click", () => {
        eyeclose.classList.add("hidden")
        eye.classList.remove("hidden")
        pass.type = "text"
    })
    eye.addEventListener("click", () => {
        eye.classList.add("hidden")
        eyeclose.classList.remove("hidden")
        pass.type = "password"
    })
  })
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="mt-16 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Log in</h1>
      <p class="text-lg mt-4 text-slate-600">Log in to our website</p>
    </div>
    <div class="grid gap-10 mx-auto max-w-md mt-16">
      <div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          class="needs-validation"
          novalidate
        >
          <div class="mb-5">
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              required
              class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            />
          </div>
          <div class="mb-5 relative">
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="Password"
              required
              class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            />
            <div class="eyeclose absolute right-5 top-1/2 -translate-y-1/2">
              <IconsEyeclose/>
            </div>
            <div class="eye hidden absolute right-5 top-1/2 -translate-y-1/2">
              <IconsEye/>
            </div>
          </div>
          <div class="mb-5 flex flex-row justify-between items-center">
            <div class="flex flex-row justify-start items-center">
              <input
                id="check"
                type="checkbox"
                name="check"
                required
                class="border-2 outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 accent-black"
              />
              <label for="check" class="ml-2 text-sm">Remember me</label>
            </div>
            <NuxtLink class="text-sm hover:text-slate-500 transition" to="#"
              >Forget Password ?</NuxtLink
            >
          </div>
          <button
            class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent"
            type="submit"
          >
            Log in
          </button>
        </form>
        <p class="mt-7 text-center text-sm">
          Don't have an account?
          <NuxtLink
            class="font-bold hover:text-slate-500 transition"
            to="/signup"
            >Sign up</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>