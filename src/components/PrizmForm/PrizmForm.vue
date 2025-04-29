<script setup lang="ts">
import { ElForm } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/form/style/css';

type ElFormProps = InstanceType<typeof ElForm>['$props'];

type PickedProps = Pick<
  ElFormProps,
  | 'disabled'
  | 'statusIcon'
  | 'model'
  | 'requireAsteriskPosition'
  | 'labelPosition'
  | 'onValidate'
  | 'validateOnRuleChange'
>;

type Props = {
  disabled?: PickedProps['disabled'];
  statusIcon?: PickedProps['statusIcon'];
  labelPosition?: PickedProps['labelPosition'];
  requireAsteriskPosition?: PickedProps['requireAsteriskPosition'];
  model?: PickedProps['model'];
  validateOnRuleChange?: PickedProps['validateOnRuleChange'];

  onValidate?: PickedProps['onValidate'];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), { labelPosition: 'top', requireAsteriskPosition: 'right' });
const slots = defineSlots<Slots>();

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
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
