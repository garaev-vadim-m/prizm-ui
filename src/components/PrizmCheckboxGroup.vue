<script setup lang="ts">
import { ElCheckboxGroup } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/checkbox-group/style/css';

type Slots = {
  default?: unknown;
};

type ElCheckboxGroupProps = InstanceType<typeof ElCheckboxGroup>['$props'];

type PickedProps = Pick<
  ElCheckboxGroupProps,
  'class' | 'max' | 'fill' | 'disabled' | 'min' | 'modelValue' | 'textColor'
>;

export type Props = {
  class?: PickedProps['class'];
  max?: PickedProps['max'];
  fill?: PickedProps['fill'];
  disabled?: PickedProps['disabled'];
  min?: PickedProps['min'];
  textColor?: PickedProps['textColor'];
};

const checkboxGroupRef = useTemplateRef('checkboxGroupRef');
const slots = defineSlots<Slots>();
const modelValue = defineModel<string[] | number[]>();
const props = defineProps<Props>();

defineExpose({
  checkboxGroupRef,
});
</script>
<template>
  <ElCheckboxGroup ref="checkboxGroupRef" v-bind="props" v-model="modelValue">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElCheckboxGroup>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
