---
layout: home

hero:
  name: Ape code
  text: Passion never fails
  tagline: The programmer's secret garden
  image:
    src: ../images/undraw_designer.svg
    alt: logo图标
  actions:
    - theme: brand
      text: Start
      link: /blog/blog.md
    - theme: alt
      text: Participate in construction
      link: https://github.com/minsion/apecode
features:
  - icon: 🔗
    title: Navigation Tools
    details: Interesting and practical website to improve efficiency.
    link: /en/navigation.md
    linkText: View Now
  - icon: 🗃️
    title: Notes
    details: Simple and minimalist, always the same。
    link: /en/blog/blog.md
    linkText: Learn more
  - icon: 📝
    title: Eight-part essay
    details: Summarize, summarize, organize, latest。
    link: /en/essays/essays.md
    linkText: Learn more
  - icon: 🚀
    title: Light Functions
    details: The lightest utility function.
    link: /en/function.md
    linkText: Learn more
  - icon: 🌞
    title: Quotes
    details: Some interesting sentences.
    link: /quotation.md
    linkText: Learn more
  - icon: 🚩
    title: Embrace open source
    details: The document is open source, copyright ApeCode, no commercial activities are allowed。
    link: https://github.com/minsion/apecode
    linkText: Welcome ⭐
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import { members } from '../../.vitepress/config/en/members.mts'

const coreMembers = [...members]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Core Team</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
