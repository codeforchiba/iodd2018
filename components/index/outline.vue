<template>
  <section id="outline">
    <h1>IODD 2018 アーカイブ</h1>
    <p class="caption">シビックパワーバトル 千葉市６区対抗戦</p>
    <p class="date">2018年3月3日(土) 10:00</p>
    <p class="location">きぼーる 1F アトリウム</p>

    <ul>
      <li>
        <h2>シビックパワーバトルとは？</h2>
        <p class="description">シビックパワーバトルは、主にオープンデータを活用し、今まで埋もれていた、または知らなかったまちの魅力を発掘し、地域の魅力発信を目的としたイベントです。市民や団体、企業にくわえて自治体がバトルのために協力しあうことで、あらたな魅力発信の仕組みづくりに繋げていきます。</p>
      </li>
      <li>
        <h2>IODD とは？</h2>
        <p class="description">IODD(= International Open Data Day) は、世界中で同時開催されるオープンデータのイベントです。2017年は、世界346都市で開催されました。各都市の取り組みは多種多様となっており、2018年、千葉市ではシビックパワーバトルを開催しました。</p>
      </li>
    </ul>

    <img src="~/assets/index_outline.jpg">
  </section>
</template>

<style lang="scss" scoped>
@import "assets/variables.scss";
@import "assets/mixins.scss";

#outline {
  $outline-color: rgb(168, 6, 25);
  @include content-box($outline-color);

  background-color: $outline-color;
  color: white;

  h1 {
    margin-bottom: 24px;
    word-break: keep-all;
  }

  h2 {
    margin: 16px 0;
  }

  p {
    line-height: 1.5;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  img {
    display: inline-block;
    width: 100%;
    margin: 36px 0;

    vertical-align: bottom;
  }

  @media screen and (max-width: #{$phone-max}) {
    h1 {
      padding: 0 24px;
    }

    p {
      margin: 0 16px;

      &.caption, &.date, &.location {
        text-align: center;
      }

      &.caption {
        margin-bottom: 24px;
      }
    }

    img {
      margin: 36px 0 0;
    }
  }

  @media screen and (min-width: #{$phone-over}) {
    margin-top: 520px;
    padding: 56px 30px;

    h1 {
      font-size: 32px;
      text-align: right;
    }

    p {
      &.caption, &.date, &.location {
        text-align: right;
      }
    }

    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;

      li {
        width: 45%;

        & + li {
          margin-left: 24px;
        }
      }
    }

    img {
      margin: 36px 0;
    }
  }
}
</style>
