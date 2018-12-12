<script>
/**
 * @overview FlashcardModeTwo 表单
 *
 * @author suyanping
 */
export default {
  name: 'FlashcardModeTwo',

  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      selectList: ['A', 'B', 'C', 'D'],
    };
  },

  methods: {

  },
};
</script>

<template>
  <div class="flashcard-mode-two">
    <el-select
      v-model="content.answer.select"
      placeholder="请选择答案">
      <el-option
        v-for="item in selectList"
        :key="item"
        :label="item"
        :value="item"/>
    </el-select>
  </div>
</template>

<style lang="postcss">
.flashcard-mode-two{

}
</style>
