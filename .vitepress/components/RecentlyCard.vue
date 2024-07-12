<script setup>
import { computed } from "vue";

const props = defineProps({
  blogData: Array,
});

const blogData10 = computed(() => {
  return props.blogData.slice(0, 10);
});
</script>

<template>
  <div class="grid auto-cols-auto sm:grid-cols-2 grid-cols-1 gap-[14px]">
    <section v-for="(item, key) in blogData10" :key="key">
      <a rel="noreferrer" class="group" target="_self" :href="item.link" :title="`${item.text}`">
        <section
          class="h-full border-[1px] border-solid border-gray-300 dark:border-gray-600 rounded-[8px] leading-[24px] px-[24px] py-[12px] group-hover:shadow group-hover:border-[#62bbee] dark:group-hover:border-[#589fe8] cursor-pointer">
          <section>
            <span
              class="text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200 transition duration-150 ease-in-out">
              {{ item.text }}
            </span>
          </section>

          <section class="mt-[15px] flex-1 flex flex-row justify-between">
            <span
              class="text-sm text-gray-800 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50 min-h-[20px]">
              {{ item.time }}
            </span>

            <span class="text-sm text-gray-800 opacity-50 dark:text-gray-300 min-h-[20px] no-underline">
              {{ item.type }}
            </span>
          </section>
        </section>
      </a>
    </section>
  </div>
</template>
