<template>
  <div>
    <v-card-title
      class="font-weight-bold justify-center"
    >
      メンバー
    </v-card-title>
    <v-row
      justify="space-around"
    >
      <v-col
        v-for="(member, index) in members"
        :key="`member-${index}`"
      >
        <v-list-item>
          <v-list-item-icon>
            <img
              :src="member.img"
              :alt="member.nickname"
              width="50"
              height="50"
            >
          </v-list-item-icon>
          <v-list-item-content>
            <div>
              {{ member.name }}
            </div>
            <v-list-item-action-text>
              {{ member.position }}
            </v-list-item-action-text>
            <v-list-item-action-text>
              <v-btn
                v-if="member.twitter"
                :href="member.twitter"
                target="_blank"
                rel="noopener noreferrer"
                small
                icon
              >
                <v-icon
                  size="18"
                >
                  mdi-twitter
                </v-icon>
              </v-btn>
              <v-btn
                v-if="member.slack"
                :href="member.slack"
                target="_blank"
                rel="noopener noreferrer"
                small
                icon
              >
                <v-icon
                  size="18"
                >
                  mdi-slack
                </v-icon>
              </v-btn>
            </v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-card-title
      class="font-weight-bold justify-center"
    >
      会社情報
    </v-card-title>
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <v-list
          flat
          dense
        >
          <v-divider />
          <template>
            <v-list-item
              v-for="(info, index) in infomations"
              :key="`info-list-${index}`"
            >
              <v-list-item-icon>
                <v-icon
                  v-text="info.icon"
                />
              </v-list-item-icon>
              <v-list-item-content>
                <a
                  v-if="info.link"
                  :href="info.link"
                  rel="nofollow"
                  target="_blank"
                  class="text-decoration-none"
                >
                  {{ info.link }}
                </a>
                <div
                  v-else
                  class="text-subtitle-1"
                  v-text="info.text"
                />
              </v-list-item-content>
            </v-list-item>
            <v-divider
              :key="`info-divider-${index}`"
            />
          </template>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import member1 from '~/assets/images/member1.png'
import member2 from '~/assets/images/member2.png'
import member3 from '~/assets/images/member3.png'

export default {
  data () {
    const twitter = 'http://www.example.com'
    const slack = 'http://www.example.org'
    const companyUrl = 'http://www.example.net'
    return {
      index: 0,
      members: [
        { name: 'たかおか', position: '代表', img: member1, twitter, slack },
        { name: 'メンバー１', position: 'エンジニア', img: member2 },
        { name: 'メンバー２', position: 'エンジニア', img: member3 }
      ],
      infomations: [
        { icon: 'mdi-domain', text: '○○株式会社' },
        { icon: 'mdi-link-variant', link: companyUrl },
        { icon: 'mdi-flag', text: '2023年7月に設立' },
        { icon: 'mdi-account-multiple', text: '3人のメンバー' },
        { icon: 'mdi-map-marker', text: '千葉県習志野市津田沼' },
        { icon: 'mdi-handshake', text: '節約サイト「商品価格比較アプリ」運営' }
      ]
    }
  }
}
</script>