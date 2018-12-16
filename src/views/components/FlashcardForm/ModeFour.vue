<script>
/**
 * @overview FlashcardModefour 表单
 *
 * @author suyanping
 */
export default {
  name: 'FlashcardModefour',

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
  <div class="flashcard-mode-four">
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
      label="题目图片">
      <AppSelectCourse
        v-model="content.topic[0]"
        course-type="image"/>
    </el-form-item>

    <el-form-item
      label="题目干扰项">
      <div class="flashcard-mode-four__term">
        <div
          v-for="(item,index) in content.options"
          :key="index"
          class="flashcard-mode-four-term__block">
          <div class="flashcard-mode-four-term__index">
            <span>{{ index + 1 }}</span>
            <AppSelectCourse
              v-model="item.url"
              course-type="image"
              class="flashcard-mode-four-term__select"/>
          </div>
        </div>
      </div>
    </el-form-item>

  </div>
</template>

<style lang="postcss">
.flashcard-mode-four__text{
  width: 220px;
}

.flashcard-mode-four__term{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.flashcard-mode-four-term__block{
  position: relative;
}

.flashcard-mode-four-term__index > span{
  position: absolute;
  top: 0;
}

.flashcard-mode-four-term__select{
  display: inline-block;
  margin-left: 20px;
}
</style>
