<script>
import URL from "@/components/SidebarLinkTag.vue";
import Dropdown from "@/components/SidebarDropdown.vue";
export default {
  components: { URL, Dropdown },
  data() {
    return {
      LibraryDropdownData: [
        {
          name: "My Page",
          icon: "fa-solid fa-paperclip",
          href: "/library/my-page",
        },
      ],
      SettingsDropdownData: [
        {
          name: "Accounts",
          icon: "fa-solid fa-users",
          href: "/settings/accounts",
        },
        {
          name: "Customize Panel",
          icon: "fa-solid fa-pen-nib",
          href: "/settings/customize",
        },
      ],
      MiscsDropdownData: [
        {
          name: "Download Data",
          icon: "fa-solid fa-file-shield",
          href: "/misc/download-data",
        },
      ],
      localStorage: localStorage,
    };
  },
  methods: {
    welcomeMessage(username) {
      let date = new Date();
      let hook = date.getHours() < 12 ? "Good Morning" : "Good Afternoon";
      return `${hook}, ${username}`;
    },
    changeTheme(theme) {
      this.localStorage.theme = theme;
    },
  },
};
</script>

<template>
  <main>
    <section class="p-5">
      <div
        :class="`
          p-3
          h-screen
          w-full
          bg-gradient-to-b
          from-${localStorage.theme}-300
          to-${localStorage.theme}-500
          rounded-lg
        `"
      >
        <section class="py-2 border-b flex items-center border-winkle-200">
          <h2 class="">
            {{ welcomeMessage(`Jareer Abdullah`) }}
          </h2>
        </section>
        <section class="space-y-2 mt-5">
          <URL href="/" name="Home" icon="fa-solid fa-earth-asia" />
          <URL href="/dashboard" name="Stats" icon="fa-solid fa-chart-simple" />
          <URL href="/todo" name="ToDo List" icon="fa-solid fa-list-check" />
          <Dropdown
            name="Library"
            icon="fa-solid fa-book"
            :children="LibraryDropdownData"
          />
          <Dropdown
            name="Settings"
            icon="fa-solid fa-screwdriver-wrench"
            :children="SettingsDropdownData"
          />
          <Dropdown
            name="Miscellaneous"
            icon="fa-solid fa-plus"
            :children="MiscsDropdownData"
          />
        </section>
      </div>
    </section>
  </main>
</template>
