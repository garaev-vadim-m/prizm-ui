<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElCollapse
 */

import {
  ElCollapse,
  type CollapseProps,
  type CollapseActiveName,
  type CollapseModelValue,
} from "element-plus";
import { useTemplateRef } from "vue";
import "element-plus/es/components/collapse/style/css";

type Slots = {
  default?: unknown;
};

type Props = {
  accordion?: CollapseProps["accordion"];
  
  // Добавляем остальные пропсы из CollapseProps
  modelValue?: CollapseProps["modelValue"];
  
  onChange?: (value: CollapseModelValue) => any;
};

const modelValue = defineModel<CollapseModelValue>();
const baseCollapseRef = useTemplateRef("baseCollapseRef");
const slots = defineSlots<Slots>();
const props = defineProps<Props>();

defineExpose({
  baseCollapseRef,
});
</script>
<template>
  <ElCollapse
    v-bind="props"
    ref="baseCollapseRef"
    v-model="modelValue"
    :class="[classes.root]"
  >
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElCollapse>
</template>
<style module="classes" lang="scss">
.root {
  width: 100%;
}
</style>