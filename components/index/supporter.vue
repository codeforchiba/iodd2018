<template>
  <section id="supporter">
    <h1>会場の声</h1>
    <ul>
      <li>
        <div class="wrapper">
          <div class="icon">
            <img src="~/assets/mc.jpg">
          </div>
          <p class="arrow-box">MCとして一日イベントに参加し、進行のことで頭がいっぱいでしたが、6区みなさんの２つのプレゼンを拝聴し、その地域ごとの特色と強み、またその地域ならではの課題を知るきっかけになりました。コーディネーターのみなさん、参加されたみなさん、運営関係者のみなさん、ありがとうございました😊</p>
        </div>
      </li>
      <li>
        <tweet id="969862621624061952"></tweet>
      </li>
      <li>
        <tweet id="969759752686219264"></tweet>
      </li>
      <li>
        <tweet id="969842553116766208"></tweet>
      </li>
    </ul>
  </section>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  components: {
    tweet: Tweet
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables.scss";
@import "assets/mixins.scss";

#supporter {
  $supporter-color: rgb(164, 66, 220);
  @include content-box($supporter-color);

  background-color: $supporter-color;
  color: white;

  h1 {
    margin-bottom: 24px;
    word-break: keep-all;
  }

  h2 {
    margin: 16px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;

      .wrapper {
        .icon {
          @include circle-icon;
        }

        .arrow-box {
          margin: 12px 32px 38px;
          padding: 12px 12px;
          line-height: 1.5;
        }
      }
    }
  }

  p {
    line-height: 1.5;
  }


  @media screen and (max-width: #{$phone-max}) {
    padding-bottom: 24px;

    ul {
      li {
        .wrapper {
          .icon {
            padding: 18px 0;
            text-align: center;
          }

          .arrow-box {
            @include arrow-box-top;
          }
        }
      }
    }
  }

  @media screen and (min-width: #{$phone-over}) {
    ul {
      li {
        display: flex;

        .wrapper {
          display: flex;

          .icon {
            margin: 0 0 0 32px;
          }

          .arrow-box {
            max-width: 600px;
            @include arrow-box-left;
          }
        }

        &:nth-child(odd) {
          flex-direction: row;
        }

        &:nth-child(even) {
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>
