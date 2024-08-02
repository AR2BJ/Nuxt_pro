<template>
  <div class="max-w-screen-xl mx-auto">
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
      <div class="img p-24 md:order-1 hidden md:block">
        <img
          class="rounded-full transition-transform transform hover:scale-125"
          src="/assets/img/index_img.jpg"
          alt="Starship starts the engine"
          width="512px"
          height="512px"
        />
      </div>
      <div>
        <h1
          class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight"
        >
          Marketing website done with Nuxt
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl">
          Nuxtship is a starter template for startups, marketing websites &
          landing pages.<wbr /> Built with Nuxt & TailwindCSS. You can
          quickly create any website with this starter.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <NuxtLink
            class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800 border-2 border-transparent"
            to="https://github.com/Gr33nW33n/nuxtship-template"
            target="_blank"
            >Get Started</NuxtLink
          >
          <NuxtLink
            class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black"
            to="https://github.com/Gr33nW33n/nuxtship-template"
            target="_blank"
            >View Repo</NuxtLink
          >
        </div>
      </div>
    </main>
    <div class="mt-16 md:mt-0">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Everything you need to start a website
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        Nuxt comes batteries included. It takes the best parts of
        state-of-the-art tools and adds its own innovations.
      </p>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white"
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-bd832875=""
          >
            <path
              d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Bring Your Own Framework</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Build your site using Vue, web components, or just plain ol' HTML +
            JavaScript.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white"
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-bd832875=""
          >
            <path
              d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg">100% Static HTML, No JS</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Nuxt renders your entire page to static HTML, removing all
            JavaScript from your final build by default.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white"
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-bd832875=""
          >
            <path
              d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"
              fill="currentColor"
            ></path>
            <path
              d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg">On-Demand Components</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Need some JS? Nuxt can automatically hydrate interactive components
            when they become visible on the page.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white"
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-bd832875=""
          >
            <path
              d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Broad Integration</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind,
            Markdown, MDX, and any other npm packages.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white"
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-bd832875=""
          >
            <path
              d="M6 22h12c.178 0 .348-.03.512-.074l-3.759-3.759A4.966 4.966 0 0 1 12 19c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5a4.964 4.964 0 0 1-.833 2.753l3.759 3.759c.044-.164.074-.334.074-.512V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"
              fill="currentColor"
            ></path>
            <circle cx="12" cy="14" r="3" fill="currentColor"></circle>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg">SEO Enabled</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Automatic sitemaps, RSS feeds, pagination and collections take the
            pain out of SEO and syndication. It just works!
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-white"
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-bd832875=""
          >
            <path
              d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Community</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            Nuxt is an open source project powered by hundreds of contributors
            making thousands of individual contributions.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <h2 class="text-center text-slate-500">Works with your technologies</h2>
      <div
        class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-8 md:h-14"
          style=""
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          data-v-bd832875=""
        >
          <path
            fill="currentColor"
            d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.59 1.59 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.529 1.529 0 0 0-.217-.782L17.792 7.414a1.59 1.59 0 0 0-.591-.573a1.652 1.652 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.59 1.59 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.591 1.591 0 0 0-.591-.573a1.653 1.653 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.591 1.591 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.59 1.59 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632"
          ></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-8 md:h-14"
          style=""
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          data-v-bd832875=""
        >
          <path
            fill="currentColor"
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12"
          ></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-8 md:h-14"
          style=""
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          data-v-bd832875=""
        >
          <path
            fill="currentColor"
            d="M24 1.61h-9.94L12 5.16L9.94 1.61H0l12 20.78ZM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z"
          ></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-8 md:h-14"
          style=""
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          data-v-bd832875=""
        >
          <path
            fill="currentColor"
            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75l-.232-2.718l10.059.003l.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426l-2.91.804l-2.955-.81l-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443l.744-8.157z"
          ></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-8 md:h-12"
          style=""
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          data-v-bd832875=""
        >
          <path fill="currentColor" d="M24 22.525H0l12-21.05z"></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-8 md:h-12"
          style=""
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          data-v-bd832875=""
        >
          <path
            fill="currentColor"
            d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23c-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64zM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65z"
          ></path>
        </svg>
      </div>
    </div>
    <div
      class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
    >
      <h2 class="text-white text-3xl md:text-6xl">Build faster websites.</h2>
      <p class="text-slate-500 mt-4 text-lg md:text-xl">
        Static or Dynamic, the choice is yours with Nuxt's hybrid rendering
        modes.
      </p>
      <NuxtLink
        to="https://github.com/Gr33nW33n/nuxtship-template"
        class="flex mt-5 rounded text-center transition focus-visible:ring-2 hover:bg-gray-500 hover:text-white ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white text-black border-2 border-transparent"
        target="_blank"
      >Get Started</NuxtLink
      >
    </div>
  </div>
</template>
