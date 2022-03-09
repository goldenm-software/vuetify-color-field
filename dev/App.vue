<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Classic</h2>
            <v-color-field
              v-model="color"
              hide-details
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Field from '@'
export default {
  components: {
    'v-color-field': Field
  },

  data () {
    return {
      color: '#001e60'
    }
  }
}
</script>