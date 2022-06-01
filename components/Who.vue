<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mx-auto" outlined>
            <v-card-actions class="justify-center">
              <div>
                <v-btn fab>
                  <v-icon>mdi-help-circle</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
            <v-card-title class="justify-center" v-text="$t('what')" />
            <v-card-text v-text="$t('whatText')" />
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mx-auto" outlined>
            <v-card-actions class="justify-center">
              <v-btn fab>
                <v-icon>mdi-account-question</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title class="justify-center" v-text="$t('who')" />
            <v-card-text v-text="$t('whoText')" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'WhoStep'
}
</script>
