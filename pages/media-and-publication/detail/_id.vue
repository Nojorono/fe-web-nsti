<template>
  <div class="detail-media-parent-wrapper px-lg-15 px-sm-10">
    <div class="defaultGolden--text">
      <div class="news-date mb-10 pt-10">
        <h2>{{ newsData[$route.params.id - 1].date }}</h2>
      </div>

      <div class="news-title my-10">
        <h1>{{ newsData[$route.params.id - 1].title }}</h1>
      </div>
    </div>

    <div class="news-content">
      <div class="image-content">
        <v-img
          :src="newsData[$route.params.id - 1].img"
          max-height="auto"
          max-width="auto"
        />
      </div>

      <div
        class="text-content defaultGray--text"
        v-html="newsData[$route.params.id - 1].data"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DetailMedia',
  components: {},
  data() {
    return {
      newsData: [
        {
          date: 'Jakarta, 9 Juni 2022',
          title:
            'J-Live Hadirkan Podcast Live Perdana, Gandeng GJLS Entertainment di Bandung. ',
          img: require('~/assets/images/dummyMediaDetail-1.png'),
          data: `<p>
          J-Live merupakan komunitas yang bertujuan untuk menyajikan berbagai ide kreatif baru, yang dibalut dalam ragam bentuk hiburan. J-live merupakan jawaban untuk generasi muda yang memiliki misi untuk mengembangkan kreativitas tanpa batas dengan rasa bangga. Hadir di tengah anak muda sejak tahun 2017, J-Live aktif berkolaborasi dengan generasi muda kreatif yang mengedepankan kebebasan dalam mengeksplorasi pilihan hidup, serta bangga dengan cara mereka memilih jalan hidupnya. Ragam suguhan J-Live yang dominan berbalut musik alternatif, secara langsung menjadikan J-Live sebagai panggung bagi musik-musik indie dan lokal untuk terus tumbuh dan berkembang. Tak hanya itu, berbagai komunitas kreatif juga dilibatkan dalam ragam kolaborasi apik.
          </p>
          <br>
          <p>
          Acara Live Podcast yang digelar di Bandung ini dipersembahkan oleh J-Live dan Komunitas StandupIndo Bandung. Acara ini menjadi kegiatan perdana yang menyapa langsung Jazzers Bandung setelah badai pandemi beberapa waktu lalu. Hary Hans selaku Koordinator Acara J-Live Podcast Live menyampaikan, “Acara ini merupakan sebuah acara yang tidak hanya menghibur, tetapi juga sebagai panggung untuk komunitas dan Jazzers bertalenta unjuk diri,” Dengan mengusung konsep stand up comedy yang dikemas dengan gaya siaran podcast, GJLS Entertainment —selaku bintang utama acara, sukses mengundang gelak tawa Jazzers di WU Backroom Bandung pada hari Sabtu, 4 Juni 2022.
          </p>
          <br>
          <p>
          “Jazzers Bandung pecah banget, karena acara kali ini melebihi ekspektasi, ternyata teman-teman Jazzers Bandung antusias sampai-sampai 250 tiket pre-sale online GJLS ini habis dalam hitungan jam saja. Tidak hanya itu, kami buka tiket on the spot yang ternyata juga habis terjual,” tutur Hary Hans saat ditemui di tengah acara.
          </p>
          <br>
          <p>
          Hary menambahkan, bahwa antusiasme Jazzers Bandung menginspirasi J-Live untuk menggelar acara off-air lainnya, agar bisa menyapa Jazzers dari berbagai wilayah lain. “Dukungan dan reaksi dari Jazzers Bandung membuat kami bersemangat untuk merancang ragam acara menarik lainnya, mungkin bukan hanya podcast atau stand up saja untuk kedepannya. Rencananya, kami akan menghadirkan acara hiburan yang menyapa Jazzers di daerah Jawa Barat, diantaranya Tasik dan Sukabumi. Di luar pulau Jawa, Kendari akan masuk sebagai salah satu kota yang menarik untuk dilirik J-Live,” tutup Hary.
          </p>`,
        },
        {
          date: 'Pekanbaru, 25 Agustus 2022',
          title:
            'Satu Rasa, Satu Tujuan dalam Menyambut Festival Pacu Jalur 2022.',
          img: require('~/assets/images/dummyMediaDetail-2.png'),
          data: `<p>
          Satu Rasa, Satu Tujuan hadir sejak tahun 2013 ditengah keberagaman adat dan sosial di Indonesia. Selama satu dekade lebih, Satu Rasa, Satu Tujuan berkomitmen untuk beriringan menjaga nilai budaya dan tradisi lokal Indonesia. Sebagai sikap preventif terhadap ancaman pengikisan budaya lokal Indonesia, Satu Rasa, Satu Tujuan secara masif melakukan kolaborasi apik dengan ragam komunitas khas di berbagai daerah Indonesia, salah satunya adalah kolaborasi dengan Festival Pacu Jalur khas Kuantan Singingi.
          </p>
          <br>
          <p>
          Setelah dua tahun lamanya festival Pacu Jalur ditiadakan karena pandemi, hingga akhirnya di tahun 2022 ini, festival kembali digelar dan menjadi momen yang paling dinanti antusias oleh masyarakat Riau dan sekitarnya. Festival Pacu Jalur kembali diadakan pada tanggal 21 Agustus hingga 25 Agustus 2022. Sebagai warisan budaya tak benda yang masuk dalam kalender pariwisata nasional, Festival Pacu Jalur merupakan identitas tradisi bagi masyarakat Riau sejak tahun 1903, dan menjadi simbol kepercayaan masyarakat sebagai puncak perayaan, atas kegiatan yang telah diperjuangkan masyarakat Kuantan Singingi untuk kehidupan setiap tahunnya.
          </p>
          <br>
          <p>
            Diadakan di Tepian Narosa, Teluk Kuantan, Festival Pacu Jalur biasanya digelar berdekatan dengan momen peringatan Hari Kemerdekaan Republik Indonesia. Pada perhelatan ini, biasanya masyarakat di daerah Kuantan Singingi dan sekitar nya akan berdatangan untuk menonton tradisi ini. Selain dapat menaikkan perekonomian setempat, hal ini juga dinilai dapat terus melestarikan tradisi Pacu Jalur yang telah ditetapkan sebagai warisan budaya tak benda oleh Direktorat Warisan dan Diplomasi Budaya.
          </p>
          <br>
          <p>
           Pacu Jalur merupakan simbol budaya yang terdiri dari perpaduan antara unsur olahraga, seni, dan kerohanian. Selain perlombaan, dalam pesta rakyat ini juga terdapat rangkaian hiburan, diantaranya Pekan Raya, Pertunjukan Sanggar Tari, pementasan lagu daerah, Randai Kuantan Singingi - teater musikal khas Kuantan Singingi, dan pementasan kesenian tradisional lainnya yang berasal dari beberapa kabupaten atau kota di Riau.

          </p>
          <br>
          <p>
            Bamba Rianto selaku Ketua Gelanggang Pacu Jalur Tradisional 2022 menyampaikan, bahwa Pacu Jalur merupakan pesta rakyat Kuantan Singingi yang mengandalkan kolaborasi antara masyarakat dengan pemerintah, sehingga festival ini dapat terus dilestarikan dan, berkembang lebih baik lagi dari tahun ke tahun.
          </p>
          <br>
          <p>
             “Sebagai festival yang sangat kental akan tradisi dan sejarah sejak tahun 1903, Pacu Jalur sudah menjadi identitas khas Kuantan Singingi. Berawal dari pesta panen, lalu menjadi perayaan untuk memperingati hari kelahiran Ratu Belanda Wilhelmina saat itu.  Kemudian beralih fungsi hingga saat ini, menjadi bentuk perayaan Hari Kemerdekaan Republik Indonesia. Semangat Pacu Jalur menjadi refleksi masyarakat Indonesia yang saling mengayomi serta bahu membahu dalam mencapai kemenangan,” jelas Bamba Rianto selaku Ketua Gelanggang Pacu Jalur Tradisional 2022.
          </p>
          <br>
          <p>
             “Harapannya, kebudayaan Pacu Jalur ini dapat diteruskan hingga anak cucu kita. Sesuai dengan historisnya, mari kita rayakan Pacu Jalur dengan sukacita dan semangat sportivitas” tutup Bamba Rianto.
          </p>`,
        },
        {
          date: 'Jakarta, 9 Juni 2022',
          title: 'J-LIVE Sukses Meriahkan D13 Hard Festival 2022 di Bandung',
          img: require('~/assets/images/dummyMediaDetail-3.png'),
          data: `<p>
          J-Live merupakan komunitas yang bertujuan untuk menyajikan berbagai ide kreatif baru, yang dibalut dalam ragam bentuk hiburan. J-live merupakan jawaban untuk generasi muda yang memiliki misi untuk mengembangkan kreativitas tanpa batas dengan rasa bangga. Hadir di tengah anak muda sejak tahun 2017, J-Live aktif berkolaborasi dengan generasi muda kreatif yang mengedepankan kebebasan dalam mengeksplorasi pilihan hidup, serta bangga dengan cara mereka memilih jalan hidupnya. Ragam suguhan J-Live yang dominan berbalut musik alternatif, secara langsung menjadikan J-Live sebagai panggung bagi musik-musik indie dan lokal untuk terus tumbuh dan berkembang. Tak hanya itu, berbagai komunitas kreatif juga dilibatkan dalam ragam kolaborasi apik.
          </p>
          <br>
          <p>
          Kali ini, J-Live berkolaborasi dengan Die Hard Festival atau dibaca Die Hard Festival, yaitu sebuah perhelatan yang diadakan oleh komunitas sepeda motor Cosanostra MC Indonesia yang menghadirkan gelaran musik. Digelar pada tanggal 26-27 Agustus 2022 di Bandung, Die Hard Festival turut menghadirkan Burgerkill, Deadsquad, The Sigit, The Paps, dan masih banyak lagi. Tidak hanya gelaran musik, perhelatan apik ini dikemas secara interaktif dengan berbagai macam suguhan acara lainnya, yaitu dengan diadakannya motorcycle custom show, skateboard competition, hot rod car exhibition, meet & greet Indonesia Kustom Culture. Sehingga, Die Hard digelar tidak hanya untuk merayakan ulang tahun Cosanostra MC Indonesia saja, melainkan, kolaborasi J-live dengan Die Hard Festival juga bertujuan untuk berkontribusi dalam membangkitkan perekonomian UMKM di daerah Bandung dan sekitarnya.
          </p>
          <br>
          <p>

      "Kita bekerja sama dengan semua elemen dan sektor masyarakat perhotelan, transportasi, seni, kulinernya. Kita angkat semua di sana, UMKM-nya juga kita angkat untuk membangkitkan seluruh masyarakat dan sektor perekonomian di kota Bandung," Pungkas Riza Mochamad Rinaldhy, selaku Wakil Ketua Umum Cosanostra MC yang sekaligus Ketua Pelaksana Die Hard.
      Hary Hans selaku Brand Representative J-Live juga menyampaikan antusiasmenya terhadap Festival Die Hard kali ini merupakan perhelatan yang ditunggu-tunggu oleh Jazzers Bandung dan sekitarnya, pasalnya Festival Die Hard merupakan perhelatan terbesar yang tidak hanya dihadiri oleh Jazzers Jawa Barat saja, melainkan juga dihadiri oleh berbagai daerah seperti Bikers Community dari DKI Jakarta, Jawa Tengah, Jawa Timur, Sumatra, Bali, hingga Kalimantan.
          </p>
          <br>
          <p>
          “Die Hard Festival ini merupakan acara yang ber-genre rock dan metal pertama di Bandung, sehingga acara ini yang datang tidak hanya bikers di seluruh penjuru Indonesia saja, tetapi juga diramaikan oleh pecinta musik rock dan metal,” jelas Hary.
      “Acara ini digelar selama 2 hari, sukses dan pecah banget! komunitas komunitas yang hadir semuanya blend in, no rusuh, dan bersinergi satu dengan yang lainnya. J-Live harap, tahun depan kami berkesempatan kembali untuk berkolaborasi dengan Die Hard untuk menghibur seluruh Jazzers setia yang ada di Indonesia” Tutup Hary Hans.
          </p>`,
        },
      ],
    }
  },
  head() {
    return {
      title: 'news',
    }
  },
  computed: {
    ...mapGetters(['getDetailMedia']),
  },
  mounted() {
    this.fetchMediaDetail(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchMediaDetail']),
  },
}
</script>

<style lang="scss" scoped>
.detail-media-parent-wrapper {
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.05em;
  .news-date {
    font-family: Barlow, sans-serif;
  }
  .news-title {
    font-family: Barlow, sans-serif;
    font-weight: 700;
    font-size: 2.2em;
  }
  .news-content {
    border-radius: 50px 50px 0 0;
    background-color: #f8f5ec;

    .text-content {
      padding: 3.5rem 7rem;
    }
    @include mobile {
      .text-content {
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
