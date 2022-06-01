<template>
  <v-card outlined>
    <v-card-title class="justify-center">
      <h1>Logo Readmetrics</h1>
    </v-card-title>
    <v-card-title class="justify-center">
      <h2 v-text="$t('subtitle')" />
      <v-container fill-height fluid>
        <v-layout class="align-center justify-center">
          <img
            :src="require('~/static/img/logo-ezpaarse.svg')"
            width="30%"
            height="auto"
            style="margin-right: 20px"
          >
          <img
            :src="require('~/static/img/logo-ezmesure.svg')"
            width="30%"
            height="auto"
          >
        </v-layout>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'LogoComponent'
}
</script>
