<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDialog
 */

import { ElDialog, type DialogEmits, type DialogProps } from 'element-plus';
import { computed, useCssModule, useTemplateRef } from 'vue';
import 'element-plus/es/components/dialog/style/css';

type Slots = {
  header?: unknown;
  default?: unknown;
  footer?: unknown;
  title?: unknown;
};

const slots = defineSlots<Slots>();
const props = withDefaults(
  defineProps<
    DialogProps & {
      varticalFooter?: boolean;

      onOpen?: DialogEmits['open'];
      onOpened?: DialogEmits['opened'];
      onClose?: DialogEmits['close'];
      onClosed?: DialogEmits['closed'];
      onOpenAutoFocus?: DialogEmits['openAutoFocus'];
      onCloseAutoFocus?: DialogEmits['closeAutoFocus'];
    }
  >(),
  { varticalFooter: true, center: true },
);

const baseDialogRef = useTemplateRef('baseDialogRef');

const style = useCssModule('classes');

const handleStyleFooter = computed(() => (props.varticalFooter ? style.dialog_footer : ''));

defineExpose({
  baseDialogRef,
});
</script>
<template>
  <ElDialog ref="baseDialogRef" v-bind="props" :class="[classes.root, handleStyleFooter]">
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
  --el-dialog-border-radius: 0;
  --el-dialog-padding-primary: 0;
  --el-dialog-title-font-size: 14px;

  --el-dialog-font-size: 14px;
  --el-dialog-title-color: var(--color-black);
  --el-dialog-font-line-height: 16px;

  --el-dialog-content-color: var(--color-dark);
  --el-dialog-content-font-size: 14px;
}

.root :global(.el-dialog__footer) {
  padding: 16px;
  border-top: 1px solid var(--color-thin-gray);
  display: flex;
  gap: 8px;
}

.dialog_footer :global(.el-dialog__footer) {
  flex-direction: column;
}

.root :global(.el-dialog__header) {
  border-bottom: 1px solid var(--color-thin-gray);
  font-weight: 600;
  padding: 16px;
}

.root :global(.el-dialog__body) {
  padding: 16px;
}
</style>
