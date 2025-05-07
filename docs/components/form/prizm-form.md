---
title: Form
sidebar: auto
---

# Form

Компонент формы, основанный на `ElForm` из Element Plus.

## Импорт

```ts
import { PrizmForm, PrizmFormItem } from 'prizm-ui-vue';
```

## Примеры использования

## Basic Form

```vue
<script setup lang="ts">
import { PrizmForm, PrizmFormItem, PrizmInput, PrizmCheckboxGroup, PrizmCheckbox } from 'prizm-ui-vue';
import { reactive } from 'vue';

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  type: [],
});
</script>
<template>
  <PrizmForm :model="form">
    <PrizmFormItem label="Наименование">
      <PrizmInput v-model="form.name" />
    </PrizmFormItem>
    <PrizmFormItem label="Регион">
      <PrizmInput v-model="form.region" />
    </PrizmFormItem>
    <PrizmFormItem label="Наименование">
      <PrizmCheckboxGroup v-model="form.type">
        <PrizmCheckbox name="type1" value="type1" />
        <PrizmCheckbox name="type2" value="type2" />
        <PrizmCheckbox name="type3" value="type3" />
      </PrizmCheckboxGroup>
    </PrizmFormItem>
  </PrizmForm>
</template>
```

---

```vue
<script setup lang="ts">
import { PrizmForm, PrizmFormItem, PrizmInput, PrizmCheckboxGroup, PrizmCheckbox } from 'prizm-ui-vue';
import { reactive } from 'vue';

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  type: [],
});
</script>
<template>
  <PrizmForm :model="form">
    <PrizmFormItem label="Наименование">
      <PrizmInput v-model="form.name" />
    </PrizmFormItem>
    <PrizmFormItem label="Регион">
      <PrizmInput v-model="form.region" />
    </PrizmFormItem>
    <PrizmFormItem label="Тип">
      <PrizmCheckboxGroup v-model="form.type">
        <PrizmCheckbox name="type1" value="type1" />
        <PrizmCheckbox name="type2" value="type2" />
        <PrizmCheckbox name="type3" value="type3" />
      </PrizmCheckboxGroup>
    </PrizmFormItem>
  </PrizmForm>
</template>
```

---

## Validation form

```vue
<script setup lang="ts">
import {
  PrizmForm,
  PrizmFormItem,
  PrizmInput,
  PrizmCheckboxGroup,
  PrizmCheckbox,
  FormInstance,
  FormRules,
} from 'prizm-ui-vue';
import { reactive, useTemplateRef } from 'vue';

type RuleForm = {
  name: string;
  region: string;
  type: string[];
};

const formRef = useTemplateRef('formRef');
// do not use same name with ref
const form = reactive<RuleForm>({
  name: '',
  region: '',
  type: [],
});

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl?.$refs.baseFormRef) return;
  await formEl.$refs.baseFormRef.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>
<template>
  <PrizmForm ref="formRef" :model="form">
    <PrizmFormItem label="Наименование" prop="name">
      <PrizmInput v-model="form.name" />
    </PrizmFormItem>
    <PrizmFormItem label="Регион" prop="region">
      <PrizmInput v-model="form.region" />
    </PrizmFormItem>
    <PrizmFormItem label="Тип">
      <PrizmCheckboxGroup v-model="form.type" prop="type">
        <PrizmCheckbox name="type1" value="type1" />
        <PrizmCheckbox name="type2" value="type2" />
        <PrizmCheckbox name="type3" value="type3" />
      </PrizmCheckboxGroup>
    </PrizmFormItem>
    <PrizmFormItem label="Регион">
      <PrizmButton @click="submitForm(formRef)" />
    </PrizmFormItem>
  </PrizmForm>
</template>
```
