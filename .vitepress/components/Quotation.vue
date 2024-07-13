<script setup lang="ts">
import type { quotationItem } from "../config/quotation.mts";

defineProps<{
  quotation: quotationItem;
  index: number;
  sortBy?: "start" | "end";
  total: number;
}>();
</script>

<template>
  <div class="card">
    <div class="container">
      <!-- \!sortBy 正序 -->
      <!-- sortBy === 'start' 正序 | sortBy === 'end' 倒序 -->
      <span class="badge">{{ !sortBy || sortBy === "start" ? index + 1 : total - index }}、</span>
      <span class="content">{{ quotation.content }}</span>
    </div>
    <div class="info">
      <div class="source">
        {{ quotation.source }}
        <span v-if="quotation.profession"> - </span>
        {{ quotation.profession }}
      </div>
      <div class="date">{{ quotation.date }}</div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --tips-color: #096;
}

:root.dark {
  --tips-color: #fff;
}

.card {
  display: block;
  padding: 20px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 5px 2px var(--vp-c-brand-3);
}

.container {
  text-align: justify;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 1px;
}

span.badge {
  font-family: "AlimamaShuHeiTi";
}

span.content {
  background: linear-gradient(to right bottom, var(--quotation-color2), var(--quotation-color1));
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 0px 2px;
  transition: background-size 0.5s;
}

.card:hover span.content {
  background-position: left bottom;
  background-size: 100% 2px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.source {
  font-size: 14px;
  color: var(--tips-color);
}

span.content:hover {
  background-size: 100% 2px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
}
</style>
