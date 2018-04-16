<template>
  <section id="outline">
    <h1>シビックパワーバトル 千葉市６区対抗戦 in IODD 2018</h1>
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

    <p>参加者数 ９８人</p>

    <img src="~/assets/index_outline.jpg">
  </section>
</template>

<style lang="scss" scoped>
#outline {
  margin-top: 520px;
  padding: 56px 30px;

  background-color: rgb(168, 6, 25);
  color: white;

  h1 {
    margin-bottom: 24px;

    font-size: 32px;
    text-align: right;
  }

  h2 {
    margin: 16px 0;

    text-align: center;
  }

  p {
    line-height: 1.5;

    &.date, &.location {
      text-align: right;
    }

    &.description {
    }
  }

  ul {
    list-style-type: none;

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
    display: inline-block;
    width: 100%;
    margin: 36px 0;

    object-fit: contain;
  }
}
</style>
