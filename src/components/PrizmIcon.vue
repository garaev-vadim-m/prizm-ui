<script setup lang="ts">
import { ElIcon } from 'element-plus';
import 'element-plus/es/components/icon/style/css';

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
  <ElIcon v-bind="props" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElIcon>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
