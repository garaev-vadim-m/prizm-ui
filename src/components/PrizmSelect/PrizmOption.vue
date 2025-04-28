<script setup lang="ts">
import { ElOption } from 'element-plus';
import 'element-plus/es/components/option/style/css';
import { useTemplateRef } from 'vue';

type ElSelectProps = InstanceType<typeof ElOption>['$props'];
type PickedProps = Pick<ElSelectProps, 'value' | 'label' | 'disabled'>;

type Props = {
  value: PickedProps['value'];
  label?: PickedProps['label'];
  disabled?: PickedProps['disabled'];
  width?: 'auto' | string | number;
};

type Slots = {
  default?: unknown;
};

const baseOptionRef = useTemplateRef('baseOptionRef');

/**
 * @param {number | string | undefined} width
 * @return {string}
 */
function handleWidth(width: number | string | undefined): string {
  if (width === 'auto' || width === undefined || (typeof width === 'string' && !width.length)) return 'auto';
  if (typeof width === 'number') width = String(width);
  if (width.indexOf('px')) return `${width}px`;
  if (width.indexOf('%')) return `${width}%`;
  return `${width}px`;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
});

const style = {
  textAlign: 'left',
  overflow: 'initial',
  whiteSpace: 'initial',
  overflowWrap: 'break-word',
  height: 'auto',
  paddingTop: '10px',
  paddingBottom: '10px',
  width: handleWidth(props.width) || 'auto',
};

const slots = defineSlots<Slots>();

defineExpose({
  baseOptionRef,
});
</script>
<template>
  <ElOption ref="baseOptionRef" v-bind="props" :class="[classes.root]" :style="style">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElOption>
</template>
<style module="classes" lang="scss">
.root {
  * {
    font-weight: 400;
    color: var(--color-dark);
    font-size: 14px;
  }
}
</style>
