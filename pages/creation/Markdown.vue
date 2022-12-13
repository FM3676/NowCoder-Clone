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
        @click="handlePostPublish"
      >
        <span v-if="!isPublishing">发布</span>
        <UISpinner v-else />
      </button>
    </div>
    <Editor @change="handleChange" :plugins="plugins" :value="content" />
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from "element-plus";
import { Editor } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import math from "@bytemd/plugin-math-ssr";
import "~~/assets/CodeMirrow.css";
import "~~/assets/MdPreview.css";
const { publishPost } = usePost();
const router = useRouter();

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/css/app.717a544a.css",
    },
  ],
});

const plugins = [gfm(), highlight(), math()];
const content = ref("");
const title = ref("");
const isPublishing = ref(false);
const handleChange = (v: string) => (content.value = v);
const handlePostPublish = async () => {
  isPublishing.value = true;
  publishPost(title.value, content.value)
    .then((res) => {
      ElNotification({ title: "Publish Successfully", type: "success" });
      router.push("/");
    })
    .catch(() =>
      ElNotification({
        title: "No Auth!",
        message: "Login First",
        type: "warning",
      })
    );
  isPublishing.value = false;
};
</script>

<style scoped></style>
