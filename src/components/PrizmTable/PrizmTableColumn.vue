<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTableColumn
 */

import { ElTableColumn } from "element-plus";
import "element-plus/es/components/table-column/style/css";
import { useCssModule } from "vue";

// Типизация пропсов ElTableColumn
type ElTableColumnProps = InstanceType<typeof ElTableColumn>["$props"];
type PickedProps = Pick<
  ElTableColumnProps,
  | "prop"
  | "label"
  | "width"
  | "sortable"
  | "fixed"
  | "className"
  | "align"
  | "resizable"
  | "columnKey"
  | "headerAlign"
  | "type"
  | "filterMethod"
  | "filters"
  | "filteredValue"
  | "filterPlacement"
  | "filterMultiple"
  | "index"
  | "formatter"
  | "selectable"
  | "reserveSelection"
  | "sortOrders"
  | "sortBy"
>;

type Props = {
  prop?: PickedProps["prop"];
  label?: PickedProps["label"];
  width?: PickedProps["width"];
  sortable?: PickedProps["sortable"];
  fixed?: PickedProps["fixed"];
  className?: PickedProps["className"];
  align?: PickedProps["align"];
  resizable?: PickedProps["resizable"];
  columnKey?: PickedProps["columnKey"];
  headerAlign?: PickedProps["headerAlign"];
  type?: PickedProps["type"];
  filters?: PickedProps["filters"];
  filteredValue?: PickedProps["filteredValue"];
  filterPlacement?: PickedProps["filterPlacement"];
  filterMultiple?: PickedProps["filterMultiple"];
  index?: PickedProps["index"];
  onFormatter?: PickedProps["formatter"];
  onSelectable?: PickedProps["selectable"];
  reserveSelection?: PickedProps["reserveSelection"];
  sortOrders?: PickedProps["sortOrders"];
  sortBy?: PickedProps["sortBy"];

  onFilterMethod?: PickedProps["filterMethod"];
};

const props = withDefaults(defineProps<Props>(), {
  resizable: false,
});

// Слоты: поддерживаем default и header
type Slots = {
  default?: (scope: { row: any; column: any; $index: number }) => any;
  header?: (scope: { column: any; $index: number }) => any;
};

const classes = useCssModule("classes");

const slots = defineSlots<Slots>();
</script>

<template>
  <ElTableColumn v-bind="props" :class="[classes.root]">
    <!-- header-слот -->
    <template v-if="slots.header" #header="slotProps">
      <slot name="header" v-bind="slotProps" />
    </template>

    <!-- default-слот -->
    <template v-if="slots.default" #default="slotProps">
      <slot name="default" v-bind="slotProps" />
    </template>
  </ElTableColumn>
</template>

<style module="classes" lang="scss">
.root {
}

:global(.el-table .caret-wrapper) {
  height: 24px;
}

:global(.el-table .sort-caret) {
  border: 0;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 22px;
    background-repeat: no-repeat;
  }
}

:global(.el-table .sort-caret.ascending) {
  &::before {
    background-image: url("@/shared/iconSvg/arrow_top.svg");
    top: 10px;
  }
}

:global(.el-table .sort-caret.descending) {
  &::before {
    background-image: url("@/shared/iconSvg/arrow_top.svg");
    top: -28px;
    left: 5px;
    rotate: 180deg;
  }
}
</style>
