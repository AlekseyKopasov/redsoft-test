<template>
  <div class="paintings">
    <div class="container">
      <h1 class="title title-page">Картины эпохи Возрождения</h1>
      <div class="paintings-list">
        <ul>
          <li>
            <a href="#">
              <div class="paintings-list__img">
                <img
                  src="~@/assets/img/content/products/product-1@1x.jpg"
                  srcset="~@/assets/img/content/products/product-1@2x.jpg 2x"
                  width="280"
                  height="360"
                  alt="Рождение Венеры"
                />
              </div>
              <div class="paintings-list__content">
                <div class="paintings-list__title">
                  <h2>«Рождение Венеры»</h2>
                </div>
                <div class="paintings-list__painter">
                  <p>Сандро Боттичелли</p>
                </div>
              </div></a
            >
            <div class="paintings-list__footer">
              <div class="paintings-list__price-wrap">
                <div class="paintings-list__price paintings-list__price--old">
                  <span>2000000 $</span>
                </div>
                <div class="paintings-list__price">
                  <span>1000000 $</span>
                </div>
              </div>
              <div class="paintings-list__btn-wrap">
                <buttonsBuy />
              </div>
              <div class="paintings-list__sales-text js-is-hidden">
                <p></p>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <div class="paintings-list__img">
                <img
                  src="~@/assets/img/content/products/product-2@1x.jpg"
                  srcset="~@/assets/img/content/products/product-2@2x.jpg 2x"
                  width="280"
                  height="360"
                  alt="Тайная вечеря"
                />
              </div>
              <div class="paintings-list__content">
                <div class="paintings-list__title">
                  <h2>«Тайная вечеря»</h2>
                </div>
                <div class="paintings-list__painter">
                  <p>Леонардо да Винчи</p>
                </div>
              </div></a
            >
            <div class="paintings-list__footer">
              <div class="paintings-list__price-wrap">
                <div class="paintings-list__price paintings-list__price--old">
                  <span></span>
                </div>
                <div class="paintings-list__price">
                  <span>5000000 $</span>
                </div>
              </div>
              <div class="paintings-list__btn-wrap">
                <buttonsBuy />
              </div>
              <div class="paintings-list__sales-text js-is-hidden">
                <p></p>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <div class="paintings-list__img">
                <img
                  src="~@/assets/img/content/products/product-3@1x.jpg"
                  srcset="~@/assets/img/content/products/product-3@2x.jpg 2x"
                  width="280"
                  height="360"
                  alt="Сотворение Адама"
                />
              </div>
              <div class="paintings-list__content">
                <div class="paintings-list__title">
                  <h2>«Сотворение Адама»</h2>
                </div>
                <div class="paintings-list__painter">
                  <p>Микеланджело</p>
                </div>
              </div></a
            >
            <div class="paintings-list__footer">
              <div class="paintings-list__price-wrap">
                <div class="paintings-list__price paintings-list__price--old">
                  <span>6000000 $</span>
                </div>
                <div class="paintings-list__price">
                  <span>5000000 $</span>
                </div>
              </div>
              <div class="paintings-list__btn-wrap">
                <buttonsBuy />
              </div>
              <div class="paintings-list__sales-text js-is-hidden">
                <p></p>
              </div>
            </div>
          </li>
          <li class="js-sale-product">
            <a href="#">
              <div class="paintings-list__img">
                <img
                  src="~@/assets/img/content/products/product-4@1x.jpg"
                  srcset="~@/assets/img/content/products/product-4@2x.jpg 2x"
                  width="280"
                  height="360"
                  alt="Урок анатомии"
                />
              </div>
              <div class="paintings-list__content">
                <div class="paintings-list__title">
                  <h2>«Урок анатомии»</h2>
                </div>
                <div class="paintings-list__painter">
                  <p>Рембрандт</p>
                </div>
              </div></a
            >
            <div class="paintings-list__footer">
              <div class="paintings-list__price-wrap">
                <div class="paintings-list__price paintings-list__price--old">
                  <span></span>
                </div>
                <div class="paintings-list__price"><span></span></div>
              </div>
              <div class="paintings-list__btn-wrap">
                <buttonsBuy />
              </div>
              <div class="paintings-list__sales-text js-is-hidden">
                <p>Продано на аукционе</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import buttonsBuy from "./ButtonsBuy";

export default {
  components: {
    buttonsBuy,
  },
};
</script>