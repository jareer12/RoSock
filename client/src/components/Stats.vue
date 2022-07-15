<script>
export default {
  props: {
    value: Number,
    percentage: Number,
    length: Number,
    label: String,
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
    <section
      :class="` rounded-lg
            bg-gradient-to-r
            from-${localStorage.theme}-300
            to-${localStorage.theme}-400
            p-5`"
    >
      <div class="grid grid-cols-2 items-center">
        <h5 class="text-winkle-300 text-lg">{{ value }}</h5>
        <div>
          <i class="fa-solid fa-bolt float-right"></i>
        </div>
      </div>
      <div :class="`bg-${localStorage.theme} rounded-full`">
        <div
          :style="`width: ${length}%`"
          class="p-0.5 rounded-full bg-winkle-300 mt-3"
        ></div>
      </div>
      <div class="grid grid-cols-2 mt-2 items-center">
        <h5 class="text-winkle-300">{{ label }}</h5>
        <div>
          <span :class="`float-right`"> +{{ percentage }}% </span>
        </div>
      </div>
    </section>
  </main>
</template>