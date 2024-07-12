<script setup lang="ts">
import { onMounted } from "vue";
import Typed from "typed.js";
import type { quotationItem } from "../config/quotation.mts";

const props = defineProps<{
  typedData: quotationItem[];
}>();

onMounted(() => {
  let strings: string[] = [];
  strings = getSpecifiedFields(props.typedData, ["content", "source"]);
  strings = strings.sort(() => Math.random() - 0.5);

  const options = {
    strings: strings,
    typeSpeed: 50,
    startDelay: 2000,
    backSpeed: 50,
    backDelay: 2000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    smartBackspace: true,
  };
  const typed = new Typed(".typed", options);
});

const getSpecifiedFields = (source: quotationItem[], fields: string[]): string[] => {
  const arr: string[] = [];
  source.forEach((item) => {
    arr.push(`${item[fields[0]]}  by${item[fields[1]]}`);
  });
  return arr;
};
</script>

<template>
  <div class="container">
    <span class="typed"></span>
  </div>
</template>

<style>
span.typed-cursor {
  font-size: 30px;
  font-family: "AlimamaShuHeiTi";
  letter-spacing: 1.5px;
}
</style>

<style scoped>
.container {
  padding: 20px;
  min-height: 222px; /* 四行文本显示高度 */
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: border-color 0.25s, box-shadow 0.25s, height 0.25s;
}

.container:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 5px 2px var(--vp-c-brand-3);
}

span.typed {
  font-size: 30px;
  font-family: "AlimamaShuHeiTi";
  letter-spacing: 1.5px;
  background: linear-gradient(to right bottom, var(--quotation-color2), var(--quotation-color1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
