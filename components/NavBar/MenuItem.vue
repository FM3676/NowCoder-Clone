<template>
  <li
    class="flex justify-center px-3 items-center text-gray-600 cursor-pointer relative group"
    :class="changeAbleClasses"
  >
    <p class="hover:text-green-350">{{ props.title }}</p>
    <!-- Sub List -->
    <ul
      v-if="props.sub"
      class="max-h-0 group-hover:flex group-hover:max-h-screen hover:flex hover:max-h-screen group-hover:delay-300 group-hover:p-1 hover:p-1 overflow-hidden bg-white rounded-md absolute subPosition flex-col shadow-lg text-sm max-w-none"
      :class="defaultTransition"
    >
      <li
        v-for="item in props.sub"
        :key="item"
        class="flex justify-start text-gray-600 items-center py-2 px-1 rounded-md cursor-pointer hover:bg-gray-300 flex-nowrap"
        :class="calcSubItemWidth()"
      >
        {{ item }}
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
const { defaultTransition } = useTailwindCofing();
const props = withDefaults(
  defineProps<{
    title: string;
    sub?: string[];
    active: boolean;
  }>(),
  {
    active: false,
  }
);

const changeAbleClasses = `${defaultTransition} ${
  props.active ? "activeClass" : ""
}`;

const calcSubItemWidth = () => {
  if (!props.sub) return;
  const lengthArray = props.sub.map((x) => x.length);
  const longestLength = Math.max(...lengthArray);
  return `w-${(longestLength >= 4 ? longestLength : 4) * 4}`;
};
</script>
<style scoped>
.subPosition {
  top: calc(100% + 0.2rem);
  transform: translateX(20%);
}
.activeClass {
  color: rgb(50 202 153 / 1);
}

.activeClass:after {
  content: "";
  display: block;
  padding-top: 0.2rem;
  padding-right: 1rem;
  position: absolute;
  left: 50%;
  bottom: 0.8rem;
  transform: translateX(-50%);
  background: rgb(50 202 153 / 1);
  overflow: hidden;
  border-radius: 9999px;
}
</style>
