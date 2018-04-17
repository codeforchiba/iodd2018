<template>
  <section id="chuo">
    <h1>チーム中央区</h1>

    <ul class="team">
      <li>
        <img src="~/assets/chuo/pic_2.jpg">
      </li>
      <li class="comment">
        <div class="icon">
          <img src="~/assets/chuo/icon.jpg">
        </div>
        <p class="arrow-box">あしはらさんのことば</p>
      </li>
    </ul>

    <h2>プレゼン資料</h2>
    <ul class="shelf">
      <li>
        <a href="/chuo/doc_1.pdf" target="_blank">
          <img src="~/assets/chuo/doc_1.jpg">
        </a>
      </li>
      <li>
        <a href="/chuo/doc_2.pdf" target="_blank">
          <img src="~/assets/chuo/doc_2.jpg">
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/mixins.scss';

#chuo {
  $chuo-color: rgb(254, 0, 0);

  @include ward-box($chuo-color);

  background-color: $chuo-color;
  color: white;
}
</style>
