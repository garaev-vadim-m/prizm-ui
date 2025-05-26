<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDialog
 */

import { ElDialog, type DialogEmits, type DialogProps } from 'element-plus';
import { computed, useCssModule, useTemplateRef } from 'vue';
import 'element-plus/es/components/dialog/style/css';
import PrizmButton from './PrizmButton.vue';

type Slots = {
  header?: unknown;
  default?: unknown;
  footer?: unknown;
  title?: unknown;
};

const modelValue = defineModel({
  required: true,
  type: Boolean,
});
const slots = defineSlots<Slots>();
const props = withDefaults(
  defineProps<{
    title?: DialogProps['title'];
    center?: DialogProps['center'];
    width?: DialogProps['width'];
    fullscreen?: DialogProps['fullscreen'];
    appendToBody?: DialogProps['appendToBody'];
    lockScroll?: DialogProps['lockScroll'];
    alignCenter?: DialogProps['alignCenter'];
    varticalFooter?: boolean;
    defaultFooter?: boolean;
    confirmDisabled?: boolean;
    cancelDisabled?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;

    onBeforeClose?: DialogProps['beforeClose'];
    onOpen?: DialogEmits['open'];
    onOpened?: DialogEmits['opened'];
    onClose?: DialogEmits['close'];
    onClosed?: DialogEmits['closed'];
    onOpenAutoFocus?: DialogEmits['openAutoFocus'];
    onCloseAutoFocus?: DialogEmits['closeAutoFocus'];
    onConfirmButton?: () => unknown;
    onCancelButton?: () => unknown;
  }>(),
  {
    varticalFooter: true,
    alignCenter: true,
    lockScroll: true,
    defaultFooter: true,
    confirmDisabled: false,
    cancelDisabled: false,
    confirmButtonText: 'Сохранить',
    cancelButtonText: 'Отмена',
    onConfirmButton: () => console.log('Click onConfirmButton'),
    onCancelButton: () => console.log('Click onCancelButton'),
  },
);

const baseDialogRef = useTemplateRef('baseDialogRef');

const style = useCssModule('classes');

const handleStyleFooter = computed(() => (props.varticalFooter ? style.root_footerVertical : ''));

defineExpose({
  baseDialogRef,
});
</script>
<template>
  <ElDialog
    ref="baseDialogRef"
    v-model="modelValue"
    v-bind="props"
    :class="[classes.root]"
    :header-class="classes.root_header"
    :footer-class="[handleStyleFooter, classes.root_footer].join(' ')"
    :body-class="classes.root_body">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #title v-if="slots.title">
      <slot name="title" />
    </template>

    <template #footer v-if="slots.footer || defaultFooter">
      <slot name="footer">
        <PrizmButton type="primary" :disabled="confirmDisabled" @click="onConfirmButton">{{
          confirmButtonText
        }}</PrizmButton>

        <PrizmButton :disabled="cancelDisabled" @click="onCancelButton">{{ cancelButtonText }}</PrizmButton>
      </slot>
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

.root_footer {
  padding: 16px;
  border-top: 1px solid var(--color-thin-gray);
  display: flex;
  gap: 8px;
}

.root_footerVertical {
  flex-direction: column;
  gap: 16px;
}

.root_header {
  border-bottom: 1px solid var(--color-thin-gray);
  font-weight: 600;
  padding: 16px;
}

.root_body {
  padding: 16px;
}
</style>
