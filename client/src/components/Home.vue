<script>
import Target from "@/components/TargetBox.vue";
export default {
  components: { Target },
  data() {
    return {};
  },
};
</script>

<template>
  <main class="">
    <section class="mt-5">
      <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        <section>
          <h2>Tools</h2>
          <section class="space-y-3 mt-2">
            <Target />
            <Target />
            <Target />
            <Target />
          </section>
        </section>
        <section>
          <h2>Tools</h2>
          <section class="space-y-3 mt-2">
            <Target />
            <Target />
            <Target />
          </section>
        </section>
        <section>
          <h2>Tools</h2>
          <section class="space-y-3 mt-2">
            <Target />
            <Target />
            <Target />
            <Target />
            <Target />
          </section>
        </section>
      </div>
    </section>
  </main>
</template>
