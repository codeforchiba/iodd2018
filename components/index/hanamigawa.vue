<template>
  <section id="hanamigawa">
    <h1>チーム花見川区</h1>

    <ul class="team">
      <li>
        <img src="~/assets/hanamigawa/pic_1.jpg">
      </li>
      <li class="comment">
        <div class="icon">
          <img src="~/assets/hanamigawa/icon.jpg">
        </div>
        <p class="arrow-box">さとうさんのことば</p>
      </li>
    </ul>

    <h2>プレゼン資料</h2>
    <ul class="shelf">
      <li>
        <a href="/hanamigawa/doc_1.pdf" target="_blank">
          <img src="~/assets/hanamigawa/doc_1.jpg">
        </a>
      </li>
      <li>
        <a href="/hanamigawa/doc_2.pdf" target="_blank">
          <img src="~/assets/hanamigawa/doc_2.jpg">
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import 'assets/mixins.scss';

  #hanamigawa {
    $hanamigawa-color: rgb(252, 74, 120);

    @include ward-box($hanamigawa-color);

    background-color: $hanamigawa-color;
    color: white;
  }
</style>
