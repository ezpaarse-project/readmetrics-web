<template>
  <v-app>
    <Bar />
    <v-main>
      <Logo />
      <br>
      <br>
      <br>
      <Menu />
      <br>
      <br>
      <br>
      <Who />
      <br>
      <br>
      <br>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>

import Bar from '~/components/Bar.vue'
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'
import Who from '~/components/Who.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'HomeApp',
  components: {
    Bar,
    Logo,
    Menu,
    Who,
    Footer
  }
}
</script>
