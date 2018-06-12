<template>
  <div class="audio_area" id="audioplayer">
   
      <div class="audio_wrp" id="music" preload="true">
        <div class="audio_play_area play " @click="startPlay" id="pButton ">
          <i class="icon_audio_default " v-show="!playing"></i>
          <i class="icon_audio_playing " v-show="playing"></i>
        </div>
        <div class="audio_length tips_global ">{{time}}</div>
        <div class="audio_info_area ">
          <strong class="audio_title ">{{details.title}}</strong>
          <div class="audio_source tips_global ">{{author}}</div>
        </div>
        <div id="timeline" class="progress_bar">
          <div id="playhead" :style="{'width':progress}"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    details:{
      type:Object,
      default:{
        title:"",

      }
    }
  }
}
</script>
<style>

</style>


