<template>
  <div class="paintings">
    <div class="container">
      <h1 class="title title-page">Картины эпохи Возрождения</h1>
      <div class="paintings-list">
        <ul>
          <paintCard
            v-for="(card, index) in paintsList"
            :key="card.id"
            :cardData="{ card, index }"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import paintCard from '@/components/PaintCard';

import { mapGetters } from 'vuex';

export default {
  components: {
    paintCard,
  },

  data: () => ({
    cardData: null,
  }),

  mounted() {
    this.$store.dispatch('loadPaintsInBasket');
  },

  computed: {
    ...mapGetters(['paintsList']),
  },
};
</script>
