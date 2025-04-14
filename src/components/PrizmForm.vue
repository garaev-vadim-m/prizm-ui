<script setup lang="ts">
import { type ElForm, type FormEmits } from 'element-plus';

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
</script>
<template>
  <ElForm v-bind="props">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElForm>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
