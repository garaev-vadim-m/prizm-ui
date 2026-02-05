<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElForm
 */
import { ElForm } from "element-plus";
import { useTemplateRef } from "vue";
import type PrizmFormItem from "./PrizmFormItem.vue";
import "element-plus/es/components/form/style/css";

type ElFormProps = InstanceType<typeof ElForm>["$props"];

type PickedProps = Pick<
  ElFormProps,
  | "disabled"
  | "statusIcon"
  | "model"
  | "requireAsteriskPosition"
  | "labelPosition"
  | "onValidate"
  | "validateOnRuleChange"
  | "labelWidth"
  | "inline"
  | "rules"
  | "size"
  | "scrollToError"
  | "hideRequiredAsterisk"
  | "showMessage"
>;

type Props = {
  disabled?: PickedProps["disabled"];
  statusIcon?: PickedProps["statusIcon"];
  labelPosition?: PickedProps["labelPosition"];
  requireAsteriskPosition?: PickedProps["requireAsteriskPosition"];
  model?: PickedProps["model"];
  validateOnRuleChange?: PickedProps["validateOnRuleChange"];
  labelWidth?: PickedProps["labelWidth"];
  inline?: PickedProps["inline"];
  rules?: PickedProps["rules"];
  size?: PickedProps["size"];
  scrollToError?: PickedProps["scrollToError"];
  hideRequiredAsterisk?: PickedProps["hideRequiredAsterisk"];
  showMessage?: PickedProps["showMessage"];
  onValidate?: PickedProps["onValidate"];
};

type Slots = {
  default: typeof PrizmFormItem;
};

const props = withDefaults(defineProps<Props>(), {
  labelPosition: "top",
  requireAsteriskPosition: "right",
  labelWidth: "auto",
  size: "large",
  scrollToError: false,
  hideRequiredAsterisk: false,
  showMessage: true,
  validateOnRuleChange: true,
});
const slots = defineSlots<Slots>();

const baseFormRef = useTemplateRef("baseFormRef");

defineExpose({
  baseFormRef,
});
</script>
<template>
  <ElForm v-bind="props" ref="baseFormRef" :class="[classes.root]">
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElForm>
</template>
<style module="classes" lang="scss">
.root {
}
</style>