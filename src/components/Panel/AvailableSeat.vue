<template>
  <v-form ref="form" v-model="valid">
    <v-row justify="center">
      <v-col cols="12">
        <v-select
          v-model="form.station"
          :items="stationList"
          label="車站"
          required
          :rules="[
            v => !!v || '請選擇車站',
          ]"
        ></v-select>
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
  name: 'AvailableSeat',
  data: () => ({
    valid: true,
    form: {
      station: ''
    }
  }),
  computed: {
    ...mapGetters([
      'stationList',
      'availableSeatList'
    ])
  },
  methods: {
    ...mapActions([
      'getAvailableSeat'
    ]),
    async submit () {
      if (this.$refs.form.validate()) {
        await this.getAvailableSeat({ StationID: this.form.station })
        console.log('availableSeatList', this.availableSeatList)
      }
    }
  }
}
</script>
