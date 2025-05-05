<script setup lang="ts">
import { IconUser } from '@/shared/icon';
import { ElAvatar } from 'element-plus';
import 'element-plus/es/components/avatar/style/css';

type ElIconProps = InstanceType<typeof ElAvatar>['$props'];
type PickedProps = Pick<ElIconProps, 'fit' | 'icon' | 'onError' | 'size' | 'shape' | 'src'>;

type Props = {
  size?: PickedProps['size'];
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  icon?: PickedProps['icon'];
  onError?: PickedProps['onError'];
  shape?: PickedProps['shape'];
  src?: PickedProps['src'];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), {
  icon: IconUser,
  size: 'large',
});

const slots = defineSlots<Slots>();
</script>
<template>
  <ElAvatar v-bind="props" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElAvatar>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
