import AppFooter from './AppFooter';
import AppForm from './AppForm';
import AppSelectCourse from './AppSelectCourse';

const components = {
  AppFooter,
  AppForm,
  AppSelectCourse,
};

export default (Vue) => {
  Object.keys(components)
    .forEach(name => Vue.component(name, components[name]));
};
