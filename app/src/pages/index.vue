<template>
  <div>
    <v-container class="pa-0" fluid>
      <Carousel />
    </v-container>
    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          RECENT NEWS
        </p>
      </v-row>
      <v-row class="pa-5">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          RECENT NEWS (via Firestore)
        </p>
      </v-row>
      <News />
    </v-container>

    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          MESSAGE
        </p>
      </v-row>
      <v-row class="blue-grey lighten-5 pa-5">
        <v-col cols="8" class="pa-5 text">
          「私一人が動いても何も変わらない」そう思っていませんか？<br>
          たしかに、一人の力は弱いかもしれません。しかし、誰かが動き始めることで人々が繋がり、ムーブメントになり、社会が変わっていきます。<br>
          Code for Japan は、何かを変えたい人を歓迎します。組織を超えたオープンな繋がりを通じて、ひとりひとりが活き活きと、より良い暮らしをつくっていく。そのための仕掛けを用意しています。
          何をつくりたいかは、あなた次第。ワクワクする活動が待っています。ぜひ Code for Japan の仲間とともに最初の一歩を踏み出しましょう。<br><br>
          Happy Civic Hacking!
          <v-row>
            <v-col cols="12" align="right">
              Code for Japan代表 関 治之
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          asdf
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          WHAT WE DO
        </p>
      </v-row>
      <v-row class="blue-grey lighten-5 pa-5">
        <v-col cols="8">
          <!-- 画像はる -->
        </v-col>
        <v-col cols="4">
          asdf
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          FOR PEOPLE
        </p>
      </v-row>
      <v-row class="blue-grey lighten-5 pa-5">
        <v-col cols="8">
          <!-- 画像はる -->
        </v-col>
        <v-col cols="4">
          asdf
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          FOR STUDENTS
        </p>
      </v-row>
      <v-row class="blue-grey lighten-5 pa-5">
        <v-col cols="8">
          <!-- 画像はる -->
        </v-col>
        <v-col cols="4">
          asdf
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          FOR UNIVERSITY
        </p>
      </v-row>
      <v-row class="blue-grey lighten-5 pa-5">
        <v-col cols="8">
          <!-- 画像はる -->
        </v-col>
        <v-col cols="4">
          asdf
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <p class="display-1 font-weight-black red--text">
          FOR GOVERNMENT
        </p>
      </v-row>
      <v-row class="blue-grey lighten-5 pa-5">
        <v-col cols="8">
          <!-- 画像はる -->
        </v-col>
        <v-col cols="4">
          asdf
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="center">
      <a href="https://twitter.com/codeforuniv" target="_blank" class="sns-link">
        <i class="fab twitter-icon" />
      </a>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCode-for-University-103516374334392&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId"
        width="450"
        height="80"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </v-row>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import NewsCard from '@/components/NewsCard.vue'
import News from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    NewsCard,
    News
  }
}
</script>

<style lang="sass" scoped>
.text
  line-height: 40px
</style>
