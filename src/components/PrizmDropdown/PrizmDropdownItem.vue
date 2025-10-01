<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDropdownItem
 */
import { ElDropdownItem } from "element-plus";
import "element-plus/es/components/dropdown-item/style/css";

type ElDropdownItemProps = InstanceType<typeof ElDropdownItem>["$props"];

type PickedProps = Pick<ElDropdownItemProps, "disabled" | "icon" | "onClick">;

type Props = {
  disabled?: PickedProps["disabled"];
  icon?: PickedProps["icon"];
  onClick?: PickedProps["onClick"];
};

const props = defineProps<Props>();

type Slots = {
  default?: unknown;
};

const slots = defineSlots<Slots>();
</script>
<template>
  <ElDropdownItem v-bind="props" :class="[classes.root]">
    <template #default v-if="slots.default">
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
