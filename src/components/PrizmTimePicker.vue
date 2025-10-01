<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTimePicker
 */

import { ElTimePicker } from "element-plus";
import { useTemplateRef } from "vue";
import "element-plus/es/components/time-picker/style/css";
import { IconClock } from "@/shared/icon";

const modelValue = defineModel<string | number>({
  required: true,
});

const baseTimePickerRef = useTemplateRef("baseTimePickerRef");

type ElDatePickerProps = InstanceType<typeof ElTimePicker>["$props"];

type PickedProps = Pick<
  ElDatePickerProps,
  | "type"
  | "cellClassName"
  | "clearable"
  | "disabled"
  | "arrowControl"
  | "isRange"
  | "prefixIcon"
  | "clearIcon"
  | "format"
  | "valueFormat"
  | "name"
  | "placeholder"
  | "size"
  | "rangeSeparator"
  | "timeFormat"
  | "unlinkPanels"
>;

type Props = {
  type?: PickedProps["type"];
  cellClassName?: PickedProps["cellClassName"];
  clearable?: PickedProps["clearable"];
  disabled?: PickedProps["disabled"];
  arrowControl?: PickedProps["arrowControl"];
  isRange?: PickedProps["isRange"];
  prefixIcon?: PickedProps["prefixIcon"];
  clearIcon?: PickedProps["clearIcon"];
  format?: PickedProps["format"];
  valueFormat?: PickedProps["valueFormat"];
  name?: PickedProps["name"];
  placeholder?: PickedProps["placeholder"];
  size?: PickedProps["size"];
  rangeSeparator?: PickedProps["rangeSeparator"];
  timeFormat?: PickedProps["timeFormat"];
  unlinkPanels?: PickedProps["unlinkPanels"];

  onVisibility?: (visibility: boolean) => void;
  onChange?: (
    val:
      | number
      | string
      | Date
      | [number, number]
      | [string, string]
      | [Date, Date],
  ) => void;
  onClear?: () => void;
};

const props = withDefaults(defineProps<Props>(), {
  clearable: false,
  size: "large",
  format: "hh:mm:ss",
  timeFormat: "hh:mm:ss",
  valueFormat: "hh-mm-ss",
  prefixIcon: IconClock,
});

type Slots = {
  default?: unknown;
};

const slots = defineSlots<Slots>();

defineExpose({
  baseTimePickerRef,
});
</script>
<template>
  <ElTimePicker
    v-bind="props"
    ref="baseTimePickerRef"
    v-model="modelValue"
    :class="classes.root"
  >
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElTimePicker>
</template>
<style module="classes" lang="scss">
.root {
  --el-input-border-radius: var(--border-radius);
  --el-border-radius-base: var(--border-radius);
  --el-input-bg-color: #fff;
  --el-fill-color-blank: #fff;
  --el-input-border-color: var(--color-gray);

  &:global(.el-input.is-disabled) {
    --el-disabled-bg-color: var(--color-light-gray);
    --el-disabled-border-color: var(--color-gray);
    opacity: 50%;
  }

  :global(.el-date-editor) {
    --el-date-editor-width: 100% !important;
  }
}
</style>
