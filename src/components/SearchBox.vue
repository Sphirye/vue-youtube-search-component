<template>
  <v-container>
    <v-flex class="d-flex justify-center">
      <v-card class="ma-5"  width="500px" outlined>
        <v-menu offset-y :value="showList" menu-content-elevation="0">

          <template v-slot:activator="{ on }">
              <v-textarea v-on="on" :value="searchQuery" @click="showList = true" @change="n => searchQuery = n" v-debounce:800ms="search" flat solo auto-grow rows="1" label="Search video..."/>
          </template>

          <v-list v-if="videos.length != 0" min-height="10px" max-width="500px">
            <v-list-item v-for="(video, k) in videos" :key="k">
              <v-list-item-title>
                <v-flex class="d-flex" @click="openVideo(video)">

                  <div class="ma-1">
                    <v-img width="120" height="65" :src="video.snippet.thumbnails.default.url"/>
                  </div>

                  <div class="d-flex text-wrap ma-1">
                    <div>
                      <div class="font-weight-bold">{{ video.snippet.title }}</div>
                      <v-spacer/>
                      <div class="text--secondary" v-line-clamp:10="2">{{ video.snippet.description }}</div>
                    </div>
                  </div>

                </v-flex>
            <v-divider/>
              </v-list-item-title>


            </v-list-item>
          </v-list>
        </v-menu>
      </v-card>
    
			</v-flex>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import YouTubeService from "@/service/YouTubeService"
import Video from '@/model/Video'

@Component({
  components: {},
})

export default class SearchBox extends Vue {
  showList: boolean = false
  videos: any = []
  loading: boolean = false
  searchQuery: string = ""

  search(query: string) {
    if ((query != undefined) && (query)) {
      YouTubeService.search(this, query, this.videos)
    }
  }

  openVideo(video: Video) {
    let url: string = `https://www.youtube.com/watch?v=${video.id!.videoId}`
    var win = window.open(url, '_blank');
  }

}
</script>

<style>
.full-height{
  height: 100%;
}

</style>