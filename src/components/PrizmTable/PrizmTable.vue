<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTable
 */

import { ElTable } from "element-plus";
import "element-plus/es/components/table/style/css";
import { useCssModule, useTemplateRef } from "vue";

type ElTableProps = InstanceType<typeof ElTable>["$props"];

type PickedProps = Pick<
  ElTableProps,
  | "data"
  | "size"
  | "maxHeight"
  | "className"
  | "scrollbarAlwaysOn"
  | "load"
  | "border"
  | "cellClassName"
  | "headerCellClassName"
  | "headerRowClassName"
  | "treeProps"
  | "cellStyle"
  | "fit"
  | "tableLayout"
  | "onScroll"
  | "rowClassName"
  | "flexible"
  | "onCell-click"
  | "onRow-click"
  | "emptyText"
  | "showSummary"
  | "showOverflowTooltip"
  | "highlightCurrentRow"
  | "defaultSort"
>;

type Slots = {
  default?: unknown;
  append?: unknown;
  empty?: unknown;
};

type Props = {
  data?: PickedProps["data"];
  size?: PickedProps["size"];
  maxHeight?: PickedProps["maxHeight"];
  className?: PickedProps["className"];
  scrollbarAlwaysOn?: PickedProps["scrollbarAlwaysOn"];
  border?: PickedProps["border"];
  cellClassName?: PickedProps["cellClassName"];
  headerCellClassName?: PickedProps["headerCellClassName"];
  headerRowClassName?: PickedProps["headerRowClassName"];
  treeProps?: PickedProps["treeProps"];
  cellStyle?: PickedProps["cellStyle"];
  fit?: PickedProps["fit"];
  tableLayout?: PickedProps["tableLayout"];
  flexible?: PickedProps["flexible"];
  emptyText?: PickedProps["emptyText"];
  showSummary?: PickedProps["showSummary"];
  rowClassName?: PickedProps["rowClassName"];
  showOverflowTooltip?: PickedProps["showOverflowTooltip"];
  highlightCurrentRow?: PickedProps["highlightCurrentRow"];
  defaultSort?: PickedProps["defaultSort"];

  onLoad?: PickedProps["load"];
  onCellClick?: PickedProps["onCell-click"];
  onRowClick?: PickedProps["onRow-click"];
  onScroll?: PickedProps["onScroll"];
};

const baseTableRef = useTemplateRef("baseTableRef");

const props = withDefaults(defineProps<Props>(), {
  emptyText: "Нет данных",
  scrollbarAlwaysOn: true,
  fit: true,
  border: true,
  tableLayout: "fixed",
});

const slots = defineSlots<Slots>();

const classes = useCssModule("classes");

defineExpose({
  baseTableRef,
});
</script>
<template>
  <ElTable
    ref="baseTableRef"
    v-bind="props"
    :class="[classes.root]"
    :header-cell-class-name="classes.root_header"
  >
    <template v-if="slots.default" #default>
      <slot />
    </template>

    <template v-if="slots.append" #append>
      <slot name="append" />
    </template>

    <template v-if="slots.empty" #empty>
      <slot name="empty" />
    </template>
  </ElTable>
</template>
<style module="classes" lang="scss">
.root {
  --el-table-text-color: var(--el-text-color-regular);
  --el-table-header-text-color: var(--el-text-color-secondary);
  --el-table-current-row-bg-color: var(--el-color-primary-light-9);
  --el-table-header-bg-color: var(--color-light-gray);
  --el-table-fixed-box-shadow: 2px 0 4px 0 rgba(191, 198, 215, 0.5);

  color: var(--color-dark-gray);
  font-weight: 400;
  font-size: 14px;

  // Стили для иконок сортировки
  :global {
    .sort-caret.ascending {
      border-bottom-color: var(--color-gray);
    }

    .sort-caret.descending {
      border-top-color: var(--color-gray);
    }

    .ascending .sort-caret.ascending {
      border-bottom-color: var(--color-dark);
    }

    .descending .sort-caret.descending {
      border-top-color: var(--color-dark);
    }

    .el-table .sort-column {
      background-color: transparent;
    }

    .el-table .sort-column .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.root :global(.el-table-fixed-column--left) {
  box-shadow: 2px 0 4px 0 rgba(191, 198, 215, 0.5);
}

.root_header {
  font-weight: 600;
  font-size: 12px;
  color: var(--color-dark-gray);
  height: 32px;

  :global(.cell) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
