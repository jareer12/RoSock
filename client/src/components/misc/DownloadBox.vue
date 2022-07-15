<script>
export default {
  props: {
    title: String,
    text: String,
  },
  data() {
    return {
      localStorage: localStorage,
    };
  },
};
</script>
<template>
  <main>
    <div class="gap-3 mt-3 grid-cols-1 grid">
      <div
        class="
          rounded-lg
          items-center
          bg-gradient-to-b
          lg:grid-cols-2
          grid
          from-steel-300
          to-steel-400
          p-3
        "
      >
        <div>
          <h2>{{ title }}</h2>
          <h4 class="text-winkle-300 text-xs">{{ text }}</h4>
        </div>
        <div>
          <button
            :class="`rounded-lg float-right w-full lg:w-auto lg:mt-0 mt-3 lg:px-8 py-3 bg-gradient-to-r from-${localStorage.theme}-300 to-${localStorage.theme}-500`"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  </main>
</template>