<script>
import { Chart, registerables } from "chart.js";

import utils from "@/assets/js/utils";
import Stats from "@/components/Stats.vue";
import IPLog from "@/components/IPLogs.vue";
import NewChart from "@/components/charts/NewChart.vue";

Chart.register(...registerables);
const Colors = utils.getThemeColors();
const DatasetData = utils.fakeDatasetsArray(500, 75, 100);
const DatasetsLabels = utils.fakeLabelsArray(24);
const themeColor = Colors[localStorage.theme];
const themeColorRevert = utils
  .changeHue(Colors[localStorage.theme], 180)
  .replace("#", "");

let green = utils.hexToRgb(`${Colors["steel"]}`, 0.1);
let color = utils.hexToRgb(`${themeColor}`, 0.1);

let greenborder = utils.hexToRgb(`${Colors["steel"]}`, 1);
let border = utils.hexToRgb(`${themeColor}`, 1);

console.log(utils.hexToRgb(themeColor, 0.1));
export default {
  components: { IPLog, Stats, NewChart },
  data() {
    return {
      localStorage: localStorage,
      colors: Colors,
      charts: {
        ram: {
          options: {
            elements: {
              line: {
                tension: 0.4,
              },
            },
            maintainAspectRatio: false,
            scales: {
              y: {
                display: false,
                beginAtZero: true,
              },
              x: {
                display: false,
              },
            },
          },
          data: {
            labels: DatasetsLabels,
            datasets: [
              {
                label: "Databases",
                fill: {
                  target: "origin",
                  above: utils.hexToRgb(themeColor, 0.1), // Area will be red above the origin
                  below: utils.hexToRgb(themeColor, 0.1), // And blue below the origin
                },
                backgroundColor: utils.hexToRgb(themeColor, 0.4),
                borderWidth: 1,
                borderColor: utils.hexToRgb(themeColor, 1),
                data: DatasetData,
              },
              {
                label: "Databases",
                fill: {
                  target: "origin",
                  above: utils.hexToRgb(themeColorRevert, 0.2), // Area will be red above the origin
                  below: utils.hexToRgb(themeColorRevert, 0.1), // And blue below the origin
                },
                backgroundColor: utils.hexToRgb(themeColorRevert, 0.4),
                borderWidth: 1,
                borderColor: utils.hexToRgb(themeColorRevert, 1),
                data: utils.fakeDatasetsArray(500, 75, 100),
              },
            ],
          },
        },
        dough: {
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                display: false,
                beginAtZero: true,
              },
              x: {
                display: false,
              },
            },
          },
          data: {
            datasets: [
              {
                label: "Databases",
                borderWidth: 1,
                data: [50, 50],
                borderColor: [
                  utils.hexToRgb(themeColor, 1),
                  utils.hexToRgb(Colors["steel"], 1),
                ],
                backgroundColor: [
                  utils.hexToRgb(themeColor, 0.4),
                  utils.hexToRgb(Colors["steel"], 0.4),
                ],
              },
              {
                label: "Databases",
                borderWidth: 1,
                data: [50, 50],
                borderColor: [
                  utils.hexToRgb(Colors["steel"], 1),
                  utils.hexToRgb(themeColorRevert, 1),
                ],
                backgroundColor: [
                  utils.hexToRgb(Colors["steel"], 0.4),
                  utils.hexToRgb(themeColorRevert, 0.4),
                ],
              },
            ],
          },
        },
      },
    };
  },
};
</script>

<template>
  <main class="">
    <section class="py-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <Stats percentage="100" value="3425924" length="34" label="Memory" />
        <Stats percentage="100" value="3425924" length="34" label="Memory" />
        <Stats percentage="100" value="3425924" length="34" label="Memory" />
      </div>
    </section>
    <section class="">
      <div class="grid grid-cols-1">
        <div class="col-span-1 bg-steel-400 rounded flex flex-wrap">
          <NewChart
            type="line"
            :options="charts.ram.options"
            :data="charts.ram.data"
          />
        </div>
        <section class="grid mt-3 grid-cols-3 gap-3 col-span-3">
          <div>
            <div class="bg-steel-400 rounded">
              <NewChart
                type="bar"
                :data="charts.ram.data"
                :options="charts.ram.options"
              />
            </div>
          </div>
          <div>
            <div class="bg-steel-400 rounded">
              <NewChart
                type="bar"
                :data="charts.ram.data"
                :options="charts.ram.options"
              />
            </div>
          </div>
          <div>
            <div class="bg-steel-400 rounded">
              <NewChart
                type="doughnut"
                :data="charts.dough.data"
                :options="charts.dough.options"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
