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

    selectList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {

    };
  },

  methods: {

  },
};
</script>

<template>
  <div class="flashcard-mode-two">
    <el-form-item
      label="答案">
      <el-select
        v-model="content.answer.select"
        placeholder="请选择答案">
        <el-option
          v-for="item in selectList"
          :key="item"
          :label="item"
          :value="item"/>
      </el-select>
    </el-form-item>

    <el-form-item
      label="图片">
      <AppSelectCourse
        v-model="content.answer.url"
        course-type="image"/>
    </el-form-item>

    <el-form-item
      label="题目干扰项">
      <div class="flashcard-mode-two__term">
        <div
          v-for="(item,index) in content.topic"
          :key="index"
          class="flashcard-mode-two-term__block">
          <div class="flashcard-mode-two-term__index">
            <span>{{ index + 1 }}</span>
            <AppSelectCourse
              v-model="content.topic[index]"
              course-type="image"
              class="flashcard-mode-two-term__select"/>
          </div>
        </div>
      </div>
    </el-form-item>

    <el-form-item
      label="选项干扰项">
      <div class="flashcard-mode-two__term">
        <div
          v-for="(item,index) in content.options"
          :key="index"
          class="flashcard-mode-two-term__block">
          <div class="flashcard-mode-two-term__index">
            <span>{{ index + 1 }}</span>
            <AppSelectCourse
              v-model="content.options[index]"
              course-type="image"
              class="flashcard-mode-two-term__select"/>
          </div>
        </div>
      </div>
    </el-form-item>
  </div>
</template>

<style lang="postcss">
.flashcard-mode-two__term{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.flashcard-mode-two-term__block{
  position: relative;
}

.flashcard-mode-two-term__index > span{
  position: absolute;
  top: 0;
}

.flashcard-mode-two-term__select{
  display: inline-block;
  margin-left: 20px;
}
</style>
