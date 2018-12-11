import AppScene from './AppScene';
import AppFooter from './AppFooter';
import AppForm from './AppForm';
import AppSelectImage from './AppSelectImage';
import AppSelectVideo from './AppSelectVideo';
import AppSelectAudio from './AppSelectAudio';

const components = {
  AppScene,
  AppFooter,
  AppForm,
  AppSelectImage,
  AppSelectVideo,
  AppSelectAudio,
};

export default (Vue) => {
  Object.keys(components)
    .forEach(name => Vue.component(name, components[name]));
};
