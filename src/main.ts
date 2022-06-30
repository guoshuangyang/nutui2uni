import { createSSRApp } from "vue";
import App from "./App.vue";
import NutButton from "@/components/nutui/packages/button/index.taro.vue";
import NutForm from "@/components/nutui/packages/form/index.taro.vue";
import NutFormItem from "@/components/nutui/packages/formitem/index.vue";
import NutCell from "@/components/nutui/packages/cell/index.taro.vue";
import NutCellGroup from "@/components/nutui/packages/cellgroup/index.vue";
import NutIcon from "@/components/nutui/packages/icon/index.taro.vue";
import "./nutui.scss";
// 强制导入iconfont
import "./components/nutui/styles/font/iconfont.css";
export function createApp() {
  const app = createSSRApp(App);
  app.component("nut-button", NutButton);
  app.component("nut-form", NutForm);
  app.component("nut-form-item", NutFormItem);
  app.component("nut-cell", NutCell);
  app.component("nut-cell-group", NutCellGroup);
  app.component("nut-icon", NutIcon);
  return {
    app,
  };
}
