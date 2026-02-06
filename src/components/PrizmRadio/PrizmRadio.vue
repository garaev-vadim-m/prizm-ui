<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElRadio
 */

import { ElRadio } from "element-plus";
import "element-plus/es/components/radio/style/css";
import { useCssModule, type PropType } from "vue";

type ElRadioProps = InstanceType<typeof ElRadio>["$props"];
type PickedProps = Pick<
  ElRadioProps,
  "border" | "label" | "name" | "disabled" | "onChange" | "size" | "value"
>;

type Props = {
  border?: PickedProps["border"];
  label?: PickedProps["label"];
  name?: PickedProps["name"];
  disabled?: PickedProps["disabled"];
  size?: PickedProps["size"];

  onChange?: PickedProps["onChange"];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

const modelValue = defineModel({
  type: String as PropType<string | number | boolean>,
  required: false,
  default: "",
});

const classes = useCssModule("classes"); 

const slots = defineSlots<Slots>();
</script>
<template>
  <ElRadio v-bind="props" :class="[classes.root]" v-model="modelValue">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElRadio>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
