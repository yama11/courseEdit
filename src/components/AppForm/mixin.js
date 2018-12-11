/**
 * 自定义表单组件公共配置
 *
 * @author  suyanping
 */
import AppForm from './Main';

export default {

  components: {
    VForm: AppForm,
  },

  inheritAttrs: false,

  props: {
    // 表单页标题主体
    object: {
      type: String,
      required: true,
    },

    // 后端最后提交的数据（对应model的处理）
    // 不绑定的话使用model
    value: {
      type: Object,
      default: null,
    },
  },


  computed: {
    // 表单提交成功的提示信息
    succeedMessage() {
      return `${this.object}成功`;
    },

    // 提交数据，是否有处理数据？处理数据：model数据
    data() {
      return this.value || this.$attrs.model;
    },
  },

  methods: {
    /**
     * 触发表单提交 - 详细信息参见Main
     *
     * @param   {Function}  validate  - 总表单验证函数
     * @param   {Function}  callback  - 结果处理
     *
     * @return  {Promise}   submit    - 异步提交表单函数
     */
    submitForm(validate, callback) {
      const valid = validate();

      const { step } = this.$store.state;

      const submitSucceed = () => {
        callback();
        this.$message.success(this.succeedMessage);
        this.cancelForm();
      };

      const submitData = () => {
        this.$store.commit(
          'editCourseStep',
          { step, dataForm: this.data },
        );
      };

      const onlineSubmit = () => {
        if (!valid) {
          Promise.reject();

          return;
        }

        submitData();
        submitSucceed();
      };

      return this.$emit('on-submit', onlineSubmit);
    },

    /**
     * 提供el-form的api
     */
    validate(callback) {
      this.$refs.form.validate(callback);
    },

    validateField(...args) {
      this.$refs.form.validateField(...args);
    },

    clearValidate() {
      this.$refs.form.clearValidate();
    },
  },
};
