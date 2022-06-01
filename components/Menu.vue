<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card height="100%" outlined>
          <v-card-actions class="justify-center">
            <div>
              <v-btn fab>
                <v-icon>mdi-forward</v-icon>
              </v-btn>
            </div>
          </v-card-actions>
          <v-card-title class="justify-center" v-text="$t('demoButton')" />
          <v-card-text v-text="$t('demoText1')" />
          <v-card-text v-text="$t('demoText2')" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card height="100%" outlined>
          <v-card-actions class="justify-center">
            <v-btn fab>
              <v-icon>mdi-account-plus</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title class="justify-center" v-text="$t('demoButton')" />
          <v-card-text v-text="$t('signInText')" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card height="100%" outlined>
          <v-card-actions class="justify-center">
            <v-btn fab>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title class="justify-center" v-text="$t('signInButton')" />
          <v-card-text v-text="$t('signUpText')" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MenuButton'
}
</script>
