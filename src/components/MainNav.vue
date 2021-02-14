<template>
  <nav class="main-nav" :class="extraClass">
    <div class="main-nav__wrapper">
      <ul class="main-nav__list">
        <li class="main-nav__item">
          <a class="main-nav__link" href="#">Каталог</a>
        </li>
        <li class="main-nav__item">
          <a class="main-nav__link" href="#">Доставка</a>
        </li>
        <li class="main-nav__item">
          <a class="main-nav__link" href="#">Оплата</a>
        </li>
        <li class="main-nav__item">
          <a class="main-nav__link" href="#">Контакты</a>
        </li>
        <li class="main-nav__item">
          <a class="main-nav__link" href="#">О галерее</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    extraClass: {
      type: String,
      require: false,
      default: '',
    },
  },
};
</script>