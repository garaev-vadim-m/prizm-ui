<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElCheckboxGroup
 */

import { ElCheckboxGroup } from "element-plus";
import { useCssModule, useTemplateRef } from "vue";
import "element-plus/es/components/checkbox-group/style/css";

type Slots = {
  default?: unknown;
};

type ElCheckboxGroupProps = InstanceType<typeof ElCheckboxGroup>["$props"];

type PickedProps = Pick<
  ElCheckboxGroupProps,
  "max" | "fill" | "disabled" | "min" | "textColor" | "onChange" | "size"
>;

export type Props = {
  max?: PickedProps["max"];
  fill?: PickedProps["fill"];
  disabled?: PickedProps["disabled"];
  min?: PickedProps["min"];
  textColor?: PickedProps["textColor"];
  size?: PickedProps["size"];

  onChange?: PickedProps["onChange"];
};

const checkboxGroupRef = useTemplateRef("checkboxGroupRef");
const slots = defineSlots<Slots>();
const modelValue = defineModel<string[] | number[]>({
  required: true,
});
const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

const classes = useCssModule("classes"); 

defineExpose({
  checkboxGroupRef,
});
</script>
<template>
  <ElCheckboxGroup
    ref="checkboxGroupRef"
    v-bind="props"
    v-model="modelValue"
    :class="[classes.root]"
  >
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElCheckboxGroup>
</template>
<style module="classes" lang="scss">
.root {
}
</style>