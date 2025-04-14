<script setup lang="ts">
import { type ElForm, type FormEmits } from 'element-plus';
import { useTemplateRef } from 'vue';

type ElFormProps = InstanceType<typeof ElForm>['$props'];

type PickedProps = Pick<ElFormProps, 'disabled' | 'statusIcon' | 'model' | 'requireAsteriskPosition' | 'labelPosition'>;

type Props = {
  disabled?: PickedProps['disabled'];
  statusIcon?: PickedProps['statusIcon'];
  labelPosition?: PickedProps['labelPosition'];
  requireAsteriskPosition?: PickedProps['requireAsteriskPosition'];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), { labelPosition: 'top', requireAsteriskPosition: 'right' });
const slots = defineSlots<Slots>();
defineEmits<FormEmits>();

const baseFormRef = useTemplateRef('baseFormRef');

defineExpose({
  baseFormRef,
});
</script>
<template>
  <ElForm v-bind="props" ref="baseFormRef" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElForm>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
