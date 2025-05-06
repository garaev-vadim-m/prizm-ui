
# PrizmButton

Компонент кнопки, основанный на `ElButton` из Element Plus. Поддерживает иконки, стилизацию через CSS-модули и состояния загрузки.

## Импорт

```ts
import { PrizmButton } from 'prizm-ui-vue';
```

## Пример использования

```vue

<script setup lang="ts">
import { PrizmInput } from 'prizm-ui-vue';

function handleClick() {
  console.log('Кнопка нажата')
}
</script>

<PrizmButton type="primary" @click="handleClick">
  Нажми меня
</PrizmButton>
```

---

## Props

| Название      | Тип                                                                  | По умолчанию | Описание                         |
|---------------|----------------------------------------------------------------------|--------------|----------------------------------|
| `type`        | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'default'` | `'default'`  | Тип кнопки                       |
| `size`        | `'small'` \| `'default'` \| `'large'`                                 | `'large'`    | Размер кнопки                    |
| `icon`        | `string` \| `Component`                                               | `—`          | Иконка слева                     |
| `link`        | `boolean`                                                             | `false`      | Стилизация как ссылка           |
| `plain`       | `boolean`                                                             | `false`      | Простой стиль (outline)         |
| `dark`        | `boolean`                                                             | `false`      | Темная тема                      |
| `nativeType`  | `'button'` \| `'submit'` \| `'reset'`                                 | `'button'`   | HTML-атрибут `type`             |
| `disabled`    | `boolean`                                                             | `false`      | Отключена ли кнопка             |
| `onClick`     | `(e: MouseEvent) => void`                                             | `—`          | Обработчик события `click`      |

---

## Слоты

| Название   | Описание                            |
|------------|-------------------------------------|
| `default`  | Основное содержимое кнопки          |
| `icon`     | Слот для пользовательской иконки    |
| `loading`  | Слот для кастомного индикатора загрузки |

---

## Стилизация

Компонент использует CSS-модули. Доступные модификаторы:

- `.default`
- `.primary`
- `.success`
- `.warning`
- `.danger`
- `.outline` — добавляется автоматически, если `plain: true`

---

## Примеры

### С иконкой

```vue
<PrizmButton type="success">
  <template #icon>
    <CheckIcon />
  </template>
  Сохранить
</PrizmButton>
```

### С загрузкой

```vue
<PrizmButton type="primary">
  <template #loading>
    <Spinner />
  </template>
  Загрузка...
</PrizmButton>
```

---

## Работа с ref

Компонент экспортирует `baseButtonRef` для получения ссылки на внутренний `ElButton`.

```ts
const button = ref();

<PrizmButton ref="button" />
```
