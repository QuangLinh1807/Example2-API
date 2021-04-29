<template>
  <div>
    <div>
      <span
        >Total item
        <select v-model.number="numberRow">
          <option v-for="item in totalItemPage" :key="item.id">{{
            item.value
          }}</option>
        </select>
        / page</span
      >
    </div>
    <div class="justify-between">
      <button
        :class="[isPrev ? 'btn-disabled' : '', 'btn']"
        @click="prevPage"
        :disabled="isPrev"
      >
        PREVIOUS
      </button>
      <button
        :class="[isNext ? 'btn-disabled' : '', 'btn']"
        @click="nextPage"
        :disabled="isNext"
      >
        NEXT
      </button>
      <div>Page current: {{ currentPage + 1 }}/{{ totalPage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: () => {
        return [];
      },
    },
    totalPage: {
      type: Number,
      default: () => {
        return [];
      },
    },
    numberRow: {
      type: Number,
      default: () => {
        return [];
      },
    },
    isPrev: {
      type: Boolean,
      default: () => {
        return [];
      },
    },
    isNext: {
      type: Boolean,
      default: () => {
        return [];
      },
    },
    prevPage: {
      type: Function,
      default: () => {
        return [];
      },
    },
    nextPage: {
      type: Function,
      default: () => {
        return [];
      },
    },
    totalItemPage: {
      type: Array,
      requied: true,
    },
  },
};
</script>

<style scoped></style>
