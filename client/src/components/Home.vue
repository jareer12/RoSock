<script>
import Target from "@/components/TargetBox.vue";
export default {
  components: { Target },
  data() {
    return {
      connections: [],
    };
  },
  mounted() {
    fetch(`${window.$server}/list_connections`)
      .then((response) => response.json())
      .then((data) => {
        this.connections = data;
      });
  },
};
</script>

<template>
  <main class="">
    <section class="mt-5">
      <h2>Con-current connections</h2>
      <div
        class="grid xl:grid-cols-3 mt-3 lg:grid-cols-2 grid-cols-1 gap-5 w-full"
      >
        <Target
          v-for="connection in connections"
          :key="connection"
          :username="connection.id"
          :displayName="connection.lastPing"
        />
      </div>
    </section>
  </main>
</template>
