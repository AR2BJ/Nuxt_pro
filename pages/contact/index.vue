
<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="mt-16 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Contact</h1>
      <p class="text-lg mt-4 text-slate-600">I am here to help.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Contact Nuxtship Creator
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Have something to say? I am here to help. Fill up the form or send
          email.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-gray-400 w-4 h-4"
              style=""
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              data-v-bd832875=""
            >
              <path
                fill="currentColor"
                d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8m0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 0 1 12 0c0 3.34-3.87 7.66-6 9.65M12 6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
              ></path></svg
            ><span>1010 Vienna, Austria</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-gray-400 w-4 h-4"
              style=""
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              data-v-bd832875=""
            >
              <path
                fill="currentColor"
                d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"
              ></path></svg
            ><a href="mailto:jakobaichmayr@gmail.com"
              >jakobaichmayr@gmail.com</a
            >
          </div>
        </div>
      </div>
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
          <div class="mb-3">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            ></textarea>
          </div>
          <button
            class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
