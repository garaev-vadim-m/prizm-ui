<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElButton
 */

import { ElButton } from 'element-plus';
import { computed, useCssModule, useTemplateRef } from 'vue';
import 'element-plus/es/components/button/style/css';

type ElementProps = InstanceType<typeof ElButton>['$props'];
type PickedProps = Pick<
  ElementProps,
  'disabled' | 'type' | 'size' | 'icon' | 'link' | 'plain' | 'dark' | 'plain' | 'onClick' | 'nativeType'
>;
export type ButtonProps = {
  type?: PickedProps['type'];
  disabled?: boolean;
  size?: PickedProps['size'];
  icon?: PickedProps['icon'];
  link?: PickedProps['link'];
  plain?: PickedProps['plain'];
  dark?: PickedProps['dark'];
  nativeType?: PickedProps['nativeType'];

  onClick?: PickedProps['onClick'];
};

type Slots = {
  default: unknown;
  loading?: unknown;
  icon?: unknown;
};

const slots = defineSlots<Slots>();
const style = useCssModule('classes');

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'large',
  plain: false,
  nativeType: 'button',
});

const handleOutline = computed(() => (props.plain ? style.outline : ''));
const baseButtonRef = useTemplateRef('baseButtonRef');

defineExpose({
  baseButtonRef,
});
</script>
<template>
  <ElButton ref="baseButtonRef" v-bind="props" :class="[classes.root, classes[type], handleOutline]">
    <template #icon v-if="slots.icon">
      <slot name="icon" />
    </template>

    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #loading v-if="slots.loading">
      <slot name="loading" />
    </template>
  </ElButton>
</template>
<style module="classes" lang="scss">
.root {
  border-radius: 2px;
  width: 100%;
}

.root + .root {
  margin-left: 0;
}

.default {
  --el-border-color: var(--color-dark-gray);
  --el-button-bg-color: #ffffff;

  --el-button-hover-bg-color: #ffffff;
  --el-button-hover-text-color: var(--color-dark-gray);
  --el-button-hover-border-color: var(--color-dark-gray);
}

.primary {
  --el-button-hover-bg-color: var(--color-primary-hover);
  --el-button-hover-border-color: var(--color-primary-hover);
}

.success {
  --el-button-hover-bg-color: var(--color-success-hover);
  --el-button-hover-border-color: var(--color-success-hover);
}
.warning {
  --el-button-hover-bg-color: var(--color-warning-hover);
  --el-button-hover-border-color: var(--color-warning-hover);
}

.danger {
  --el-button-hover-bg-color: var(--color-danger-hover);
  --el-button-hover-border-color: var(--color-danger-hover);
}

.outline {
  --el-button-bg-color: #ffffff;
}
</style>
