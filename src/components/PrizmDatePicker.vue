<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDatePicker
 */

import { ElDatePicker } from "element-plus";
import { useCssModule, useTemplateRef } from "vue";
import "element-plus/es/components/date-picker/style/css";
import { IconCalendar } from "@/shared/icon";

const modelValue = defineModel<string | number | [string, string]>({
  required: true,
});

const baseDatePickerRef = useTemplateRef("baseDatePickerRef");

type ElDatePickerProps = InstanceType<typeof ElDatePicker>["$props"];

type PickedProps = Pick<
  ElDatePickerProps,
  | "type"
  | "cellClassName"
  | "clearable"
  | "dateFormat"
  | "disabled"
  | "arrowControl"
  | "isRange"
  | "prefixIcon"
  | "clearIcon"
  | "format"
  | "valueFormat"
  | "name"
  | "rangeSeparator"
  | "placeholder"
  | "startPlaceholder"
  | "endPlaceholder"
  | "size"
  | "shortcuts"
  | "editable"
  | "readonly"
  | "disabledDate"
  | "defaultValue"
  | "defaultTime"
>;

type Props = {
  type?: PickedProps["type"];
  cellClassName?: PickedProps["cellClassName"];
  clearable?: PickedProps["clearable"];
  dateFormat?: PickedProps["dateFormat"];
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
  shortcuts?: PickedProps["shortcuts"];
  startPlaceholder?: PickedProps["startPlaceholder"];
  endPlaceholder?: PickedProps["endPlaceholder"];
  rangeSeparator?: PickedProps["rangeSeparator"];
  editable?: PickedProps["editable"];
  readonly?: PickedProps["readonly"];
  disabledDate?: PickedProps["disabledDate"];
  defaultValue?: PickedProps["defaultValue"];
  defaultTime?: PickedProps["defaultTime"];

  onVisibility?: (visibility: boolean) => void;
  onCalendarChange?: (val: [Date, null | Date]) => void;
  onClear?: () => void;
  onPanelChange?: (
    date: Date | [Date, Date],
    mode: "month" | "year",
    view?: string,
  ) => void;
};

const props = withDefaults(defineProps<Props>(), {
  clearable: false,
  size: "large",
  format: "DD.MM.YYYY",
  valueFormat: "YYYY-MM-DD",
  rangeSeparator: "—",
  prefixIcon: IconCalendar,
  editable: false,
  readonly: false,
});

type Slots = {
  default?: unknown;
  rangeSeparator?: unknown;
  prevMonth?: unknown;
  nextMonth?: unknown;
  prevYear?: unknown;
  nextYear?: unknown;
};

const slots = defineSlots<Slots>();
const classes = useCssModule("classes"); 
defineExpose({
  baseDatePickerRef,
});
</script>
<template>
  <ElDatePicker
    v-bind="props"
    ref="baseDatePickerRef"
    v-model="modelValue"
    :class="[classes.root]"
  >
    <template v-if="slots.default" #default>
      <slot />
    </template>

    <template v-if="slots.rangeSeparator" #rangeSeparator>
      <slot name="rangeSeparator" />
    </template>

    <template v-if="slots.prevMonth" #prevMonth>
      <slot name="prevMonth" />
    </template>

    <template v-if="slots.nextMonth" #nextMonth>
      <slot name="nextMonth" />
    </template>

    <template v-if="slots.prevYear" #prevYear>
      <slot name="prevYear" />
    </template>

    <template v-if="slots.nextYear" #nextYear>
      <slot name="nextYear" />
    </template>
  </ElDatePicker>
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