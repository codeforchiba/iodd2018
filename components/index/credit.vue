<template>
  <footer>
    <h1>主催</h1>
    <p>シビックパワーバトル 千葉市6区対抗戦実行委員会</p>
    <h2>後援</h2>
    <p>千葉市</p>
    <h2>共催</h2>
    <ul>
      <li>NPO法人 Code for Chiba | <a href="http://www.code4chiba.org/">http://www.code4chiba.org/</a></li>
      <li>ぺんぎん不動産 | <a href="https://www.facebook.com/penguins.community/">https://www.facebook.com/penguins.community/</a></li>
      <li>ちば○○部 | <a href="http://chiba-rucy.com/">http://chiba-rucy.com/</a></li>
    </ul>
    <h2>協力</h2>
    <ul>
      <li>株式会社omegane</li>
      <li>シビックパワーアライアンス</li>
    </ul>
    <p class="cover">
      <img src="~/assets/chiba6.jpg">
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 520px;
  padding: 56px 30px;

  background-color: rgb(168, 6, 25);
  color: white;

  h1 {
    margin-bottom: 24px;

    font-size: 32px;
    text-align: center;
  }

  h2 {
    font-weight: normal;
    margin: 32px 0;

    text-align: center;
  }

  p {
    text-align: center;

    &.cover {
      margin-top: 60px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      text-align: center;
      line-height: 1.5;

      a:link, a:visited {
        color: darkblue;
      }
    }
  }

  img {
    width: 600px;
  }
}
</style>
