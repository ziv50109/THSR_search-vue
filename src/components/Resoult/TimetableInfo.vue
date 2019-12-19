<template>
  <div v-if="timetableList.length">
    <hr>
    <v-simple-table fixed-header class="mt-3" height="530px">
      <template v-slot:default>
        <thead>
          <tr>
            <th>車次</th>
            <th>出發時間</th>
            <th>到達時間</th>
            <th>行車時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in timetableList" :key="item.trainNo">
            <td>{{ item.trainNo }}</td>
            <td>{{ item.startTime }}</td>
            <td>{{ item.endTime }}</td>
            <td>{{ item.diffTime[0] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TimetableInfo',
  computed: {
    ...mapGetters([
      'timetableList'
    ])
  }
}
</script>
