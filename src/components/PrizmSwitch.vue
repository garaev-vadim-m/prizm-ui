<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElSwitch
 */

import { ElSwitch, type SwitchEmits } from "element-plus";
import "element-plus/es/components/switch/style/css";
import { useCssModule, useTemplateRef } from "vue";

type ElSwitchProps = InstanceType<typeof ElSwitch>["$props"];

type PickedProps = Pick<
  ElSwitchProps,
  | "disabled"
  | "size"
  | "width"
  | "activeActionIcon"
  | "activeIcon"
  | "activeText"
  | "id"
  | "activeValue"
  | "inactiveIcon"
  | "inactiveActionIcon"
  | "inlinePrompt"
  | "inactiveText"
  | "inactiveValue"
  | "name"
  | "validateEvent"
  | "beforeChange"
  | "loading"
>;

type Props = {
  disabled?: PickedProps["disabled"];
  size?: PickedProps["size"];
  width?: PickedProps["width"];
  inlinePrompt?: PickedProps["inlinePrompt"];
  activeIcon?: PickedProps["activeIcon"];
  inactiveIcon?: PickedProps["inactiveIcon"];
  activeText?: PickedProps["activeText"];
  inactiveText?: PickedProps["inactiveText"];
  activeValue?: PickedProps["activeValue"];
  inactiveValue?: PickedProps["inactiveValue"];
  name?: PickedProps["name"];
  validateEvent?: PickedProps["validateEvent"];
  onBeforeChange?: PickedProps["beforeChange"];
  loading?: PickedProps["loading"];
  id?: PickedProps["id"];

  onChange?: SwitchEmits["change"];
  onInput?: SwitchEmits["input"];
};

const modelValue = defineModel<boolean | string | number>({
  default: false,
});

const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

const baseSwitchRef = useTemplateRef("baseSwitchRef");
const classes = useCssModule("classes");

defineExpose({
  baseSwitchRef,
});
</script>
<template>
  <ElSwitch
    v-bind="props"
    v-model="modelValue"
    ref="baseSwitchRef"
    :class="[classes.root]"
  />
</template>
<style module="classes" lang="scss">
.root {
}
</style>
