<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDrawer
 */

import { ElDrawer, type DrawerProps } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/drawer/style/css';
import { PrizmButton } from '../components';

const modelValue = defineModel<boolean>({
  required: true,
  default: false,
});

const baseDrawerRef = useTemplateRef('baseDrawerRef');

type Slots = {
  default?: unknown;
  header?: unknown;
  footer?: unknown;
};

type PickedProps = Pick<
  DrawerProps,
  | 'closeIcon'
  | 'appendToBody'
  | 'center'
  | 'width'
  | 'withHeader'
  | 'showClose'
  | 'fullscreen'
  | 'beforeClose'
  | 'title'
  | 'size'
  | 'destroyOnClose'
  | 'draggable'
  | 'alignCenter'
  | 'lockScroll'
  | 'headerClass'
>;

type Props = {
  closeIcon?: PickedProps['closeIcon'];
  appendToBody?: PickedProps['appendToBody'];
  center?: PickedProps['center'];
  width?: PickedProps['width'];
  withHeader?: PickedProps['withHeader'];
  showClose?: PickedProps['showClose'];
  fullscreen?: PickedProps['fullscreen'];
  beforeClose?: PickedProps['beforeClose'];
  title?: PickedProps['title'];
  size?: PickedProps['size'];
  destroyOnClose?: PickedProps['destroyOnClose'];
  draggable?: PickedProps['draggable'];
  alignCenter?: PickedProps['alignCenter'];
  lockScroll?: PickedProps['lockScroll'];
  headerClass?: PickedProps['headerClass'];
  defaultFooter?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmDisabled?: boolean;

  onConfirmButton?: () => unknown;
  onCancelButton?: () => unknown;

  onOpen?: () => boolean;
  onOpened?: () => boolean;
  onClose?: () => boolean;
  onClosed?: () => boolean;
  onOpenAutoFocus?: () => boolean;
  onCloseAutoFocus?: () => boolean;
};
const props = withDefaults(defineProps<Props>(), {
  title: 'Default title',
  showClose: true,
  appendToBody: true,
  withHeader: true,
  defaultFooter: true,
  confirmButtonText: 'Сохранить',
  cancelButtonText: 'Отмена',
  confirmDisabled: false,
  lockScroll: true,

  onConfirmButton: () => console.log('Click onConfirmButton'),
  onCancelButton: () => console.log('Click onCancelButton'),
});
const slots = defineSlots<Slots>();

defineExpose({
  baseDrawerRef,
});
</script>
<template>
  <ElDrawer
    v-bind="props"
    ref="baseDrawerRef"
    v-model="modelValue"
    :class="[classes.root]"
    :headerClass="classes.headerTitle">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #header v-if="slots.header">
      <slot name="header" />
    </template>

    <template #footer v-if="slots.footer || defaultFooter">
      <slot name="footer">
        <div :class="classes.footer">
          <PrizmButton type="primary" :disabled="confirmDisabled" @click="onConfirmButton">{{
            confirmButtonText
          }}</PrizmButton>

          <PrizmButton @click="onCancelButton">{{ cancelButtonText }}</PrizmButton>
        </div>
      </slot>
    </template>
  </ElDrawer>
</template>
<style module="classes" lang="scss">
.root {
}

.root :global(.el-drawer__footer) {
  padding: 0;
}
.headerTitle {
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: var(--color-black);
  margin-bottom: 0;
  padding: 16px;
  border: 1px solid var(--color-thin-gray, #e0e3e7);
}

.footer {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-top: 1px solid var(--color-thin-gray, #e0e3e7);
  padding: 16px;
}
</style>
