<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElTabs
 */

import { ElTabs } from "element-plus";
import "element-plus/es/components/tabs/style/css";
import { useTemplateRef } from "vue";

type ElTabsProps = InstanceType<typeof ElTabs>["$props"];
type PickedProps = Pick<
  ElTabsProps,
  | "type"
  | "onEdit"
  | "onTabAdd"
  | "onTabChange"
  | "onTabClick"
  | "onTabRemove"
  | "addable"
  | "beforeLeave"
  | "editable"
  | "closable"
  | "tabPosition"
  | "stretch"
>;

type TabsProps = {
  type?: PickedProps["type"];
  addable?: PickedProps["addable"];
  editable?: PickedProps["editable"];
  closable?: PickedProps["closable"];
  tabPosition?: PickedProps["tabPosition"];
  stretch?: PickedProps["stretch"];

  onEdit?: PickedProps["onEdit"];
  onTabAdd?: PickedProps["onTabAdd"];
  onTabChange?: PickedProps["onTabChange"];
  onTabClick?: PickedProps["onTabClick"];
  onTabRemove?: PickedProps["onTabRemove"];
  onBeforeLeave?: PickedProps["beforeLeave"];
};

type Slots = {
  default?: unknown;
  addIcon?: unknown;
};

const baseTabsRef = useTemplateRef("baseTabsRef");

const props = withDefaults(defineProps<TabsProps>(), {
  type: "",
  tabPosition: "top",
  stretch: false,
});

const slots = defineSlots<Slots>();

const modelValue = defineModel<string | number>({
  required: true,
});

defineExpose({
  baseTabsRef,
});
</script>
<template>
  <ElTabs
    ref="baseTabsRef"
    v-bind="props"
    v-model="modelValue"
    :class="[classes.root]"
  >
    <template v-if="slots.default" #default>
      <slot />
    </template>

    <template v-if="slots.addIcon" #addIcon>
      <slot name="addIcon" />
    </template>
  </ElTabs>
</template>
<style module="classes" lang="scss">
.root {
  :global(.el-tabs__header) {
    margin: 0;
  }
}
</style>