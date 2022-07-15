
<script>
export default {
  data() {
    return {
      localStorage: localStorage,
    };
  },
};
</script>
<template>
  <main>
    <div class="gap-3 mt-3 grid">
      <div
        :class="`w-full
              rounded-lg
              p-3
              bg-gradient-to-b
              from-steel-300
              to-steel-400
`"
      >
        <div class="bg-steel-200">
          <img
            src="https://avatars.githubusercontent.com/u/57962439?v=4"
            class="rounded-lg object-cover w-full"
          />
        </div>
        <div class="border border-steel-200 rounded-full mt-3"></div>
        <div class="mt-3">
          <h3 class="flex items-center space-x-1">
            <span><i class="fa-solid fa-crown"></i></span>
            <span> Jareer Abdullah </span>
          </h3>
        </div>
        <button
          :class="`mt-3 rounded-lg float-right w-full py-3 bg-gradient-to-r from-${localStorage.theme}-300 to-${localStorage.theme}-500`"
        >
          Manage
        </button>
      </div>
    </div>
  </main>
</template>