# Quotes

## Overview

:::tip
Here are some interesting sentences 🌞, welcome to add to the comments section.

Updated from time to time.
:::

<script setup>
  import { quotationData } from '../../.vitepress/config/en/quotation.mts';
  import Quotations from '../../.vitepress/components/Quotations.vue';
  import QuotationTyped from '../../.vitepress/components/QuotationTyped.vue'
</script>

<QuotationTyped :typedData=[...quotationData] />

## Collection

<Quotations :quotationData=[...quotationData]  sortBy='end' />
