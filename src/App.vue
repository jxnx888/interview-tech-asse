<template>
  <div id="appContainer">

    <template
        v-for="(item, index) in voteGroups"
        :key="item"
    >
      <Upvote :groupIndex="index" />
    </template>
    <div class="add-container">
      <p>Add Vote group</p>
      <div
          class="add-vote"
          @click="addGroup"
      >
        <svg-icon
            :name="'add'"
            :color="'#343A40'"
        />
      </div>
    </div>

  </div>
</template>
<script setup>
import Upvote from './pages/upvote/index.vue'
import {ref, computed} from "vue";
import { useStore } from 'vuex'

const switchType = ref(true);

const store = useStore()
const voteGroups = computed(() => store.state.voteInfo)
const addGroup = ()=>{
  store.commit('addVoteGroup', voteGroups)
}
</script>
<style scoped lang="less">
#appContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.add-container{
  p{
    padding: 15px;
  }
  .add-vote {
    width: 65px;
    height: 65px;
    border-radius: 5px;
    position: relative;
    background: #F4F6F8;
    margin: auto;
  }
}

</style>
