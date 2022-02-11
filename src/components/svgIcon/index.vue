<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{color: color}">
    <use :xlink:href="iconName" rel="external nofollow" />
  </svg>
</template>

<script setup>


import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

const iconName = computed(()=>`#icon-${props.name}`);
const svgClass = computed(()=> {
  // console.log(props.name, 'props.name');
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
});
</script>

<style lang='less'>
.svg-icon {
  width: 35px;
  height: 35px;
  fill: currentColor;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
