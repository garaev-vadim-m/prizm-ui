<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElForm
 */
import { ElForm } from 'element-plus';
import { useTemplateRef } from 'vue';
import type PrizmFormItem from './PrizmFormItem.vue';
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
  | 'labelWidth'
  | 'inline'
>;

type Props = {
  disabled?: PickedProps['disabled'];
  statusIcon?: PickedProps['statusIcon'];
  labelPosition?: PickedProps['labelPosition'];
  requireAsteriskPosition?: PickedProps['requireAsteriskPosition'];
  model?: PickedProps['model'];
  validateOnRuleChange?: PickedProps['validateOnRuleChange'];
  labelWidth?: PickedProps['labelWidth'];
  inline?: PickedProps['inline'];

  onValidate?: PickedProps['onValidate'];
};

type Slots = {
  default: typeof PrizmFormItem;
};

const props = withDefaults(defineProps<Props>(), {
  labelPosition: 'top',
  requireAsteriskPosition: 'right',
  labelWidth: 'auto',
});
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
}
</style>
