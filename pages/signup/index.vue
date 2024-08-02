<script setup lang="ts">
onMounted(() => {
  const pass: any = document.querySelector("#password");
  const re_pass: any = document.querySelector("#re-password");
  const eye: any = document.querySelectorAll("div.eye");
  const eyeclose: any = document.querySelectorAll("div.eyeclose");

  eyeclose.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      elem.classList.add("hidden");
      eye[index].classList.remove("hidden");
      if (index === 0) {
        pass.type = "text";
      } else {
        re_pass.type = "text";
      }
    });
  });

  eye.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      elem.classList.add("hidden");
      eyeclose[index].classList.remove("hidden");
      if (index === 0) {
        pass.type = "password";
      } else {
        re_pass.type = "password";
      }
    });
  });

  re_pass.addEventListener("input", () => {
    if (re_pass.value === pass.value) {
      if (pass.classList.contains("border-rose-500")) {
        pass.classList.replace("border-rose-500", "border-teal-500");
        re_pass.classList.replace("border-rose-500", "border-teal-500");
      } else {
        pass.classList.replace("border-gray-300", "border-teal-500");
        re_pass.classList.replace("border-gray-300", "border-teal-500");
      }
    } else {
      if (pass.classList.contains("border-gray-300")) {
        pass.classList.replace("border-gray-300", "border-rose-500");
        re_pass.classList.replace("border-gray-300", "border-rose-500");
      } else {
        pass.classList.replace("border-teal-500", "border-rose-500");
        re_pass.classList.replace("border-teal-500", "border-rose-500");
      }
    }
  });
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="mt-16 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Sign up</h1>
      <p class="text-lg mt-4 text-slate-600">Sign up to our website</p>
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
              type="text"
              placeholder="Full Name"
              required
              class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              name="name"
            />
          </div>
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
              <IconsEyeclose />
            </div>
            <div class="eye hidden absolute right-5 top-1/2 -translate-y-1/2">
              <IconsEye />
            </div>
          </div>
          <div class="mb-5 relative">
            <input
              class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              id="re-password"
              type="password"
              placeholder="Confirm password"
              name="Password"
              required
            />
            <div class="eyeclose absolute right-5 top-1/2 -translate-y-1/2">
              <IconsEyeclose />
            </div>
            <div class="eye hidden absolute right-5 top-1/2 -translate-y-1/2">
              <IconsEye />
            </div>
          </div>
          <button
            class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <p class="mt-7 text-center text-sm">
          Already have an account?
          <NuxtLink
            class="font-bold hover:text-slate-500 transition"
            to="/login"
            >Log in</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
