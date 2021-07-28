<template>
  <section class="text-gray-600 body-font pt-10">
    <div class="container">
      <div class="flex flex-wrap -m-4 ml-56">
        <div class="p-1 w-1/2">
          <div
            class="
              flex
              border-2
              rounded-lg
              hover:bg-gray-100
              border-gray-200 border-opacity-50
              p-5
              shadow-sm
            "
          >
            <div class="flex-grow">
              <h2 class="text-gray-900 text-xl title-font font-semibold mb-1">
                {{ data.title }}
              </h2>
              <p class="leading-relaxed font-medium text-sm">
                {{ data.snippet }}
              </p>
              <a
                :href="data.link"
                class="mt-2 text-indigo-500 inline-flex items-center text-sm"
                >{{ data.displayed_link }}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultSearch",
  props: ["data"],
};
</script>

<style></style>
