<template>
  <section id="media">
    <h1>メディア</h1>
    <h2>ダイジェストムービー</h2>
    <div class="video-container">
      <iframe src="https://www.youtube-nocookie.com/embed/s8uiBCwUts0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

    <h2>日本経済新聞</h2>
    <p><a href="https://www.nikkei.com/article/DGKKZO27825290X00C18A3L71000/" target="_blank">オープンデータ 地域を活性化</a></p>
    <p class="supplement">住民・企業の活用拡大 千葉市６区、魅力ＰＲ競う</p>

    <h2>J:COM</h2>
    <p><a href="https://c.myjcom.jp/jch/p/dn_chibachuo/index.html" target="_blank">デイリーニュース 3/6(火)</a></p>
    <p class="supplement">放送済</p>

    <h2>地域新聞社</h2>
    <p><a href="https://chiikinews.co.jp/" target="_blank">ちいき新聞</a></p>
    <p class="supplement">4/13日号(幕張、美浜、千葉北、稲毛、千葉中央、蘇我)</p>
    <p class="supplement">4/20日号(千葉南)</p>

    <h2>ちば○○部</h2>
    <p><a href="http://chiba-rucy.com/archives/1044" target="_blank">シビックパワーバトル</a></p>

    <h2>福谷章子のまちづくり</h2>
    <p><a href="https://blog.goo.ne.jp/shoukosan_001/e/84308dd7d6a7ac90004f6e75980e1c66" target="_blank">緑区が金賞をいただきました！</a></p>
    <p><a href="https://blog.goo.ne.jp/shoukosan_001/e/17ba6b089934c8f945381d4da1643882" target="_blank">緑区の良いところ</a></p>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/variables.scss";
@import "assets/mixins.scss";

#media {
  $media-color: rgb(126, 122, 127);
  @include content-box($media-color);

  background-color: $media-color;
  color: white;

  p {
    a:link, a:visited {
      color: $link-color;
    }
  }

  iframe {
    display: block;
    margin: 16px auto;
  }

  @media screen and (max-width: #{$phone-max}) {
    padding-bottom: 24px;

    h2 {
      text-align: left;
    }

    p {
      font-size: 18px;
      margin: 0 12px;
      word-break: break-all;

      &.supplement {
        font-size: 14px;
      }
    }

    .video-container {
      position:relative;
      margin-bottom: 36px;
      padding-bottom:56.25%;
      padding-top:30px;
      height:0;
      overflow:hidden;

      iframe, object, embed {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
      }
    }
  }

  @media screen and (min-width: #{$phone-over}) {
    h2 {
      font-weight: normal;
      margin: 32px 0;
    }

    p {
      text-align: center;
      font-size: 18px;

      &.supplement {
        font-size: 16px;
      }
    }

    iframe {
      width: 560px;
      height: 315px;
    }
  }
}
</style>
