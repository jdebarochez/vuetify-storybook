import App from "@/App.vue";

export default {
  component: App,
  title: "Welcome"
};

export const ToApp = () => ({
  components: { App },
  template: '<App />'
});

ToApp.story = {
  name: "to App"
};