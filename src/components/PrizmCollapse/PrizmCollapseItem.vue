<script setup lang="ts">
import { ElCollapseItem, type CollapseItemProps } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/collapse-item/style/css';
import { IconDubleArrow } from '@/shared/icon';

type Slots = {
  default?: unknown;
  title?: unknown;
  icon?: unknown;
};
const baseCollapseItemRef = useTemplateRef('baseCollapseItemRef');
const slots = defineSlots<Slots>();

type Props = {
  title?: CollapseItemProps['title'];
  disabled?: CollapseItemProps['disabled'];
  icon?: CollapseItemProps['icon'];
  name?: CollapseItemProps['name'];
};

const props = withDefaults(defineProps<Props>(), {
  title: 'Default title',
  icon: IconDubleArrow,
});

defineExpose({
  baseCollapseItemRef,
});
</script>
<template>
  <ElCollapseItem v-bind="props" ref="baseCollapseItemRef" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #title v-if="slots.title">
      <slot name="title" />
    </template>

    <template #icon v-if="slots.icon">
      <slot name="icon" />
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

  :global(.el-collapse-item__arrow) {
    border-left: 1px solid var(--color-thin-gray);
    padding-left: 10px;
  }
}
</style>
