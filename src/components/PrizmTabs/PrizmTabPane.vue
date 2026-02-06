<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTabPane
 */

import { ElTabPane } from "element-plus";
import "element-plus/es/components/tab-pane/style/css";
import { useCssModule, useTemplateRef } from "vue";

type ElTabPaneProps = InstanceType<typeof ElTabPane>["$props"];
type PickedProps = Pick<
  ElTabPaneProps,
  | "label"
  | "disabled"
  | "name"
  | "closable"
  | "lazy"
>;

type Props = {
  label?: PickedProps["label"];
  disabled?: PickedProps["disabled"];
  name?: PickedProps["name"];
  closable?: PickedProps["closable"];
  lazy?: PickedProps["lazy"];
};

const props = defineProps<Props>();

type Slots = {
  default?: unknown;
  label?: unknown;
};

const slots = defineSlots<Slots>();

const baseTabPaneRef = useTemplateRef("baseTabPaneRef");

const classes = useCssModule("classes"); 

defineExpose({
  baseTabPaneRef,
});
</script>
<template>
  <ElTabPane
    ref="baseTabPaneRef"
    v-bind="props"
    :class="[classes.root]"
  >
    <template v-if="slots.label" #label>
      <slot name="label" />
    </template>

    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElTabPane>
</template>
<style module="classes" lang="scss">
.root {
}
</style>