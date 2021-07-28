<template>
  <div>
    <header class="text-gray-600 body-font">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-900
            mb-4
            md:mb-0
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl font-semibold">BIGSOURCE</span>
        </a>
        <div class="relative flex-grow ml-7">
          <form action="" @submit.prevent="seacrhHandle">
            <input
              v-model="keyword"
              type="text"
              class="
                inline
                w-2/3
                bg-white bg-opacity-50
                rounded-full
                border border-gray-100
                focus:border-indigo-200 focus:bg-transparent
                shadow-md
                focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
            <div class="inline ml-4">
              <button
                type="submit"
                class="
                  text-white
                  bg-indigo-500
                  px-4
                  py-1
                  shadow-md
                  hover:bg-indigo-600
                  rounded-xl
                  font-semibold
                  uppercase
                "
              >
                <span class="fas fa-search mr-3"> </span>Search
              </button>
            </div>
          </form>
        </div>
        <nav
          class="
            md:ml-auto
            flex flex-wrap
            items-center
            text-base
            justify-center
          "
        >
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button
          class="
            inline-flex
            items-center
            bg-gray-100
            border-0
            py-1
            px-3
            focus:outline-none
            hover:bg-gray-200
            rounded
            text-base
            mt-4
            md:mt-0
          "
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    ...mapActions(["fetchSearchEngine"]),
    seacrhHandle() {
      this.fetchSearchEngine(this.keyword);
    },
  },
};
</script>

<style></style>
