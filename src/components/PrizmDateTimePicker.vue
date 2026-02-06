<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDatePicker
 */

import { ElDatePicker } from "element-plus";
import { useTemplateRef, computed, useCssModule } from "vue";
import "element-plus/es/components/date-picker/style/css";
import { IconCalendar } from "@/shared/icon";

const modelValue = defineModel<string | number>({
  required: true,
});

const baseDateTimePickerRef = useTemplateRef("baseDateTimePickerRef");

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
  | "placeholder"
  | "size"
  | "timeFormat" // Добавлено
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
  timeFormat?: PickedProps["timeFormat"]; // Добавлено

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
  format: "DD.MM.YYYY HH:mm:ss", // Исправлен формат
  timeFormat: "HH:mm:ss", // Исправлен формат
  valueFormat: "YYYY-MM-DD HH:mm:ss", // Исправлен формат
  type: "datetime",
  prefixIcon: IconCalendar,
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
  baseDateTimePickerRef,
});
</script>

<template>
  <ElDatePicker
    v-bind="props"
    ref="baseDateTimePickerRef"
    v-model="modelValue"
    :class="classes.root"
  >
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #rangeSeparator v-if="slots.rangeSeparator">
      <slot name="rangeSeparator" />
    </template>

    <template #prevMonth v-if="slots.prevMonth">
      <slot name="prevMonth" />
    </template>

    <template #nextMonth v-if="slots.nextMonth">
      <slot name="nextMonth" />
    </template>

    <template #prevYear v-if="slots.prevYear">
      <slot name="prevYear" />
    </template>

    <template #nextYear v-if="slots.nextYear">
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