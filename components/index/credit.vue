<template>
  <footer>
    <h1>主催</h1>
    <p>シビックパワーバトル 千葉市6区対抗戦実行委員会</p>
    <h2>後援</h2>
    <p>千葉市</p>
    <h2>共催</h2>
    <ul>
      <li><a href="http://www.code4chiba.org/" target="_blank"><img src="~/assets/logo_cfc.jpg" alt="NPO法人 Code for Chiba"></a></li>
      <li><a href="https://www.facebook.com/penguins.community/" target="_blank">ぺんぎん不動産</a></li>
      <li><a href="http://chiba-rucy.com/" target="_blank">ちば○○部</a></li>
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
@import "assets/variables.scss";
@import "assets/mixins.scss";

footer {
  $credit-color: rgb(168, 6, 25);
  @include content-box($credit-color);

  background-color: $credit-color;
  color: white;

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
        color: $link-color;
      }

      & + li {
        margin-top: 16px;
      }
    }
  }

  @media screen and (max-width: #{$phone-max}) {
    h1, h2 {
      margin: 24px 0;
    }

    ul {
      li {
        img {
          max-width: 80%;
        }
      }
    }

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: #{$phone-over}) {
    h2 {
      font-weight: normal;
      margin: 32px 0;
    }

    ul {
      li {
        img {
          width: 320px;
        }
      }
    }

    img {
      width: 600px;
    }
  }
}
</style>
