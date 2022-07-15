
<script>
export default {
  props: {
    icon: String,
    name: String,
    children: Array,
  },
  data() {
    return {
      localStorage: localStorage,
      show: false,
    };
  },
};
</script>

<template>
  <main>
    <button
      @click="show = !show"
      :class="`w-full duration-300 hover:bg-${localStorage.theme}-200 rounded-lg`"
    >
      <div class="relative duration-300 transition-all">
        <div class="flex items-center p-2 rounded-md">
          <div class="space-x-3 flex items-center">
            <i :class="`md:block hidden ${icon} w-3 h-3`"></i>
            <span class="">{{ name }}</span>
          </div>
        </div>
      </div>
    </button>
    <div
      v-show="show"
      :class="`w-full mt-1 px-3 bg-${localStorage.theme}-400 rounded-md`"
    >
      <router-link
        v-for="child in children"
        :key="child"
        :to="child.href"
        :class="`block px-4 py-2 text-sm  duration-300 hover:bg-${localStorage.theme}-200 rounded-lg`"
      >
        <div class="flex items-center space-x-2">
          <i :class="`md:block hidden ${child.icon} w-3 h-3`"></i>
          <span>{{ child.name }}</span>
        </div>
      </router-link>
    </div>
  </main>
</template>
