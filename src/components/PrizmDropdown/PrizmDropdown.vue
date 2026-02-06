<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDropdown
 */
import { type DropdownInstance, ElDropdown } from "element-plus";
import "element-plus/es/components/dropdown/style/css";
import { useCssModule, useTemplateRef } from "vue";

type ElDropdownProps = InstanceType<typeof ElDropdown>["$props"];

type PickedProps = Pick<
  ElDropdownProps,
  | "type"
  | "effect"
  | "disabled"
  | "trigger"
  | "loop"
  | "maxHeight"
  | "splitButton"
  | "onClick"
  | "size"
  | "placement"
  | "triggerKeys"
  | "onVisible-change"
  | "onCommand"
  | "hideOnClick"
  | "showTimeout"
  | "hideTimeout"
  | "role"
  | "tabindex"
>;

type Props = {
  type?: PickedProps["type"];
  effect?: PickedProps["effect"];
  disabled?: PickedProps["disabled"];
  trigger?: PickedProps["trigger"];
  loop?: PickedProps["loop"];
  maxHeight?: PickedProps["maxHeight"];
  splitButton?: PickedProps["splitButton"];
  size?: PickedProps["size"];
  placement?: PickedProps["placement"];
  triggerKeys?: PickedProps["triggerKeys"];
  hideOnClick?: PickedProps["hideOnClick"];
  showTimeout?: PickedProps["showTimeout"];
  hideTimeout?: PickedProps["hideTimeout"];
  role?: PickedProps["role"];
  tabindex?: PickedProps["tabindex"];
  openList?: boolean;

  onClick?: PickedProps["onClick"];
  "onVisible-change"?: PickedProps["onVisible-change"];
  onCommand?: PickedProps["onCommand"];
};

type Slots = {
  default?: unknown;
  dropdown?: unknown;
};

const baseDropdownRef = useTemplateRef<DropdownInstance>("baseDropdownRef");

function openDropdown() {
  if (!baseDropdownRef.value || !props.splitButton || !props.openList) return;
  return baseDropdownRef.value.handleOpen();
}

const props = withDefaults(defineProps<Props>(), {
  size: "large",
  placement: "bottom",
  trigger: "click",
  type: "default",
  openList: false,
  hideOnClick: true,
});

const slots = defineSlots<Slots>();

const classes = useCssModule("classes"); 

defineExpose({
  baseDropdownRef,
});
</script>
<template>
  <ElDropdown
    ref="baseDropdownRef"
    v-bind="props"
    :class="[classes.root]"
    @click="openDropdown"
  >
    <template v-if="slots.default" #default>
      <slot />
    </template>

    <template v-if="slots.dropdown" #dropdown>
      <slot name="dropdown" />
    </template>
  </ElDropdown>
</template>
<style module="classes" lang="scss">
.root {
  --el-border-radius-base: var(--border-radius);
}

.root :global(.el-button) {
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
}

.root {
  :global(.el-dropdown__caret-button.el-button:before) {
    background: var(--color-dark-gray);
  }
}
</style>