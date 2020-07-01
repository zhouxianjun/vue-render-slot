# vue-render-slot
动态渲染slot插槽

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## API
### Attributes

| 属性            | 说明                                                                                        | 类型           | 默认值                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| slotName        | 插槽                                                                                    | String         | -                                                                                                                                     |

### Example
#### 组件 HelloWord.vue
```vue
<template>
    <div class="hello">
        <!--    渲染所有插槽    -->
        <render-slot v-for="(value, key) in $scopedSlots" :key="key" :slot-name="key" :test="`${key}-插槽`" />
    </div>
</template>

<script>
import RenderSlot from 'vue-render-slot';
export default {
    name: 'HelloWorld',
    components: { RenderSlot }
};
</script>
```

#### App.vue
```vue
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld>
            <template v-slot:a>
                a slot
            </template>
            <template v-slot:b="{ test }">
                <div>b slot {{test}}</div>
            </template>
        </HelloWorld>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    // 如果不传入provide则默认使用slot的parent组件中的slot
    //provide () {
    //    return {
    //        slotRoot: this
    //    };
    //}
};
</script>
```
