/**
 * 公共验证规则
 * @author chenliangshan
 * @version 2018-03-02
 */

const Rules = {
  /**
   * 必填验证
   * @param {String} fieldName - 必填项的label名称，如“姓名”
   * @param {String} type - 数据类型，默认为string
   * @param {String} trigger - 触发方式，默认为‘blur,change’
   * @param {String} message - 提示信息，默认为‘{fieldName}不能为空’
   */
  required: (
    fieldName,
    type = 'string',
    trigger = 'blur,change',
    message = `${fieldName}不能为空`,
  ) => ({
    type,
    trigger,
    message,
    required: true,
  }),

};

export default Rules;
