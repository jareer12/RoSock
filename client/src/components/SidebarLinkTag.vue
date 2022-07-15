<script>
export default {
  props: {
    name: String,
    href: String,
    icon: String,
  },
  data() {
    return {
      localStorage: localStorage,
    };
  },
};
</script>
<template>
  <router-link
    :class="`
      p-2
      flex
      items-center
      space-x-2
      hover:bg-${localStorage.theme}-200
      rounded
      duration-300`"
    :to="href"
  >
    <i :class="`md:block hidden ${icon} w-3 h-3`"></i>
    <h2>{{ name }}</h2>
  </router-link>
</template>