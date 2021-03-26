<template>
  <section class="choose-val">
    <div class="choose-val__title">
      <h2>Выбранная валюта для поиска: {{ whatToSearch }}</h2>
    </div>
    <div class="choose-val__block">
      <input v-model="whatToSearch" v-for="data in whatCanSearch" :key="data" :value="data" type="radio">
      <!-- <label>{{  }}</label> -->
    </div>
    <div class="choose-val__block">
      <select v-model="whatToSearch">
        <option v-for="data in whatCanSearch" :key="data" :value="data">
          {{ data }}
        </option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    whatToSearch: {
      get () {
        return this.$store.state.whatToSearch
      },
      set (value) {
        this.$store.commit('set', {
          to: 'whatToSearch',
          content: value
        })
      }
    },
    whatCanSearch () {
      return this.$store.state.whatCanSearch
    }
  }
}
</script>
