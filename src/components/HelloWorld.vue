<template>
    <div class="hello">
        <!--    渲染所有插槽    -->
        <render-slot v-for="(value, key) in $scopedSlots" :key="key" :slot-name="key" :test="`${key}-插槽`" />
    </div>
</template>

<script>
import RenderSlot from './render-slot';
export default {
    name: 'HelloWorld',
    components: { RenderSlot },
    provide () {
        return {
            slotRoot: this
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
