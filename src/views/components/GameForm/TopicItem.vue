<script>
/**
 * @overview TopicItem -- 游戏题目
 *
 * @author suyanping
 */
export default {
  name: 'TopicItem',

  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectList: ['A', 'B', 'C', 'D'],

      answerType: [{ type: '是', value: true }, { type: '否', value: false }],
    };
  },

  methods: {
    delTopic(index) {
      this.$confirm(
        '确定删除该题目？',
        '删除确认',
        {
          showCancelButton: true,
          type: 'warning',
          confirmButtonText: '删除',
          confirmButtonClass: 'el-button--danger',
        })
        .then(() => {
          this.$emit('delTopic', index);
        })
        .catch(() => {});
    },
  },
};
</script>

<template>
  <div class="topic-item">
    <div
      v-for="(item,index) in value"
      :key="index"
      class="topic-item__block">

      <el-button
        v-if="value.length > 1"
        type="danger"
        size="small"
        class="topic-item__del"
        @click="delTopic(index)">
        删除
      </el-button>

      <span>{{ index + 1 }}.</span>

      <el-form-item
        label="题目内容"
        class="topic-item__title">
        <el-input
          v-model="item.title"
          placeholder="请输入题目"/>
      </el-form-item>

      <el-form-item
        label="题目音频">
        <AppSelectCourse
          v-model="item.clipUrl"
          course-type="audio"/>
      </el-form-item>

      <el-form-item
        label="题目选项">
        <div
          class="topic-item-option">
          <div
            v-for="(itemOption,indexOption) in item.options"
            :key="indexOption"
            class="topic-item-option__block">

            <div class="topic-item-option__index">
              <span>{{ selectList[indexOption] }}</span>
              <AppSelectCourse
                v-model="itemOption.imgUrl"
                course-type="image"
                class="topic-item-option__select"/>
            </div>

            <el-input
              v-model="itemOption.content"
              placeholder="请输入内容"
              class="topic-item-option__text"/>

            <div class="topic-item-option__answer">
              <span>正确答案</span>
              <el-select
                v-model="itemOption.isRightOption"
                placeholder="请选择答案">
                <el-option
                  v-for="(item,index) in answerType"
                  :key="index"
                  :label="item.type"
                  :value="item.value"/>
              </el-select>
            </div>
          </div>
        </div>
      </el-form-item>
    </div>
  </div>
</template>

<style lang="postcss">
.topic-item__block{
  padding: 10px 20px;
  margin-bottom: 5px;
  border: 1px solid gainsboro;
  position: relative;
}

.topic-item__del{
  position: absolute;
  right: 10px;
}

.topic-item__block>span{
  position: absolute;
  left: 10px;
}

.topic-item__title{
  display: inline-block;
}

.topic-item__title .el-input{
  width: 320px;
}

.topic-item-option{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.topic-item-option__block{
  position: relative;
  width: 40%;
  margin-top: 20px;
}

.topic-item-option__index > span{
  position: absolute;
  top: 0;
}

.topic-item-option__select{
  display: inline-block;
  margin-left: 20px;
}

.topic-item-option__text{
  margin-top: 10px;
  margin-left: 10px;
  width: 100%;
}

.topic-item-option__answer{
  margin-top: 10px;
}

.topic-item-option__answer .el-input{
  display: inline-block;
  width: 80%;
}
</style>
