<script setup lang="ts">
defineProps<{
  classifyData: Array<any>;
}>();
</script>

<template>
  <div class="grid auto-cols-auto sm:grid-cols-2 grid-cols-1 gap-[14px]">
    <section v-for="(classifyItem, key) in classifyData" :key="key">
      <a
        rel="noreferrer"
        class="group"
        target="_self"
        :href="classifyItem.link || null"
        :title="`${classifyItem.value} - ${classifyItem.desc}`">
        <section
          class="flex flex-row gap-[10px] justify-center h-full border-[1px] border-solid border-gray-300 dark:border-gray-600 rounded-[8px] leading-[24px] px-[24px] py-[12px] group-hover:shadow group-hover:border-[#62bbee] dark:group-hover:border-[#589fe8] cursor-pointer">
          <section class="flex justify-center items-center shrink-0">
            <img
              v-show="classifyItem.icon"
              class="w-14 h-14 rounded-[4px] overflow-hidden select-none object-cover no-zoom"
              :src="classifyItem.icon"
              :alt="`${classifyItem.value} - ${classifyItem.desc}`"
              data-zoomable />
          </section>

          <section class="flex-1 flex flex-col justify-center h-full">
            <span
              class="text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200 transition duration-150 ease-in-out">
              {{ classifyItem.value }}
            </span>

            <span
              class="inline-block mt-[4px] text-sm text-gray-800 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50 min-h-[20px]">
              {{ classifyItem.desc }}
            </span>

            <span
              class="inline-block mt-[10px] text-sm text-right text-gray-800 opacity-50 dark:text-gray-300 min-h-[20px]">
              文章数：{{ classifyItem.total }}
            </span>
          </section>
        </section>
      </a>
    </section>
  </div>
</template>
