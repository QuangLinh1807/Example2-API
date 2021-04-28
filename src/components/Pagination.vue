<template>
    <div>
      <button :class="[isPrev ? 'btn-disabled': '', 'btn']" @click="prevPage" :disabled="isPrev">PREVIOUS</button>
      <button :class="[isNext ? 'btn-disabled': '', 'btn']" @click="nextPage" :disabled="isNext">NEXT</button>
      <div>Page current: {{currentPage + 1}}/{{ totalPage }}</div>
    </div>
    
</template>

<script>
export default {
    props:{
        currentPage:Number,
        totalPage: Number,
        numberRow: Number,
        isPrev: Boolean,
        isNext: Boolean,
        prevPage: {
          type: Function,
          default: ()=>{
            return[]
          }
        },
        nextPage: {
          type: Function,
          default: ()=>{
            return[]
          }
        },
    },
}
</script>

<style scoped>

</style>