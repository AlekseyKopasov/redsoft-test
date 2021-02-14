<template>
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
</template>

<script>
import mainNav from '@/components/MainNav.vue';
import logo from '@/components/Logo.vue';
import search from '@/components/Search.vue';

export default {
  components: {
    logo,
    mainNav,
    search,
  },
}
</script>