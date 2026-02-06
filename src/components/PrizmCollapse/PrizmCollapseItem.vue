<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElCollapseItem
 */

import { ElCollapseItem, type CollapseItemProps } from "element-plus";
import { useCssModule, useTemplateRef } from "vue";
import "element-plus/es/components/collapse-item/style/css";
import { IconDubleArrow } from "@/shared/icon";

type Slots = {
  default?: unknown;
  title?: unknown;
  icon?: unknown;
};
const baseCollapseItemRef = useTemplateRef("baseCollapseItemRef");
const slots = defineSlots<Slots>();

type Props = {
  title?: CollapseItemProps["title"];
  disabled?: CollapseItemProps["disabled"];
  icon?: CollapseItemProps["icon"];
  name?: CollapseItemProps["name"];
};

const props = withDefaults(defineProps<Props>(), {
  title: "Default title",
  icon: IconDubleArrow,
});

const classes = useCssModule("classes"); 

defineExpose({
  baseCollapseItemRef,
});
</script>
<template>
  <ElCollapseItem
    v-bind="props"
    ref="baseCollapseItemRef"
    :class="[classes.root]"
  >
    <template v-if="slots.title" #title>
      <slot name="title" />
    </template>

    <template v-if="slots.icon" #icon>
      <slot name="icon" />
    </template>

    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElCollapseItem>
</template>
<style module="classes" lang="scss">
.root {
  --el-collapse-header-text-color: var(--color-black);
  --el-collapse-header-font-size: 14px;
  padding: 0 16px;
  text-align: left;

  :global(.el-collapse-item__header) {
    font-weight: 800 !important;
  }
}
</style>