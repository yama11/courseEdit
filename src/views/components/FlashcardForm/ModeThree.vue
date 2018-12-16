<script>
/**
 * @overview FlashcardModeThree 表单
 *
 * @author suyanping
 */
export default {
  name: 'FlashcardModeThree',

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
  <div class="flashcard-mode-three">
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
      label="内容">
      <el-input
        v-model="content.answer.text"
        placeholder="请输入内容"
        class="flashcard-mode-three__text"/>
    </el-form-item>

    <el-form-item
      label="题目音频">
      <AppSelectCourse
        v-model="content.topic.audio"
        course-type="audio"/>
    </el-form-item>

    <el-form-item
      label="题目干扰项">
      <div class="flashcard-mode-three__term">
        <div
          v-for="(item,index) in content.options"
          :key="index"
          class="flashcard-mode-three-term__block">
          <div class="flashcard-mode-three-term__index">
            <span>{{ index + 1 }}</span>
            <AppSelectCourse
              v-model="item.url"
              course-type="image"
              class="flashcard-mode-three-term__select"/>
          </div>
          <el-input
            v-model="item.text"
            placeholder="请输入内容"
            class="flashcard-mode-three-term__text"/>
        </div>
      </div>
    </el-form-item>

  </div>
</template>

<style lang="postcss">
.flashcard-mode-three__text{
  width: 220px;
}

.flashcard-mode-three__term{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.flashcard-mode-three-term__block{
  position: relative;
  margin-top: 20px;
}

.flashcard-mode-three-term__index > span{
  position: absolute;
  top: 0;
}

.flashcard-mode-three-term__select{
  display: inline-block;
  margin-left: 20px;
}

.flashcard-mode-three-term__text{
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
}
</style>
