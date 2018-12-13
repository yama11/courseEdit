<script>
/**
 * @overview 素材中心
 *
 * @author yehaifeng
 */
export default {
  name: 'AppMaterial',

  props: {

    showDialog: {
      type: Boolean,
      default: true,
    },

    // 显示数据模块
    typeNumber: {
      type: Array,
      default: () => [],
    },

  },

  data() {
    return {
      material: {
        data: [],
        total: null,
      },

      loading: false,

      showNumber: null,

      searchText: '',


    };
  },
  created() {
    this.requestUrl(this.typeNumber[0], 1);
  },

  methods: {

    handleCurrentChange(page) {
      this.loading = true;
      this.requestUrl(this.showNumber, page);
    },

    requestUrl(num, page) {
      this.showNumber = num;
      this.loading = true;
      this.$http.get(`/resource?page=${page}&equal[type]=${num}&per_page=18&like[name]=${this.searchText}`)
        .then((res) => {
          this.material.data = [...res.data];
          this.material.total = res.total;
        })
        .catch((error) => {
          this.$message({
            message: error,
            type: 'error',
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },

    imageName(item) {
      this.$emit('changeData', item);
    },

    selectClick(num) {
      this.material = {};
      this.searchText = '';
      this.showNumber = num;
      this.requestUrl(this.showNumber, 1);
    },

    reverseDialog() {
      this.material = {};
      this.$emit('showEditor', false);
    },

    refresh() {
      this.material = {};
      this.searchText = '';
      this.loading = true;
      this.requestUrl(this.showNumber, 1);
    },

    searchValue() {
      this.requestUrl(this.showNumber, 1, this.searchText);
    },
  },

};
</script>

<template>
  <el-dialog
    :visible="showDialog"
    width="80%"
    title="素材中心"
    append-to-body
    class="materialDialog"
    @close="reverseDialog"
  >
    <div
      class="materialDialog-content"
    >
      <div
        v-loading="loading"
        element-loading-background="rgba(255, 255, 255, 0.7)"
        class="materialDialog-img"
      >
        <div
          v-for="(item,index) in material.data"
          :key="item.type + '_' + index"
          class="materialDialog-item"
          @click="imageName(item)"
        >
          <div class="materialDialog-item__img">
            <img
              v-if="showNumber!==2&&showNumber!==3&&showNumber!==21 "
              :src="item.preview_url"
              alt="">
            <video
              v-if="showNumber===3"
              :src="item.preview_url"/>
            <i
              v-if="showNumber===2"
              class="el-icon-service"/>
            <i
              v-if="showNumber===21"
              class="el-icon-document"/>
          </div>
          <div class="materialDialog-item__name">
            {{ item.name }}
          </div>

        </div>
      </div>
      <footer
        class="list-footer"
      >
        <div
          class="list-footer__text"
        >
          <el-button
            v-if="typeNumber.includes(2)"
            :class="showNumber ===2?'buttonColor':''"
            @click="selectClick(2)"
          >
            音频</el-button>
          <el-button
            v-if="typeNumber.includes(3)"
            :class="showNumber ===3?'buttonColor':''"
            @click="selectClick(3)"
          >
            视频</el-button>
          <el-button
            v-if="typeNumber.includes(11)"
            :class="showNumber ===11?'buttonColor':''"
            @click="selectClick(11)"
          >
            场景图</el-button>
          <el-button
            v-if="typeNumber.includes(12)"
            :class="showNumber ===12?'buttonColor':''"
            @click="selectClick(12)"
          >
            元素图</el-button>
          <el-button
            v-if="typeNumber.includes(13)"
            :class="showNumber ===13?'buttonColor':''"
            @click="selectClick(13)"
          >
            游戏图</el-button>
          <el-button
            v-if="typeNumber.includes(21)"
            :class="showNumber ===21?'buttonColor':''"
            @click="selectClick(21)"
          >
            动画</el-button>
        </div>

        <div
          class="list-footer__paging"
        >
          <el-pagination
            v-if="material.total > 18"
            :current-page.sync="material.current_page"
            :page-size="18"
            :pager-count="7"
            :total="material.total"
            layout="total, prev, pager, next"
            @current-change="handleCurrentChange"/>
        </div>

        <div
          slot="footer"
          class="list-footer__button">
          <el-button
            @click="reverseDialog">
            返回
          </el-button>
          <el-button
            type="primary"
            @click="refresh">
            刷新
          </el-button>
        </div>

        <div
          class="list-footer__search"
        >
          <el-input
            v-model="searchText"
            placeholder="请输入搜索内容"
          />
          <el-button
            icon="el-icon-search"
            class="list-footer__search-button"
            @click="searchValue"
          />
        </div>
      </footer>
    </div>
  </el-dialog>
</template>

<style lang="postcss">
.list-footer__search{
  width: 300px;
  position:absolute;
  right: 0;
}
.list-footer__search .el-input{
  width: 70%;
}
.list-footer__search-button{
  width: 23%;
}
.buttonColor{
  color: #409eff;
}
img{
  border:0;
  vertical-align: middle;
}
.list-footer .list-footer__text{
  width: 380px;
}
.list-footer__text .el-button{
  font-size: 16px;
  border: 0;
  background: #fff;
}
.list-footer .list-footer__paging{
  width: 400px;
  padding-top: 10px;
}
.list-footer .list-footer__button{
  width: 200px;
}
.materialDialog-img{
  width: 100%;
  height: 600px;
}
.materialDialog{
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}
.materialDialog .list-footer{
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  line-height: 50px;
}
.materialDialog .materialDialog-item{
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
  border: 1px solid gainsboro;
  width: 201px;
  height: 176px;
  margin-bottom: 10px;
  flex-shrink: 0;
  text-align: center;
  float: left;
}
.materialDialog-item__img{
  width: 200px;
  height: 145px;
  display: table-cell;
  vertical-align: middle;
}
.materialDialog-item__img .el-icon-service:before{
  font-size: 40px;
  display: inline-block;
}
.materialDialog-item__img .el-icon-document:before{
  font-size: 40px;
  display: inline-block;
}
.materialDialog-item__name{
  background: #ccc;
  width: 100%;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.materialDialog .materialDialog-item img{
  max-width: 100%;
  max-height: 100%;
}
.materialDialog .materialDialog-item video{
  max-width: 100%;
  max-height: 100%;
}
</style>
