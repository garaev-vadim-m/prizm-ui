<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElDropdownMenu
 */

import { ElDropdownMenu } from "element-plus";
import "element-plus/es/components/dropdown-menu/style/css";
import { useCssModule } from "vue";

type Slots = {
  default?: unknown;
};

const classes = useCssModule("classes"); 

const slots = defineSlots<Slots>();
</script>
<template>
  <ElDropdownMenu :class="[classes.root]">
    <template v-if="slots.default" #default>
      <slot />
    </template>
  </ElDropdownMenu>
</template>
<style module="classes" lang="scss">
.root {
  --el-button-border-color: var(--color-dark);
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
}
</style>