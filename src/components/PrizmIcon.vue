<script setup lang="ts">
import { type ElIcon } from 'element-plus';

type ElIconProps = InstanceType<typeof ElIcon>['$props'];
type PickedProps = Pick<ElIconProps, 'size' | 'color' | 'class'>;

type Props = {
  size: PickedProps['size'];
  color: PickedProps['color'];
  class: PickedProps['class'];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), { size: 16 });
const slots = defineSlots<Slots>();
</script>
<template>
  <ElIcon v-bind="props">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElIcon>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
