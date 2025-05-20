<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElRadioGroup
 */

import { ElRadioGroup } from 'element-plus';
import 'element-plus/es/components/radio-group/style/css';
import { type PropType } from 'vue';

type ElRadioProps = InstanceType<typeof ElRadioGroup>['$props'];
type PickedProps = Pick<ElRadioProps, 'disabled' | 'name' | 'onChange'>;

type Props = {
  disabled?: PickedProps['disabled'];
  name?: PickedProps['name'];

  onChange?: PickedProps['onChange'];
};

type Slots = {
  default?: unknown;
};

const props = defineProps<Props>();

const modelValue = defineModel({
  type: String as PropType<string | number | boolean>,
  required: true,
  default: '',
});

const slots = defineSlots<Slots>();
</script>
<template>
  <ElRadioGroup v-bind="props" v-model="modelValue">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElRadioGroup>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
