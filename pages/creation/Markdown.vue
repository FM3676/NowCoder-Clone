<template>
  <div class="main">
    <div class="py-4 px-16 w-full bg-white flex justify-between items-center">
      <input
        type="text"
        v-model="title"
        placeholder="请输入你的标题..."
        class="text-5xl outline-none border-b-gray-400 grow"
      />
      <button
        type="button"
        class="bg-green-250 text-3xl text-white py-3 px-5 rounded-lg"
      >
        发布
      </button>
    </div>
    <Editor @change="handleChange" :plugins="plugins" :value="value" />
  </div>
</template>

<script setup lang="ts">
import { Editor } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import math from "@bytemd/plugin-math-ssr";
import "~~/assets/CodeMirrow.css";
import "~~/assets/MdPreview.css";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/css/app.717a544a.css",
    },
  ],
});

const plugins = [gfm(), highlight(), math()];
const value = ref("");
const title = ref("");
const handleChange = (v: string) => (value.value = v);
</script>

<style scoped></style>
