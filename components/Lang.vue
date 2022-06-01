<template>
  <v-menu bottom>
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="locale in $i18n.locales"
        :key="locale.code"
        @click="$i18n.setLocale(locale.code)"
      >
        {{ locale.code }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LangButton'
}
</script>
