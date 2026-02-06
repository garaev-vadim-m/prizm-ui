<script setup lang="ts">
/**
 * @author Garaev.VM
 * @components ElSelect
 */

import { ElSelect } from "element-plus";
import "element-plus/es/components/select/style/css";
import {
  useTemplateRef,
  type PropType,
  watch,
  ref,
  onMounted,
  useCssModule,
} from "vue";

type ElSelectProps = InstanceType<typeof ElSelect>["$props"];

type PickedProps = Pick<
  ElSelectProps,
  | "size"
  | "clearable"
  | "clearIcon"
  | "effect"
  | "filterable"
  | "placeholder"
  | "defaultFirstOption"
  | "onClear"
  | "onChange"
  | "onRemove-tag"
  | "multiple"
  | "disabled"
  | "noDataText"
  | "placement"
  | "loading"
  | "loadingText"
  | "allowCreate"
  | "reserveKeyword"
  | "filterMethod"
  | "remote"
  | "remoteMethod"
  | "remoteShowSuffix"
  | "collapseTags"
  | "collapseTagsTooltip"
  | "maxCollapseTags"
  | "automaticDropdown"
  | "teleported"
>;

type Slots = {
  default?: unknown;
  header?: unknown;
  footer?: unknown;
  prefix?: unknown;
  empty?: unknown;
  tag?: unknown;
  loading?: unknown;
  label?: unknown;
};

const baseSelectRef = useTemplateRef("baseSelectRef");
const slots = defineSlots<Slots>();

const modelValue = defineModel<string>({
  required: true,
});

type Props = {
  size?: PickedProps["size"];
  clearable?: PickedProps["clearable"];
  clearIcon?: PickedProps["clearIcon"];
  effect?: PickedProps["effect"];
  filterable?: PickedProps["filterable"];
  placeholder?: PickedProps["placeholder"];
  defaultFirstOption?: PickedProps["defaultFirstOption"];
  onClear?: PickedProps["onClear"];
  onChange?: PickedProps["onChange"];
  onRemoveTag?: PickedProps["onRemove-tag"];
  multiple?: PickedProps["multiple"];
  disabled?: PickedProps["disabled"];
  noDataText?: PickedProps["noDataText"];
  placement?: PickedProps["placement"];
  loading?: PickedProps["loading"];
  loadingText?: PickedProps["loadingText"];
  allowCreate?: PickedProps["allowCreate"];
  reserveKeyword?: PickedProps["reserveKeyword"];
  onFilterMethod?: PickedProps["filterMethod"];
  remote?: PickedProps["remote"];
  onRemoteMethod?: PickedProps["remoteMethod"];
  remoteShowSuffix?: PickedProps["remoteShowSuffix"];
  collapseTags?: PickedProps["collapseTags"];
  collapseTagsTooltip?: PickedProps["collapseTagsTooltip"];
  maxCollapseTags?: PickedProps["maxCollapseTags"];
  automaticDropdown?: PickedProps["automaticDropdown"];
  teleported?: PickedProps["teleported"];
};

const props = withDefaults(defineProps<Props>(), {
  size: "large",
  noDataText: "Нет данных",
  filterable: true,
  placement: "bottom-start",
  placeholder: "Выберите...",
});

// Добавляем возможность получить список опций для валидации
const options = ref<Array<{ value: string | number | boolean }>>([]);

// Функция для проверки валидности значения
function isValidValue(
  value: string | number | boolean | (string | number)[],
): boolean {
  if (value === undefined || value === null || value === "") return false;

  if (Array.isArray(value)) {
    if (value.length === 0) return false;
    return value.every((v) =>
      options.value.some((option) => option.value === v),
    );
  }

  return options.value.some((option) => option.value === value);
}

// Функция для очистки невалидного значения
function clearInvalidValue() {
  if (!isValidValue(modelValue.value as any)) {
    modelValue.value = props.multiple ? [] : undefined;
  }
}

// Слушаем изменения modelValue
watch(modelValue, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    // Можно добавить дополнительную логику валидации при изменении
  }
});

// При монтировании проверяем текущее значение
onMounted(() => {
  // TODO: Нужно получить options из slot.default или передавать как пропс
  // Пока что очищаем, если значение явно невалидно
  if (modelValue.value && modelValue.value !== "") {
    // Можно добавить таймаут, чтобы дать опциям загрузиться
    setTimeout(() => {
      clearInvalidValue();
    }, 500);
  }
});

const classes = useCssModule("classes");

defineExpose({
  baseSelectRef,
});
</script>
<template>
  <ElSelect
    ref="baseSelectRef"
    v-model="modelValue"
    :class="[classes.root]"
    v-bind="props"
  >
    <template v-if="slots.default" #default>
      <slot />
    </template>

    <template v-if="slots.header" #header>
      <slot name="header" />
    </template>

    <template v-if="slots.label" #label>
      <slot name="label" />
    </template>

    <template v-if="slots.empty" #empty>
      <slot name="empty" />
    </template>

    <template v-if="slots.footer" #footer>
      <slot name="footer" />
    </template>

    <template v-if="slots.prefix" #prefix>
      <slot name="prefix" />
    </template>

    <template v-if="slots.loading" #loading>
      <slot name="loading" />
    </template>

    <template v-if="slots.tag" #tag>
      <slot name="tag" />
    </template>
  </ElSelect>
</template>
<style module="classes" lang="scss">
.root {
  --el-fill-color-blank: #fff;
  --el-border-radius-base: var(--border-radius);
  --el-border-color: var(--color-gray);
  --el-select-border-color-hover: var(--color-gray);
  --el-select-input-focus-border-color: var(--color-gray);
  font-weight: 400;
  background-color: #fff;
}
</style>
