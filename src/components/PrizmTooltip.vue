<script setup lang="ts">
import { ElTooltip } from 'element-plus';
import 'element-plus/es/components/tooltip/style/css';
import { useTemplateRef } from 'vue';

type ElTooltipProps = InstanceType<typeof ElTooltip>['$props'];

type PickerProps = Pick<
  ElTooltipProps,
  'content' | 'trigger' | 'effect' | 'onContextmenu' | 'placement' | 'onBlur' | 'onClick' | 'onFocus'
>;

type Props = {
  content?: PickerProps['content'];
  trigger?: PickerProps['trigger'];
  effect?: PickerProps['effect'];
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end';
  onContextmenu?: PickerProps['onContextmenu'];
  onBlur?: PickerProps['onBlur'];
  onClick?: PickerProps['onClick'];
  onFocus?: PickerProps['onFocus'];
};

type Slots = {
  default?: unknown;
  content?: unknown;
};

const props = withDefaults(defineProps<Props>(), {
  effect: 'dark',
  placement: 'right',
});

const slots = defineSlots<Slots>();

const bseTooltipRef = useTemplateRef('bseTooltipRef');

defineExpose({
  bseTooltipRef,
});
</script>
<template>
  <ElTooltip v-bind="props" ref="bseTooltipRef" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #content v-if="slots.content">
      <slot name="content" />
    </template>
  </ElTooltip>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
