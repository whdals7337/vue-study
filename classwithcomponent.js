Vue.component("my-component", {
  template: '<p class="foo bar">Hi</p>',
});

var app = new Vue({
  el: "#app",
  data: {
    isActive: true,
  },
});
