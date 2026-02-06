<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElRadioButton
 */

import { ElRadioButton } from "element-plus";
import "element-plus/es/components/radio-button/style/css";
import { useCssModule, type PropType } from "vue";

type ElRadioProps = InstanceType<typeof ElRadioButton>["$props"];
type PickedProps = Pick<ElRadioProps, "disabled" | "label" | "name" | "value">;

type Props = {
  disabled?: PickedProps["disabled"];
  label?: PickedProps["label"];
  name?: PickedProps["name"];
  value?: PickedProps["value"];
};

type Slots = {
  default?: unknown;
};

const props = defineProps<Props>();

const modelValue = defineModel({
  type: String as PropType<string | number | boolean>,
  required: false,
  default: "",
});

const classes = useCssModule("classes"); 
const slots = defineSlots<Slots>();
</script>
<template>
  <ElRadioButton v-bind="props" v-model="modelValue" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElRadioButton>
</template>
<style module="classes" lang="scss">
.root {
  --el-border-radius-base: 2px;
}
</style>
