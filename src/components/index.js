import AppFooter from './AppFooter';
import AppForm from './AppForm';
import AppSelectCourse from './AppSelectCourse';
import AppMaterial from './AppMaterial';

const components = {
  AppFooter,
  AppForm,
  AppSelectCourse,
  AppMaterial,
};

export default (Vue) => {
  Object.keys(components)
    .forEach(name => Vue.component(name, components[name]));
};
