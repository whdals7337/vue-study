var app = new Vue({
  el: "#app",
  data: {
    a: 1,
    message: "안녕하세요.",
  },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    changeMessage: function () {
      this.message = "안녕히가세요.";
    },
  },
  created: function () {
    console.log("created");
  },
  mounted: function () {
    console.log("mounted");
  },
  updated: function () {
    console.log("updated");
  },
});
