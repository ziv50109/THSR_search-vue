<template>
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card>
        <v-card-text>
          <h3 class="news-title">最新消息</h3>
        </v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in newsList" :key="item.id">
                <td class="news-date">{{ item.date }}</td>
                <td><a :href="item.url" target="_blank">{{ item.title }}</a></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'News',
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'newsList'
    ])
  },
  mounted () {
    this.getNews()
  },
  methods: {
    ...mapActions([
      'getNews'
    ])
  }
}
</script>

<style scoped lang="scss">
.news {
  &-title {
    color: #B71C1C;
  }
  &-date {
    width: 74px;
  }
}
.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {
  background: none;
}
.v-application a {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: rgba(#000, .87);
  &:hover {
    color: #E65100;
  }
}
</style>
