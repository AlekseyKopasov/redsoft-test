<template>
  <div class="paintings">
    <div class="container">
      <h1 class="title title-page">Картины эпохи Возрождения</h1>
      <div class="paintings-list">
        <ul>
          <paintCard
            v-for="(card, idx) in paintsList"
            :key="card.id"
            :cardData="{ card, idx }"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import paintCard from "@/components/PaintCard";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    paintCard,
  },

  data: () => ({
    cardData: null,
  }),

  computed: {
    ...mapGetters(["paintsList"]),
  },

  methods: {
    ...mapActions(["savePaintId"]),
  },

  mounted: () => {},
};
</script>
