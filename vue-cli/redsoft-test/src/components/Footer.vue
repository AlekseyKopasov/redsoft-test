<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <!-- logo -->
        <logo />
        <!-- nav -->
        <mainNav :extraClass="'footer__nav'" />
        <a class="footer__phone" href="tel:+74955555555"
        >+7 (495) 555-55-55
          <svg width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-phone"></use></svg
          ></a>
        <address class="footer__address">
          г. Москва, ул. Расплетина, 24
          <svg width="16" height="16" aria-hidden="true">
            <use xlink:href="#icon-pin"></use>
          </svg>
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
import mainNav from '@/components/MainNav.vue';
import logo from '@/components/Logo.vue';

export default {
  components: {
    logo,
    mainNav,
  },
}
</script>