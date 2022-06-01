<template>
  <v-footer padless bottom>
    <v-card flat tile width="100%" class="red lighten-1 text-center">
      <v-card-text>
        <v-btn class="mx-4" fab>
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn class="mx-4" fab>
          <v-icon>mdi-post</v-icon>
        </v-btn>

        <v-btn class="mx-4" fab>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>

        <v-btn class="mx-4" fab>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-btn class="mx-4" fab>
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Readmetrics</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterStep'
}
</script>
