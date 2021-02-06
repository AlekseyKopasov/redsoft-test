<template>
  <div>
    <button
      v-if="!inBasket"
      class="btn btn--buy"
      :class="{ load: isLoad }"
      type="button"
      @click="buyPaint"
    >
      <span class="btn__text">Купить</span>
      <span class="btn__spinner"></span>
    </button>
    <button v-if="inBasket" class="btn btn--buy btn--in-basket" type="button">
      В корзине
      <svg width="16" height="20" aria-hidden="true">
        <use xlink:href="#icon-check"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    inBasket: false,
    isLoad: false,
    demoTimer: null,
  }),

  methods: {
    ...mapActions(["getPaint"]),

    async buyPaint() {
      if (!this.demoTimer) {
        this.isLoad = !this.isLoad;
        await this.getPaint();

        this.demoTimer = setTimeout(() => {
          this.inBasket = !this.inBasket;
          localStorage.setItem("inBasked", this);
        }, 1000);
      }
    },
  },

  destroyed() {
    this.demoTimer = null;
  },
};
</script>

<style lang="scss" scoped>
$color-default-white: #ffffff;

.btn--buy.load {
  .btn__text {
    display: none;
  }

  .btn__spinner {
    display: flex;
  }
}

.btn__spinner {
  display: none;
  width: 20px;
  height: 20px;
  border: 2px solid $color-default-white;
  border-radius: 100%;

  border-top: 2px solid transparent;
  animation: load-animate infinite linear 1s;
}

@keyframes load-animate {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
    opacity: 0.35;
  }

  100% {
    transform: rotate(360deg);
  }
}

.btn--in-basket {
  cursor: initial;

  &:focus,
  &:active {
    outline: none;
  }
}
</style>
