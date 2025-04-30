<script setup lang="ts">
import { ElTable } from 'element-plus';
import 'element-plus/es/components/table/style/css';

type ElTableProps = InstanceType<typeof ElTable>['$props'];

type PickedProps = Pick<
  ElTableProps,
  | 'data'
  | 'size'
  | 'maxHeight'
  | 'className'
  | 'scrollbarAlwaysOn'
  | 'load'
  | 'border'
  | 'cellClassName'
  | 'headerCellClassName'
  | 'headerRowClassName'
  | 'treeProps'
  | 'cellStyle'
  | 'fit'
  | 'tableLayout'
  | 'onScroll'
  | 'allowDragLastColumn'
  | 'flexible'
  | 'onCell-click'
  | 'onRow-click'
  | 'emptyText'
  | 'showSummary'
>;

type Slots = {
  default?: unknown;
  append?: unknown;
  empty?: unknown;
};

type Props = {
  data?: PickedProps['data'];
  size?: PickedProps['size'];
  maxHeight?: PickedProps['maxHeight'];
  className?: PickedProps['className'];
  scrollbarAlwaysOn?: PickedProps['scrollbarAlwaysOn'];
  border?: PickedProps['border'];
  cellClassName?: PickedProps['cellClassName'];
  headerCellClassName?: PickedProps['headerCellClassName'];
  headerRowClassName?: PickedProps['headerRowClassName'];
  treeProps?: PickedProps['treeProps'];
  cellStyle?: PickedProps['cellStyle'];
  fit?: PickedProps['fit'];
  tableLayout?: PickedProps['tableLayout'];
  allowDragLastColumn?: PickedProps['allowDragLastColumn'];
  flexible?: PickedProps['flexible'];
  emptyText?: PickedProps['emptyText'];
  showSummary?: PickedProps['showSummary'];

  onLoad?: PickedProps['load'];
  onCellClick?: PickedProps['onCell-click'];
  onRowClick?: PickedProps['onRow-click'];
  onScroll?: PickedProps['onScroll'];
};

const props = withDefaults(defineProps<Props>(), {
  emptyText: 'Нет данных',
  scrollbarAlwaysOn: true,
  fit: true,
  border: true,
  tableLayout: 'fixed',
});

const slots = defineSlots<Slots>();
</script>
<template>
  <ElTable v-bind="props" :class="[classes.root]" :header-cell-class-name="classes.root_header">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #append v-if="slots.append">
      <slot name="append" />
    </template>

    <template #empty v-if="slots.empty">
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
}

.root :global(.el-table-fixed-column--left) {
  box-shadow: 2px 0 4px 0 rgba(191, 198, 215, 0.5);
}

.root :global(.el-table__header-wrapper) {
  z-index: 5;
  box-shadow: 2px 2px 4px 0 rgba(191, 198, 215, 0.5);
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
