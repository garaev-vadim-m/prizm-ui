<script setup lang="ts">
import { type DropdownInstance, ElDropdown } from 'element-plus';
import 'element-plus/es/components/dropdown/style/css';
import { ref, useTemplateRef } from 'vue';

type ElDropdownProps = InstanceType<typeof ElDropdown>['$props'];

type PickedProps = Pick<
  ElDropdownProps,
  | 'type'
  | 'effect'
  | 'disabled'
  | 'trigger'
  | 'loop'
  | 'maxHeight'
  | 'splitButton'
  | 'onClick'
  | 'size'
  | 'placement'
  | 'triggerKeys'
  | 'onVisible-change'
  | 'onCommand'
>;

type Props = {
  type?: PickedProps['type'];
  effect?: PickedProps['effect'];
  disabled?: PickedProps['disabled'];
  trigger?: PickedProps['trigger'];
  loop?: PickedProps['loop'];
  maxHeight?: PickedProps['maxHeight'];
  splitButton?: PickedProps['splitButton'];
  size?: 'large' | 'default' | 'small';
  placement?: PickedProps['placement'];
  triggerKeys?: PickedProps['triggerKeys'];
  openList?: boolean;

  onClick?: PickedProps['onClick'];
  'onVisible-change'?: PickedProps['onVisible-change'];
  onCommand?: PickedProps['onCommand'];

  onButtonDropDown?: typeof openDropdown;
};

type Slots = {
  default?: unknown;
  dropdown?: unknown;
};

const baseDropdownRef = useTemplateRef<DropdownInstance>('baseDropdownRef');

function openDropdown() {
  if (!baseDropdownRef.value || !props.splitButton || !props.openList) return;
  return baseDropdownRef.value.handleOpen();
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
  placement: 'top',
  trigger: 'click',
  type: 'default',
  openList: false,
});

const slots = defineSlots<Slots>();

defineExpose({
  baseDropdownRef,
});
</script>
<template>
  <ElDropdown ref="baseDropdownRef" v-bind="props" :class="[classes.root]" @click="openDropdown">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #dropdown v-if="slots.dropdown">
      <slot name="dropdown" />
    </template>
  </ElDropdown>
</template>
<style module="classes" lang="scss">
.root {
  --el-border-radius-base: var(--border-radius);
}

.root :global(.el-button) {
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
}

.root {
  :global(.el-dropdown__caret-button.el-button:before) {
    background: var(--color-dark-gray);
  }
}
</style>
