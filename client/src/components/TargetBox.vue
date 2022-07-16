<script>
export default {
  props: {
    avatar: String,
    username: String,
    displayName: String,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <section
    class="
      w-full
      rounded-lg
      bg-gradient-to-b
      from-steel-300
      to-steel-400
      bg-pos-0
      hover:bg-pos-100
      duration-500
      bg-size-200
      transition-all
      p-5
    "
  >
    <section>
      <div>
        <div class="">
          <div class="flex flex-wrap text-winkle-300 items-center space-x-3">
            <div>
              <img :src="avatar" class="rounded-full w-10 h-10" />
            </div>
            <div>
              <h2>{{ username }}</h2>
              <h2 class="text-xs text-slate-400">
                {{ displayName }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>