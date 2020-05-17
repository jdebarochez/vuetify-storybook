import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: "VCard",
  decorators: [withKnobs]
};

export const withText = () => ({
  methods: { 
    action1: action("Left button clicked"),
    action2: action("Right button clicked"),
  },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'Button')
    },
    color: {
      default: color('Color', 'grey')
    }
  },
  template: `<v-card
  class="mx-auto"
  max-width="344"
  outlined
>
  <v-list-item three-line>
    <v-list-item-content>
      <div class="overline mb-4">OVERLINE</div>
      <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
      <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-avatar
      tile
      size="80"
      :color="color"
    ></v-list-item-avatar>
  </v-list-item>

  <v-card-actions>
    <v-btn text @click="action1" :disabled="isDisabled"> {{ text }}</v-btn>
    <v-btn text @click="action2">Button</v-btn>
  </v-card-actions>
</v-card>`
});