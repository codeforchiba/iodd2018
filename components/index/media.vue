<template>
  <section id="media">
    <h1>メディア</h1>
    <h2>ダイジェストムービー</h2>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/s8uiBCwUts0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    <h2>日本経済新聞</h2>
    <h3>オープンデータ 地域を活性化 住民・企業の活用拡大 千葉市６区、魅力ＰＲ競う</h3>
    <p><a href="https://www.nikkei.com/article/DGKKZO27825290X00C18A3L71000/">https://www.nikkei.com/article/DGKKZO27825290X00C18A3L71000/</a></p>

    <h2>J:COM</h2>
    <h3>デイリーニュース 3/6(火) [放送済]</h3>
    <p><a href="https://c.myjcom.jp/jch/p/dn_chibachuo/index.html">https://c.myjcom.jp/jch/p/dn_chibachuo/index.html</a></p>

    <h2>ちば○○部</h2>
    <h3>シビックパワーバトル</h3>
    <p><a href="http://chiba-rucy.com/archives/1044">http://chiba-rucy.com/archives/1044</a></p>

    <h2>福谷章子のまちづくり</h2>
    <h3>緑区が金賞をいただきました！</h3>
    <p><a href="https://blog.goo.ne.jp/shoukosan_001/e/84308dd7d6a7ac90004f6e75980e1c66">https://blog.goo.ne.jp/shoukosan_001/e/84308dd7d6a7ac90004f6e75980e1c66</a></p>
    <h3>緑区の良いところ</h3>
    <p><a href="https://blog.goo.ne.jp/shoukosan_001/e/17ba6b089934c8f945381d4da1643882">https://blog.goo.ne.jp/shoukosan_001/e/17ba6b089934c8f945381d4da1643882</a></p>
  </section>
</template>

<style lang="scss" scoped>
#media {
  margin-top: 520px;
  padding: 56px 30px;

  background-color: rgb(126, 122, 127);
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

  h3 {
    font-weight: normal;
    text-align: center;
  }

  p {
    text-align: center;

    a:link, a:visited {
      color: darkblue;
    }

    & + h3 {
      margin-top: 24px;
    }
  }

  iframe {
    display: block;
    margin: 16px auto;
  }
}
</style>
