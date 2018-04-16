<template>
  <section id="mihama">
    <h1>美浜区</h1>

    <ul class="prize">
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> テーマ「住む」 1位
      </li>
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> シティプロモーション 1位
      </li>
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> データ 1位
      </li>
    </ul>

    <ul class="team">
      <li>
        <img src="~/assets/mihama/pic_1.jpg">
      </li>
      <li class="comment">
        <div class="octaicon">
          <img src="~/assets/mihama/icon.jpg">
        </div>
        <p class="arrow-box">せんせいのおことば</p>
      </li>
    </ul>

    <h2>プレゼン資料</h2>
    <ul class="shelf">
      <li>
        <a href="/mihama/doc_1.pdf" target="_blank">
          <img src="~/assets/mihama/doc_1.jpg">
        </a>
      </li>
      <li>
        <a href="/mihama/doc_2.pdf" target="_blank">
          <img src="~/assets/mihama/doc_2.jpg">
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import 'assets/mixins.scss';

  #mihama {
    @include ward-box;

    background-color: rgb(0, 12, 165);
    color: white;
  }
</style>
