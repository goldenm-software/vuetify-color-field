<template>
  <v-dialog
    v-model="display"
    width="min-content"
    persistent
    scrollable
  >
    <template #activator="{ on }">
      <v-text-field
        v-bind="additionalProps"
        :disabled="disabled"
        :loading="loading"
        :label="label"
        :value="obj"
        readonly
        :solo="solo"
        :outlined="outlined"
        :dense="dense"
        :color="color"
        :hide-details="hideDetails"
        :error="error"
        :error-messages="errorMessages"
        :dark="dark"
        v-on="on"
      >
        <template #progress>
          <slot name="progress">
            <v-progress-linear color="primary" indeterminate absolute height="2" />
          </slot>
        </template>

        <template #append>
          <v-avatar
            size="22px"
            :color="obj"
            class="elevation-2"
          >
            <v-icon small :color="useBlack(obj) ? 'black' : 'white'">mdi-palette</v-icon>
          </v-avatar>
        </template>
      </v-text-field>
    </template>

    <v-card>
      <v-card-text class="pa-0">
        <v-color-picker
          v-model="obj"
          mode="hexa"
          hide-mode-switch
          show-swatches
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey lighten-1"
          text
          @click.native="obj = ''; display = false"
        >
          {{ clearText }}
        </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click="display = false"
        >
          {{ okText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import colors from './mixins/colors'
export default {
  mixins: [colors],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: { type: String, default: () => null },
    disabled: { type: Boolean, default: () => false },
    loading: { type: Boolean, default: () => false },
    label: { type: String, default: () => '' },
    okText: { type: String, default: () => 'OK' },
    clearText: { type: String, default: () => 'Clear' },
    color: { type: String, default: () => 'primary' },
    dark: { type: Boolean, default: () => false },

    additionalProps: { type: Object, default: () => {} },
    // Basic field props
    outlined: { type: Boolean, default: () => false },
    solo: { type: Boolean, default: () => false },
    dense: { type: Boolean, default: () => false },
    hideDetails: { type: Boolean, default: () => false },
    error: { type: Boolean, default: () => false },
    errorMessages: { type: Array, default: () => [] }
  },

  data () {
    return {
      display: false
    }
  },

  computed: {
    obj: {
      get () {
        return this.value.substring(0, 7)
      },
      set (value) {
        this.$emit('input', value.substring(0, 7))
      }
    }
  },

  methods: {
    
  }
}
</script>
