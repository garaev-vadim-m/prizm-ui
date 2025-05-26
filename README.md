# prizm-ui-vue

**Версия:** 2.3.0
**Описание:** Vue 3 UI Kit, основанный на Element Plus, с ручным импортом компонентов.

## Установка

Убедитесь, что в вашем проекте установлен `vue`:

```bash
npm install vue@^3.4.0
```

Затем установите `prizm-ui-vue`:

```bash
npm install prizm-ui-vue
```

Также необходимо установить `sass`, так как библиотека использует SCSS-стили:

```bash
npm install -D sass
```

В `inex.html` нужно указать

```html
<html lang="en" class="light">
```

## Использование

Импортируйте нужные компоненты вручную:

```ts
import { PrizmButton } from 'prizm-ui-vue';

export default {
  components: {
    PrizmButton
  }
};
```

Это означает, что библиотека поддерживает как ESM, так и CommonJS импорты, а также предоставляет декларации типов для TypeScript.

## Лицензия

[MIT](./LICENSE)

---

**Автор:** Garaev.VM
