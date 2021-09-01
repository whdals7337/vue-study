var app = new Vue({
  el: "#app",
  data: {
    awesome: false,
    ok: true,
    type: "A",
    loginType: "username",
  },
  methods: {
    changeLoginType: function () {
      this.loginType = this.loginType === "username" ? "" : "username";
    },
  },
});
