<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTag
 */

import { ElTag } from "element-plus";
import "element-plus/es/components/tag/style/css";
import { useTemplateRef } from "vue";

type Slots = {
  default: unknown;
};

type ElTagProps = InstanceType<typeof ElTag>["$props"];

type PickedProps = Pick<
  ElTagProps,
  | "type"
  | "size"
  | "effect"
  | "round"
  | "closable"
  | "onClick"
  | "onClose"
  | "color"
  | "disableTransitions"
>;

type Props = {
  type?: PickedProps["type"];
  size?: PickedProps["size"];
  effect?: PickedProps["effect"];
  round?: PickedProps["round"];
  closable?: PickedProps["closable"];
  color?: PickedProps["color"];
  disableTransitions?: PickedProps["disableTransitions"];

  onClick?: PickedProps["onClick"];
  onClose?: PickedProps["onClose"];
};

const props = withDefaults(defineProps<Props>(), {
  type: "info",
  effect: "light",
  size: "large",
  disableTransitions: false,
});

const slots = defineSlots<Slots>();

const baseTagRef = useTemplateRef("baseTagRef");

defineExpose({
  baseTagRef,
});
</script>
<template>
  <ElTag
    v-bind="props"
    ref="baseTagRef"
    :class="[classes.root, classes[type], classes[effect]]"
  >
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElTag>
</template>
<style module="classes" lang="scss">
.root {
  font-size: 11px;
  line-height: 16px;
  font-weight: 600;
  border-radius: 2px;
  text-align: center;
}

.light {
  --c-bg-info: rgb(224, 227, 231);
  --c-text-info: rgb(110, 119, 140);
  --c-border-info: rgb(110, 119, 140);

  --c-bg-success: rgb(216, 231, 202);
  --c-text-success: rgb(73, 135, 20);
  --c-border-success: rgb(73, 135, 20);

  --c-bg-danger: rgb(247, 220, 212);
  --c-text-danger: rgb(212, 67, 50);
  --c-border-danger: rgb(212, 67, 50);

  --c-bg-warning: rgb(253, 241, 226);
  --c-text-warning: rgb(236, 152, 39);
  --c-border-warning: rgb(236, 152, 39);

  --c-bg-primary: rgb(217, 226, 255);
  --c-text-primary: rgb(67, 108, 238);
  --c-border-primary: rgb(67, 108, 238);
}

.info,
.default {
  background: var(--c-bg-info);
  color: var(--c-text-info);
  border: 1px solid var(--c-border-info);
}

.success {
  background: var(--c-bg-success);
  color: var(--c-text-success);
  border: 1px solid var(--c-border-success);
}

.danger {
  background: var(--c-bg-danger);
  color: var(--c-text-danger);
  border: 1px solid var(--c-border-danger);
}

.warning {
  background: var(--c-bg-warning);
  color: var(--c-text-warning);
  border: 1px solid var(--c-border-warning);
}

.primary {
  background: var(--c-bg-primary);
  color: var(--c-text-primary);
  border: 1px solid var(--c-border-primary);
}
</style>
