<script setup lang="ts">
import { IconUser } from "@/shared/icon";
import { ElAvatar } from "element-plus";
import "element-plus/es/components/avatar/style/css";

type ElAvatarProps = InstanceType<typeof ElAvatar>["$props"];
type PickedProps = Pick<
  ElAvatarProps,
  "fit" | "icon" | "onError" | "size" | "shape" | "src" | "alt"
>;

type Props = {
  size?: PickedProps["size"];
  fit?: PickedProps["fit"];
  icon?: PickedProps["icon"];
  onError?: PickedProps["onError"];
  shape?: PickedProps["shape"];
  src?: PickedProps["src"];
  alt?: PickedProps["alt"];
};

type Slots = {
  default?: unknown;
};

const props = withDefaults(defineProps<Props>(), {
  icon: IconUser,
  size: "large",
});

const slots = defineSlots<Slots>();
</script>
<template>
  <ElAvatar v-bind="props" :class="[classes.root]">
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElAvatar>
</template>
<style module="classes" lang="scss">
.root {
}
</style>