import { Fragment } from 'vue-fragment';
export default {
    name: 'RenderSlot',
    functional: true,
    inject: {
        slotRoot: { default: null }
    },
    props: {
        slotName: {
            type: String,
            required: true
        }
    },
    render: (h, ctx) => {
        const root = ctx.injections.slotRoot || ctx.parent;
        const slot = root.$scopedSlots[ctx.props.slotName]({
            ...ctx.data.attrs
        });
        return h(Fragment, slot);
    }
};
