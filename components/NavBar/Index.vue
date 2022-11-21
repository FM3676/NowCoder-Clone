<template>
  <div class="w-screen bg-white fixed top-0 h-14">
    <nav
      class="flex w-full h-full px-8 mx-auto max-w-8xl justify-start items-center"
    >
      <!-- LOGO -->
      <picture class="h-6">
        <img
          class="h-full"
          src="https://static.nowcoder.com/fe/file/logo/1.png"
          alt="Logo"
        />
      </picture>
      <!-- Menu -->
      <ul class="h-full flex ml-8">
        <NavBarMenuItem
          v-for="item in options"
          :title="item.title"
          :sub="item.sub"
          :key="item.title"
        />
      </ul>
      <!-- SearchBar -->
      <NavBarSearchBar />
      <!-- Hire & Enterprise -->
      <div class="ml-4 grid gap-4 grid-flow-col">
        <NavBarHireEnterpriseOption title="我要招聘" />
        <NavBarHireEnterpriseOption title="去企业版" />
      </div>
      <!-- DownLoad App (Phone Icon) -->
      <ElPopover placement="bottom" content="下载App" trigger="hover">
        <template #reference>
          <span
            class="ml-4 h-8 w-8 flex justify-center items-center text-gray-400 hover:bg-gray-200 rounded-md"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              data-v-029747aa=""
            >
              <path
                fill="currentColor"
                d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
              ></path>
            </svg>
          </span>
        </template>
      </ElPopover>
      <!-- Sign in / Sign up button -->
      <button class="flex justify-center items-center py-2 px-4 ml-4 rounded-lg text-sm bg-green-350 text-white" type="button" >登录/注册</button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ElPopover } from "element-plus";
import DummyData from "./DummyData";

const options = DummyData();
</script>
