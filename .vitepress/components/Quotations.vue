<script setup lang="ts">
import { computed } from "vue";
import Quotation from "./Quotation.vue";
import type { quotationItem } from "../config/quotation.mts";

const props = defineProps<{
  quotationData: quotationItem[];
  sortBy?: "start" | "end";
}>();

const getQuotationData = computed(() => {
  let data: quotationItem[] = [];
  switch (props.sortBy) {
    case "end":
      data.push(...props.quotationData.reverse());
      break;
    case "start":
    default:
      data.push(...props.quotationData);
      break;
  }
  return data;
});
</script>

<template>
  <div class="quotation">
    <div class="container">
      <Quotation
        v-for="(quotation, key) in getQuotationData"
        :key="key"
        :quotation="quotation"
        :index="key"
        :sortBy="sortBy"
        :total="quotationData.length" />
    </div>
  </div>
</template>

<style scoped>
.quotation {
}

.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.item {
}
</style>
