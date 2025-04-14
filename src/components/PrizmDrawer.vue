<script setup lang="ts">
import { ElDrawer, type DrawerProps } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/drawer/style/css';

const modelValue = defineModel<boolean>({
  required: true,
  default: false,
});

const baseDrawerRef = useTemplateRef('baseDrawerRef');

type Slots = {
  default?: unknown;
};

type Emits = {
  (event: 'open'): boolean;
  (event: 'opened'): boolean;
  (event: 'close'): boolean;
  (event: 'closed'): boolean;
  (event: 'openAutoFocus'): boolean;
  (event: 'closeAutoFocus'): boolean;
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
};
const props = defineProps<Props>();
const slots = defineSlots<Slots>();
defineEmits<Emits>();

defineExpose({
  baseDrawerRef,
});
</script>
<template>
  <ElDrawer v-bind="props" ref="baseDrawerRef" v-model="modelValue">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElDrawer>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
