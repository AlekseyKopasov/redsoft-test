<template>
  <div id="app">
    <div style="display: none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <symbol id="icon-check">
          <path
            d="M14.531 1.81l-8.898 9.427-4.285-4.045"
            stroke="#F4F6F9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </symbol>
        <symbol id="icon-phone">
          <path
            d="M14.686 12.073l-2.162-2.167c-.43-.43-1.144-.417-1.59.03l-1.089 1.092a28.39 28.39 0 01-.215-.12c-.687-.382-1.629-.906-2.62-1.9-.993-.995-1.516-1.94-1.898-2.63l-.118-.21.732-.732.359-.36c.446-.448.459-1.163.029-1.594L3.952 1.314c-.43-.43-1.143-.417-1.59.03l-.609.615.017.016a3.534 3.534 0 00-.502.888c-.118.31-.19.604-.224.9-.285 2.372.796 4.54 3.731 7.482 4.058 4.066 7.327 3.76 7.468 3.744a3.645 3.645 0 001.784-.728l.013.012.617-.606c.446-.447.459-1.162.03-1.594z"
            fill="#555"
          />
        </symbol>
        <symbol id="icon-pin">
          <path
            d="M8.07 1A5.076 5.076 0 003 6.07c0 3.47 4.537 8.563 4.73 8.779a.457.457 0 00.68 0c.193-.216 4.73-5.31 4.73-8.779A5.076 5.076 0 008.07 1zm0 7.621a2.554 2.554 0 01-2.55-2.55 2.554 2.554 0 012.55-2.552 2.554 2.554 0 012.551 2.551 2.554 2.554 0 01-2.55 2.551z"
            fill="#555"
          />
        </symbol>
      </svg>
    </div>
    <div class="wrapper">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <!-- logo -->
            <logo />
            <!-- nav -->
            <mainNav :extraClass="'header__nav'" />
            <!-- search -->
            <div class="header_search">
              <search />
            </div>
          </div>
        </div>
      </header>

      <main>
        <paintingList />
      </main>

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
    </div>
  </div>
</template>

<script>
import logo from "@/components/Logo.vue";
import mainNav from "@/components/MainNav.vue";
import search from "@/components/Search.vue";
import paintingList from "@/components/PaintingList.vue";

export default {
  name: "App",
  components: {
    logo,
    mainNav,
    search,
    paintingList,
  },
};
</script>

<style landg="scss">
@import "assets/css/style.min.css";
</style>
