<script setup lang="ts">
import { ElDropdown } from 'element-plus';
import 'element-plus/es/components/dropdown/style/css';

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

  onClick?: PickedProps['onClick'];
  'onVisible-change'?: PickedProps['onVisible-change'];
  onCommand?: PickedProps['onCommand'];
};

type Slots = {
  default?: unknown;
  dropdown?: unknown;
};

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
  placement: 'top',
  trigger: 'click',
  type: 'default',
});

const slots = defineSlots<Slots>();
</script>
<template>
  <ElDropdown v-bind="props" :class="[classes.root]">
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
  --el-button-border-color: var(--color-dark-gray);
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
