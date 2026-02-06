<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElButton
 */

import { ElButton } from "element-plus";
import { computed, useCssModule, useTemplateRef } from "vue";
import "element-plus/es/components/button/style/css";

type ElementProps = InstanceType<typeof ElButton>["$props"];
type PickedProps = Pick<
  ElementProps,
  | "disabled"
  | "type"
  | "size"
  | "icon"
  | "link"
  | "plain"
  | "dark"
  | "onClick"
  | "nativeType"
  | "loading"
  | "loadingIcon"
  | "circle"
  | "round"
  | "color"
  | "autofocus"
  | "tag"
>;
export type ButtonProps = {
  type?: PickedProps["type"];
  disabled?: boolean;
  size?: PickedProps["size"];
  icon?: PickedProps["icon"];
  link?: PickedProps["link"];
  plain?: PickedProps["plain"];
  dark?: PickedProps["dark"];
  nativeType?: PickedProps["nativeType"];
  loading?: PickedProps["loading"];
  loadingIcon?: PickedProps["loadingIcon"];
  circle?: PickedProps["circle"];
  round?: PickedProps["round"];
  color?: PickedProps["color"];
  autofocus?: PickedProps["autofocus"];
  tag?: PickedProps["tag"];

  onClick?: PickedProps["onClick"];
};

type Slots = {
  default: unknown;
  loading?: unknown;
  icon?: unknown;
};

const slots = defineSlots<Slots>();

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "large",
  plain: false,
  nativeType: "button",
});

const classes = useCssModule("classes");
const handleOutline = computed(() => (props.plain ? classes.outline : ""));
const baseButtonRef = useTemplateRef("baseButtonRef");

defineExpose({
  baseButtonRef,
});
</script>
<template>
  <ElButton
    ref="baseButtonRef"
    v-bind="props"
    :class="[classes.root, classes[type], handleOutline]"
  >
    <template v-if="slots.icon" #icon>
      <slot name="icon" />
    </template>

    <template v-if="slots.loading" #loading>
      <slot name="loading" />
    </template>

    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElButton>
</template>
<style module="classes" lang="scss">
.root {
  border-radius: 2px;
  width: 100%;
}

.root + .root {
  margin-left: 0;
}

.default {
  --el-border-color: var(--color-dark-gray);
  --el-button-bg-color: #ffffff;

  --el-button-hover-bg-color: #ffffff;
  --el-button-hover-text-color: var(--color-dark-gray);
  --el-button-hover-border-color: var(--color-dark-gray);
}

.primary {
  --el-button-hover-bg-color: var(--color-primary-hover);
  --el-button-hover-border-color: var(--color-primary-hover);
  --el-button-disabled-bg-color: rgb(67, 107, 238, 45%);
  --el-button-disabled-border-color: rgb(67, 107, 238, 45%);
}

.success {
  --el-button-hover-bg-color: var(--color-success-hover);
  --el-button-hover-border-color: var(--color-success-hover);
  --el-button-disabled-bg-color: rgb(73, 135, 20, 45%);
  --el-button-disabled-border-color: rgb(73, 135, 20, 45%);
}

.warning {
  --el-button-hover-bg-color: var(--color-warning-hover);
  --el-button-hover-border-color: var(--color-warning-hover);
  --el-button-disabled-bg-color: rgb(255, 124, 10, 45%);
  --el-button-disabled-border-color: rgb(255, 124, 10, 45%);
}

.danger {
  --el-button-hover-bg-color: var(--color-danger-hover);
  --el-button-hover-border-color: var(--color-danger-hover);
  --el-button-disabled-bg-color: rgb(212, 67, 50, 45%);
  --el-button-disabled-border-color: rgb(212, 67, 50, 45%);
}

.info {
  --el-button-hover-bg-color: var(--color-info-hover);
  --el-button-hover-border-color: var(--color-info-hover);
  --el-button-disabled-bg-color: rgb(110, 119, 140, 45%);
  --el-button-disabled-border-color: rgb(110, 119, 140, 45%);
}

.outline {
  --el-button-bg-color: #ffffff;
}
</style>
