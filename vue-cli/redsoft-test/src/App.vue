<template>
  <div id="app">
    <!-- sprite -->
    <svgSprite />

    <div class="wrapper">
      <pageHeader />

      <main>
        <paintingList />
      </main>

      <pageFooter />
    </div>
  </div>
</template>

<script>
import svgSprite from '@/components/UI/SVGSprite.vue';
import pageHeader from '@/components/Header.vue';
import pageFooter from '@/components/Footer.vue';
import paintingList from '@/components/PaintingList.vue';

export default {
  name: 'App',

  components: {
    svgSprite,
    pageHeader,
    pageFooter,
    paintingList,
  },
};
</script>

<style lang="scss">
@import "assets/css/style.min.css";
</style>
