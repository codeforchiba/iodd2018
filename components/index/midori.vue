<template>
  <section id="midori">
    <h1>チーム緑区</h1>

    <ul class="prize">
      <li class="big">
        <i class="fa fa-trophy" aria-hidden="true"></i> 金賞
      </li>
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> シティプロモーション 1位
      </li>
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> 官民連携度 1位
      </li>
    </ul>

    <ul class="team">
      <li>
        <img src="~/assets/midori/pic_1.jpg">
      </li>
      <li class="comment">
        <div class="icon">
          <img src="~/assets/midori/icon.jpg">
        </div>
        <p class="arrow-box">ふくたにさんのことば</p>
      </li>
    </ul>

    <h2>プレゼン資料</h2>
    <ul class="shelf">
      <li>
        <a href="/midori/doc_1.pdf" target="_blank">
          <img src="~/assets/midori/doc_1.jpg">
        </a>
      </li>
      <li>
        <a href="/midori/doc_2.pdf" target="_blank">
          <img src="~/assets/midori/doc_2.jpg">
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import 'assets/mixins.scss';

  #midori {
    $midori-color: rgb(11, 83, 28);

    @include ward-box($midori-color);

    background-color: $midori-color;
    color: white;
  }
</style>
