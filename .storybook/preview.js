import Vue from 'vue'
import * as _Vuetify from 'vuetify/lib'
import { configure, addDecorator } from '@storybook/vue'

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

const Vuetify = _Vuetify.default

const isVueComponent = obj => obj.name === 'VueComponent'

const VComponents = Object.keys(_Vuetify).reduce((acc, key) => {
    if (isVueComponent(_Vuetify[key])) {
        acc[key] = _Vuetify[key]
    }
    return acc
}, {})

Vue.use(Vuetify, {
    components: {
        ...VComponents
    }
})

addDecorator(() => ({
    vuetify: new Vuetify(),
    template: '<v-app><story/></v-app>'
}))

configure(require.context('../stories', true, /\.stories\.js$/), module);