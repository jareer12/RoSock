<script>
import { Chart, registerables } from "chart.js";
import utils from "@/assets/js/utils";

Chart.register(...registerables);

export default {
  data() {
    return {
      id: utils.randomString(12),
    };
  },
  props: {
    header: String,
    type: String,
    options: Object,
    data: {
      labels: String | Array,
      datasets: [
        {
          backgroundColor: String,
          label: String | Array,
          data: Object | Array,
          borderColor: String,
          borderWidth: 1,
        },
      ],
    },
  },
  mounted() {
    const Options = this.options;
    const Data = this.data;

    let ctx = document.getElementById(this.id);
    const chart = new Chart(ctx, {
      data: Data,
      type: this.type,
      options: Options,
    });
    console.log(chart);
  },
};
</script>

<template>
  <main class="w-full">
    <section class="">
      <h1>{{ header }}</h1>
      <div class="w-full flex flex-wrap p-3">
        <canvas :id="id"></canvas>
      </div>
    </section>
  </main>
</template>