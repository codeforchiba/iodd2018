<template>
  <section id="inage">
    <h1>チーム稲毛区</h1>

    <ul class="prize">
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> 自由テーマ 1位
      </li>
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> 官民連携度 1位
      </li>
      <li>
        <i class="fa fa-star" aria-hidden="true"></i> プレゼンター 1位
      </li>
    </ul>

    <ul class="team">
      <li>
        <img src="~/assets/inage/pic_1.jpg">
      </li>
      <li class="comment">
        <div class="icon">
          <img src="~/assets/inage/icon.jpg">
        </div>
        <p class="arrow-box">(後日掲載)</p>
      </li>
    </ul>

    <h2>プレゼン資料</h2>
    <ul class="shelf">
      <li>
        <a href="/inage/doc_1.pdf" target="_blank">
          <img src="~/assets/inage/doc_1.jpg">
        </a>
      </li>
      <li>
        <a href="/inage/doc_2.pdf" target="_blank">
          <img src="~/assets/inage/doc_2.jpg">
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import 'assets/mixins.scss';

  #inage {
    $inage-color: rgb(255, 204, 0);

    @include ward-box($inage-color);

    background-color: $inage-color;
    color: black;
  }
</style>
