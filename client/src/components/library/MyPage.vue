<script>
import Selector from "@/components/ThemeSelector.vue";

export default {
  components: { Selector },
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
      <div class="grid grid-cols-1 gap-5 w-full">
        <section class="">
          <main>
            <div>
              <h2 class="text-xl font-semibold">Basic Information</h2>
            </div>
            <div class="gap-3 mt-3 grid-cols-2 grid">
              <section>
                <main>
                  <div
                    class="
                      flex flex-wrap
                      w-full
                      items-center
                      space-y-3
                      bg-steel-400
                      p-3
                      rounded-lg
                    "
                  >
                    <div class="w-full">
                      <label for="placeholder-gray-300">Username</label>
                      <input
                        type="text"
                        class="
                          bg-steel-300
                          placeholder-gray-400
                          p-3
                          rounded-lg
                          w-full
                        "
                        placeholder="John Doe"
                      />
                    </div>
                    <div class="w-full">
                      <label for="placeholder-gray-300">Contact Email</label>
                      <input
                        type="text"
                        class="
                          bg-steel-300
                          placeholder-gray-400
                          p-3
                          rounded-lg
                          w-full
                        "
                        placeholder="johndoe@example.com"
                      />
                    </div>
                    <div class="w-full">
                      <label for="placeholder-gray-300">Description</label>
                      <textarea
                        type="text"
                        class="
                          bg-steel-300
                          placeholder-gray-400
                          p-3
                          rounded-lg
                          w-full
                        "
                        placeholder="No description given."
                      ></textarea>
                    </div>
                  </div>
                  <div
                    class="
                      mt-3
                      flex flex-wrap
                      w-full
                      items-center
                      space-y-3
                      bg-steel-400
                      p-3
                      rounded-lg
                    "
                  >
                    <div class="w-full">
                      <label for="placeholder-gray-300">Username</label>
                      <input
                        type="text"
                        class="
                          bg-steel-300
                          placeholder-gray-400
                          p-3
                          rounded-lg
                          w-full
                        "
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </main>
              </section>
              <section>
                <main>
                  <div class="image-tilt-head flex flex-wrap w-full rounded-lg">
                    <img
                      src="https://www.wallpaperflare.com/static/825/76/932/space-planet-digital-art-space-art-wallpaper.jpg"
                      class="w-full rounded"
                    />
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <button
                      :class="`mt-3 rounded-lg float-right w-full py-3 bg-gradient-to-r from-${localStorage.theme}-300 to-${localStorage.theme}-500`"
                    >
                      Upload New
                    </button>
                    <button
                      :class="`mt-3 rounded-lg float-right w-full py-3 bg-gradient-to-r from-steel-300 to-steel-400`"
                    >
                      Remove Background
                    </button>
                  </div>
                </main>
              </section>
            </div>
          </main>
        </section>
      </div>
    </section>
  </main>
</template>
