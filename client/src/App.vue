<script >
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
    RouterLink,
    RouterView,
  },
  data() {
    return {
      localStorage: localStorage,
    };
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/index.scss";
@import "@/assets/scss/tailwinds.scss";
</style>

<template :class=" `bg-${localStorage.theme}-500`">
  <main>
    <div class="px-5">
      <div
        :class="`py-1 bg-gradient-to-b from-${localStorage.theme}-300 to-${localStorage.theme}-500 rounded-b`"
      ></div>
    </div>
    <div class="grid-cols-12 grid">
      <div class="col-span-2">
        <Sidebar />
      </div>
      <div class="col-span-10 mr-5">
        <RouterView />
      </div>
    </div>
    <div class="px-5">
      <div
        :class="`py-1 bg-gradient-to-b from-${localStorage.theme}-300 to-${localStorage.theme}-500 rounded-t`"
      ></div>
    </div>
  </main>
</template>


