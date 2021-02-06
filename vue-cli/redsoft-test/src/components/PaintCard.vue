<template>
  <li :class="{ 'js-sale-product': cardData.card.status === 'sold' }">
    <a href="#">
      <div class="paintings-list__img">
        <img
          :src="imgSrc(cardData.idx)"
          :srcset="imgSrcset(cardData.idx)"
          :width="cardData.card.img.width"
          :height="cardData.card.img.height"
          :alt="cardData.card.img.alt"
        />
      </div>
      <div class="paintings-list__content">
        <div class="paintings-list__title">
          <h2>{{ cardData.card.title }}</h2>
        </div>
        <div class="paintings-list__painter">
          <p>{{ cardData.card.author }}</p>
        </div>
      </div>
    </a>
    <div class="paintings-list__footer">
      <div class="paintings-list__price-wrap">
        <div class="paintings-list__price paintings-list__price--old">
          <span v-if="cardData.card.oldPrice"
            >{{ cardData.card.oldPrice }} $</span
          >
        </div>
        <div class="paintings-list__price">
          <span v-if="cardData.card.newPrice"
            >{{ cardData.card.newPrice }} $</span
          >
        </div>
      </div>
      <div class="paintings-list__btn-wrap">
        <buttonsBuy />
      </div>
      <div
        class="paintings-list__sales-text"
        :class="{
          'js-show-text': !cardData.card.newPrice && !cardData.card.oldPrice,
        }"
      >
        <p>{{ cardData.card.sales }}</p>
      </div>
    </div>
  </li>
</template>

<script>
import buttonsBuy from "@/components/ButtonsBuy";
import { mapGetters } from "vuex";

export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  components: {
    buttonsBuy,
  },
  computed: {
    ...mapGetters(["paintsList"]),
  },
  methods: {
    imgSrc(idx) {
      return this.paintsList[idx].img.src;
    },
    imgSrcset(idx) {
      return this.paintsList[idx].img.srcset + " 2x";
    },
  },
};
</script>

<style lang="scss" scoped>
.js-show-text {
  display: block;
}
</style>
