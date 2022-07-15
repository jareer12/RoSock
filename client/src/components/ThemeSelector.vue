<script>
export default {
  props: {
    color: String,
  },
  data() {
    return {
      localStorage: localStorage,
    };
  },
  methods: {
    changeTheme() {
      this.localStorage.theme = this.color;
      window.location.reload();
    },
  },
};
</script>
<template>
  <main>
    <button
      @click="changeTheme()"
      class="
        flex flex-wrap
        w-full
        items-center
        space-x-3
        bg-steel-400
        p-3
        rounded-lg
      "
    >
      <div
        :class="`w-6 h-6 rounded-lg bg-gradient-to-r from-${color}-300 to-${color}-500`"
      ></div>
      <div>
        <h3>
          <span class="capitalize">{{ color }}</span>
        </h3>
      </div>
    </button>
  </main>
</template>