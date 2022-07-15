<script>
import Selector from "@/components/ThemeSelector.vue";

export default {
  components: { Selector },
  data() {
    return {
      localStorage: localStorage,
    };
  },
};
</script>

<template>
  <main class="">
    <section class="mt-5">
      <div class="grid grid-cols-1 gap-5 w-full">
        <section class="">
          <main>
            <div>
              <h2 class="text-xl font-semibold">Select Theme</h2>
            </div>
            <div class="gap-3 mt-3 grid-cols-2 grid">
              <Selector color="emerald" />
              <Selector color="blue" />
              <Selector color="flush" />
              <Selector color="apple" />
              <Selector color="wattle" />
              <Selector color="orchid" />
              <Selector color="turquoise" />
              <Selector color="purp" />
              <Selector color="sorbus" />
            </div>
          </main>
        </section>
        <section class="">
          <main>
            <div>
              <h2 class="text-xl font-semibold"></h2>
            </div>
            <div class="gap-3 mt-3 grid-cols-1 grid"></div>
          </main>
        </section>
      </div>
    </section>
  </main>
</template>
