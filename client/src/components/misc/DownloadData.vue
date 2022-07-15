<script>
import Downloader from "@/components/misc/DownloadBox.vue";

export default {
  components: { Downloader },
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
        <section class="w-full">
          <main>
            <div>
              <h2 class="text-xl font-semibold">Download Statistics</h2>
            </div>
            <div>
              <Downloader
                title="Memory Statistics"
                text="Random Access Memory Statistics of 28/06/22"
              />
              <Downloader
                title="Memory Statistics"
                text="Random Access Memory Statistics of 28/06/22"
              />
              <Downloader
                title="Memory Statistics"
                text="Random Access Memory Statistics of 28/06/22"
              />
            </div>
          </main>
        </section>
        <section class="w-full">
          <main>
            <div>
              <h2 class="text-xl font-semibold">Download Database</h2>
            </div>
            <div>
              <Downloader
                title="Tools Data"
                text="Home Page Tools Statistics of 28/06/22"
              />
              <Downloader
                title="Tools Data"
                text="Home Page Tools Statistics of 28/06/22"
              />
            </div>
          </main>
        </section>
        <section class="w-full">
          <main>
            <div>
              <h2 class="text-xl font-semibold">Download Logs</h2>
            </div>
            <div>
              <Downloader
                title="Error Logs"
                text="Server Error Logs 28/06/22"
              />
              <Downloader title="Info Logs" text="Server Infos Logs 28/06/22" />
              <Downloader
                title="Other Logs"
                text="Server Other Logs 28/06/22"
              />
            </div>
          </main>
        </section>
      </div>
    </section>
  </main>
</template>
