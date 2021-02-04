<template>
  <div>
    <button
        v-if="!inBasket"
        class="btn btn--buy"
        type="button"
        @click="buyPaint"
    >Купить</button>
    <button
        v-if="inBasket"
        class="btn btn--buy btn--in-basket"
        type="button"
    >
      В корзине
      <svg width="16" height="20" aria-hidden="true">
        <use xlink:href="#icon-check"></use>
      </svg>
    </button>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data: () => ({
    inBasket: false,
  }),
  methods: {
    ...mapActions([
        ...'getPaint',
    ]),

    buyPaint() {
      this.$store.dispatch('getPaint');
      this.inBasket = !this.inBasket;
    },
  },
};
</script>

<style lang="scss"></style>
