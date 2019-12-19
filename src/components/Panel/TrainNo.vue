<template>
  <v-form ref="form" v-model="valid">
    <v-row justify="center">
      <v-col cols="12">
        <v-autocomplete
          v-model="form.trainNo"
          :items="todayDailyTrainInfoList"
          label="車次號碼"
          no-data-text="找不到結果"
          required
          :rules="[v => !!v || '請輸入車次號碼']"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="submit"
        >查詢</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TrainNo',
  data: () => ({
    valid: true,
    form: {
      trainNo: ''
    }
  }),
  computed: {
    ...mapGetters([
      'todayDailyTrainInfoList',
      'todayTrainNoList'
    ])
  },
  mounted () {
    this.getTodayDailyTrainInfo()
  },
  methods: {
    ...mapActions([
      'getTodayDailyTrainInfo',
      'getTodayTrainNo'
    ]),
    async submit () {
      if (this.$refs.form.validate()) {
        await this.getTodayTrainNo({ TrainNo: this.form.trainNo })
        console.log('todayTrainNoList', this.todayTrainNoList)
      }
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-list-item .v-list-item__mask {
  background: none;
  color: #B71C1C;
}
</style>
