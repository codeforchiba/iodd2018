<template>
  <section id="wakaba">
    <h1>チーム若葉区</h1>

    <ul class="prize">
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> 一般投票 1位
      </li>
    </ul>

    <ul class="team">
      <li>
        <img src="~/assets/wakaba/pic_1.jpg">
      </li>
      <li class="comment">
        <div class="icon">
          <img src="~/assets/wakaba/icon.jpg">
        </div>
        <p class="arrow-box">るすさんのことば</p>
      </li>
    </ul>

    <h2>プレゼン資料</h2>
    <ul class="shelf">
      <li>
        <a href="/wakaba/doc_1.pdf" target="_blank">
          <img src="~/assets/wakaba/doc_1.jpg">
        </a>
      </li>
      <li>
        <a href="/wakaba/doc_2.pdf" target="_blank">
          <img src="~/assets/wakaba/doc_2.jpg">
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import 'assets/mixins.scss';

  #wakaba {
    $wakaba-color: rgb(129, 172, 0);

    @include ward-box($wakaba-color);

    background-color: $wakaba-color;
    color: white;
  }
</style>
