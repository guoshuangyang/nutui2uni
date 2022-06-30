import { createSSRApp } from "vue";
import App from "./App.vue";
import "./nutui.scss";
// 强制导入iconfont
import "./components/nutui/styles/font/iconfont.css";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
