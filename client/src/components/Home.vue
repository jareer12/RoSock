<script>
import Target from "@/components/TargetBox.vue";
export default {
  components: { Target },
  data() {
    return {
      Users: [],
    };
  },
  mounted() {
    fetch(`${window.$server}/fetch_users`)
      .then((response) => response.json())
      .then((data) => {
        this.Users = data.Data;
      });
  },
};
</script>

<template>
  <main class="">
    <section class="mt-5">
      <h2>Online Users</h2>
      <div
        class="grid xl:grid-cols-3 mt-3 lg:grid-cols-2 grid-cols-1 gap-5 w-full"
      >
        <Target
          v-for="user in Users"
          :key="user"
          :avatar="`https://www.roblox.com/headshot-thumbnail/image?userId=${user.UserId}&width=60&height=60&format=png`"
          :username="user.Name"
          :displayName="user.DisplayName"
        />
      </div>
    </section>
  </main>
</template>
