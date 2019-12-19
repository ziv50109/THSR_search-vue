<template>
  <v-app>
    <v-container>
      <News />
      <Panel />
    </v-container>
  </v-app>
</template>

<script>
import Panel from '@/components/Panel/Panel'
import News from '@/components/News'

export default {
  name: 'App',
  components: {
    Panel,
    News
  }
}
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}
.mobile-show {
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
  }
}
div.theme--light.v-data-table {
  td, th {
    text-align: center;
    @media screen and (max-width: 640px) {
      padding: 0 10px;
    }
  }
}
</style>
