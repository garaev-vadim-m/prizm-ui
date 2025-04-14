<script setup lang="ts">
import { ElDialog, type DialogEmits, type DialogProps } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/dialog/style/css';

type Slots = {
  header?: unknown;
  default?: unknown;
  footer?: unknown;
  title?: unknown;
};

const slots = defineSlots<Slots>();
const props = defineProps<DialogProps>();
const baseDialogRef = useTemplateRef('baseDialogRef');
defineEmits<DialogEmits>();

defineExpose({
  baseDialogRef,
});
</script>
<template>
  <ElDialog ref="baseDialogRef" v-bind="props" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #title v-if="slots.title">
      <slot name="title" />
    </template>

    <template #footer v-if="slots.footer">
      <slot name="footer" />
    </template>

    <template #header v-if="slots.header">
      <slot name="header" />
    </template>
  </ElDialog>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
