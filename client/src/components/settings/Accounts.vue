<script>
import Account from "@/components/settings/AccountBox.vue";

export default {
  components: { Account },
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
      <div>
        <h2 class="text-xl font-semibold">Accounts</h2>
      </div>
      <div class="grid grid-cols-5 gap-5 w-full">
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
      </div>
    </section>
  </main>
</template>
