<template>
  <div class="vote-box">
    <div class="vote-container">
      <div
          class="each-vote"
          v-for="(item, index) in voteTotal"
          :key="index"
      >
        <voteBox
            :key="item"
            :groupIndex="groupIndex"
            :voteIndex="index"
            :voteStatus="item.value"
        />

      </div>
    </div>
    <div
        class="add-vote"
        @click="addSameVoteItem"
    >
      <svg-icon
          :name="'add'"
          :color="'#343A40'"
      />
    </div>
  </div>

</template>
<script setup>
import voteBox from "./components/voteBox.vue";
import {ref, defineProps, computed} from "vue";
import { useStore } from 'vuex'

const props = defineProps({
  groupIndex: {
    type: Number
  }
})
const store = useStore()
const voteTotal = computed(() => store.state.voteInfo[props.groupIndex])

const addSameVoteItem = () => {
  store.commit('addSameVoteItem', props.groupIndex)
}
</script>

<style scoped lang="less">
.vote-box {
  width: 70%;
  margin: 10px auto;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  .vote-container {
    border: 1px solid #eee;
    width: 75%;
    border-radius: 10px;
    min-height: 88px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    .each-vote {
      height: 70px;
      margin: 5px;
    }
  }
  .add-vote {
    width: 65px;
    height: 65px;
    border-radius: 5px;
    position: relative;
    background: #F4F6F8;
  }
}
</style>
