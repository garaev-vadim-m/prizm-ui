<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTableColumn
 */

import { ElTableColumn } from 'element-plus';
import 'element-plus/es/components/table-column/style/css';

type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
type PickedProps = Pick<
  ElTableColumnProps,
  | 'prop'
  | 'label'
  | 'width'
  | 'sortable'
  | 'fixed'
  | 'className'
  | 'align'
  | 'resizable'
  | 'columnKey'
  | 'headerAlign'
  | 'type'
  | 'filterMethod'
>;

type Props = {
  prop?: PickedProps['align'];
  label?: PickedProps['label'];
  width?: PickedProps['width'];
  sortable?: PickedProps['sortable'];
  fixed?: PickedProps['fixed'];
  className?: PickedProps['className'];
  align?: PickedProps['align'];
  resizable?: PickedProps['resizable'];
  columnKey?: PickedProps['columnKey'];
  headerAlign?: PickedProps['headerAlign'];
  type?: PickedProps['type'];

  onFilterMethod?: PickedProps['filterMethod'];
};

const props = withDefaults(defineProps<Props>(), {
  resizable: false,
});

type Slots = {
  default?: unknown;
};

const slots = defineSlots<Slots>();
</script>
<template>
  <ElTableColumn v-bind="props" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
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
    content: '';
    position: absolute;
    width: 12px;
    height: 22px;
    background-repeat: no-repeat;
  }
}

:global(.el-table .sort-caret.ascending) {
  &::before {
    background-image: url('@/shared/iconSvg/arrow_top.svg');
    top: 10px;
  }
}

:global(.el-table .sort-caret.descending) {
  &::before {
    background-image: url('@/shared/iconSvg/arrow_top.svg');
    top: -28px;
    left: 5px;
    rotate: 180deg;
  }
}
</style>
