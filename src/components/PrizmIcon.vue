<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElIcon
 */

import { ElIcon } from "element-plus";
import "element-plus/es/components/icon/style/css";
import { useCssModule } from "vue"; 

type ElIconProps = InstanceType<typeof ElIcon>["$props"];
type PickedProps = Pick<ElIconProps, "size" | "color" | "class">;

type Props = {
  size?: PickedProps["size"];
  color?: PickedProps["color"];
  class?: PickedProps["class"];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), { size: 16 });
const slots = defineSlots<Slots>();
const classes = useCssModule("classes"); 
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