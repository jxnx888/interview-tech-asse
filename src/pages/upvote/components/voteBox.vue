<template>
  <div
      :class="`vote-each ${voteStatus ? 'selected' : 'not-selected'}`"
      @click="changeGroupVoteVal">
    <svg-icon
        :svgClass="`${voteStatus ? 'selected' : 'not-selected'}`"
        :name="'arrow-up'"
        :color="`${voteStatus ? '#253CF2' : '#343A40'}`"
    />
<!--    <img src="/src/assets/svg/icon-arrow-up.svg" alt="">-->
  </div>
</template>

<script setup>
import {defineProps, ref} from "vue";
import {useStore} from "vuex";

const props = defineProps({
  groupIndex: {
    type: Number
  },
  voteIndex: {
    type: Number
  },
  voteStatus: {
    type: Boolean
  }
})

const store = useStore()

const changeGroupVoteVal = () => {
  store.commit('changeSameGroupVoteVal', {
    groupIndex: props.groupIndex,
    voteIndex: props.voteIndex,
  })
}
</script>

<style scoped lang="less">

.vote-each {
  width: 65px;
  height: 65px;
  margin: 0 5px;
  border-radius: 5px;
  position: relative;

  &.selected {
    background: #E5E8FD;
    fill: #253CF2;
  }

  &.not-selected {
    background: #F4F6F8;
    fill: #343A40;
  }

}
</style>
