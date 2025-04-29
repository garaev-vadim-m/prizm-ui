<script setup lang="ts">
import { ElDropdownMenu } from 'element-plus';
import 'element-plus/es/components/dropdown-menu/style/css';

// type ElDropdownMenuProps = InstanceType<typeof ElDropdownMenu>['$props'];

// type PickedProps = Pick<ElDropdownMenuProps, 'onKeydown'>;

// type Props = {
//   onKeydown?: PickedProps['onKeydown'];
// };

// const props = defineProps<Props>();

type Slots = {
  default?: unknown;
};

const slots = defineSlots<Slots>();
</script>
<template>
  <ElDropdownMenu :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElDropdownMenu>
</template>
<style module="classes" lang="scss">
.root {
  --el-button-border-color: var(--color-dark);
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
}
</style>
