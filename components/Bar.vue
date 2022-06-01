<template>
  <v-app-bar app dense color="primary">
    <v-toolbar-title> readmetrics </v-toolbar-title>
    <v-spacer />
    <Lang />
  </v-app-bar>
</template>
<script>

import Lang from '~/components/Lang.vue'

export default {
  name: 'BarComponent',
  components: {
    Lang
  }
}
</script>
