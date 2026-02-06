<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElOption
 */

import { ElOption } from "element-plus";
import "element-plus/es/components/option/style/css";
import { useCssModule, useTemplateRef } from "vue";

type ElOptionProps = InstanceType<typeof ElOption>["$props"];
type PickedProps = Pick<
  ElOptionProps,
  "value" | "label" | "disabled" | "created"
>;

type Props = {
  value: PickedProps["value"];
  label?: PickedProps["label"];
  disabled?: PickedProps["disabled"];
  created?: PickedProps["created"];
  width?: "auto" | string | number;
};

type Slots = {
  default?: unknown;
};

const baseOptionRef = useTemplateRef("baseOptionRef");

/**
 * @param {number | string | undefined} width
 * @return {string}
 */
function handleWidth(width: number | string | undefined): string {
  if (
    width === "auto" ||
    width === undefined ||
    (typeof width === "string" && !width.length)
  )
    return "auto";

  if (typeof width === "number") width = String(width);

  // Исправляем indexOf на includes
  if (
    width.includes("px") ||
    width.includes("%") ||
    width.includes("rem") ||
    width.includes("em") ||
    width.includes("vw") ||
    width.includes("vh")
  ) {
    return width;
  }

  return `${width}px`;
}

const props = withDefaults(defineProps<Props>(), {
  width: "auto",
});

const style = {
  textAlign: "left" as const,
  overflow: "initial" as const,
  whiteSpace: "initial" as const,
  overflowWrap: "break-word" as const,
  height: "auto" as const,
  paddingTop: "10px",
  paddingBottom: "10px",
  width: handleWidth(props.width) || "auto",
};

const slots = defineSlots<Slots>();

const classes = useCssModule("classes");

defineExpose({
  baseOptionRef,
});
</script>
<template>
  <ElOption
    ref="baseOptionRef"
    v-bind="props"
    :class="[classes.root]"
    :style="style"
  >
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElOption>
</template>
<style module="classes" lang="scss">
.root {
  * {
    font-weight: 400;
    color: var(--color-dark);
    font-size: 14px;
  }
}
</style>
