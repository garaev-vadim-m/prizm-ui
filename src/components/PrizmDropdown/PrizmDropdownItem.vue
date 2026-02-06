<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDropdownItem
 */
import { ElDropdownItem } from "element-plus";
import "element-plus/es/components/dropdown-item/style/css";
import { useCssModule } from "vue";

type ElDropdownItemProps = InstanceType<typeof ElDropdownItem>["$props"];

type PickedProps = Pick<
  ElDropdownItemProps,
  | "disabled"
  | "icon"
  | "onClick"
  | "divided"
  | "command"
  | "class"
  | "style"
>;

type Props = {
  disabled?: PickedProps["disabled"];
  icon?: PickedProps["icon"];
  divided?: PickedProps["divided"];
  command?: PickedProps["command"];
  class?: PickedProps["class"];
  style?: PickedProps["style"];
  onClick?: PickedProps["onClick"];
};

const props = defineProps<Props>();

type Slots = {
  default?: unknown;
};

const classes = useCssModule("classes"); 

const slots = defineSlots<Slots>();
</script>
<template>
  <ElDropdownItem v-bind="props" :class="[classes.root]">
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElDropdownItem>
</template>
<style module="classes" lang="scss">
.root {
  --el-button-border-color: var(--color-dark);
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
}
</style>