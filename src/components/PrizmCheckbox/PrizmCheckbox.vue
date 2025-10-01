<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElCheckbox
 */

import { ElCheckbox } from "element-plus";
import { useTemplateRef } from "vue";
import "element-plus/es/components/checkbox/style/css";

type Slots = {
  default?: unknown;
};

type ElCheckboxProps = InstanceType<typeof ElCheckbox>["$props"];

type PickedProps = Pick<
  ElCheckboxProps,
  | "name"
  | "disabled"
  | "falseValue"
  | "validateEvent"
  | "size"
  | "value"
  | "label"
  | "checked"
>;

type Props = {
  name?: PickedProps["name"];
  disabled?: PickedProps["disabled"];
  falseValue?: PickedProps["falseValue"];
  validateEvent?: PickedProps["validateEvent"];
  size?: PickedProps["size"];
  value?: PickedProps["value"];
  label?: PickedProps["label"];
  checked?: PickedProps["checked"];
};

const checkboxRef = useTemplateRef("checkboxRef");
const slots = defineSlots<Slots>();
const modelValue = defineModel<string | number | boolean>({
  required: true,
});
const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

defineExpose({
  checkboxRef,
});
</script>
<template>
  <ElCheckbox
    ref="checkboxRef"
    v-bind="props"
    v-model="modelValue"
    :class="[classes.root]"
  >
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElCheckbox>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
