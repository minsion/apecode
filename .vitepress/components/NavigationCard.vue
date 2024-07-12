<script setup lang="ts">
import type { navigationItem } from "../config/navigation.mts";

defineProps<{
  navigationData: navigationItem[];
}>();
</script>

<template>
  <div class="grid auto-cols-auto lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[14px]">
    <section v-for="(navigationItem, key) in navigationData" :key="key">
      <a
        rel="noreferrer"
        class="group"
        target="_blank"
        :href="navigationItem.link"
        :title="`${navigationItem.text} - ${navigationItem.desc}`">
        <section
          class="flex flex-row gap-[10px] justify-center h-full border-[1px] border-solid border-gray-300 dark:border-gray-600 rounded-[8px] leading-[24px] px-[24px] py-[12px] group-hover:shadow group-hover:border-[#62bbee] dark:group-hover:border-[#589fe8] no-underline hover:underline">
          <!-- 网站图标 -->
          <section class="flex justify-center items-center shrink-0">
            <!-- no-zoom 禁用  -->
            <img
              v-show="navigationItem.icon"
              class="w-8 h-8 rounded-[4px] overflow-hidden select-none object-contain no-zoom"
              :src="navigationItem.icon"
              :alt="`${navigationItem.text} - ${navigationItem.desc}`"
              data-zoomable />
          </section>

          <!-- 网站文字信息 -->
          <section class="flex-1 flex flex-col justify-center h-full">
            <span
              class="text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200 transition duration-150 ease-in-out">
              {{ navigationItem.text }}
            </span>

            <span
              class="inline-block mt-[4px] text-sm text-gray-800 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50 min-h-[20px]">
              {{ navigationItem.desc }}
            </span>
          </section>
        </section>
      </a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.vp-doc a {
  text-decoration: none;
}
</style>
