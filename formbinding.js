var app = new Vue({
  el: "#app",
  data: {
    message: "",
    longMessage: "",
    age: 1,
    msg: "",
  },
});

var example3 = new Vue({
  el: "#example-3",
  data: {
    checkedNames: [],
    checked: true,
    picked: [],
    selected: "",
    toggle: "no",
    pick: "",
  },
});

var example4 = new Vue({
  el: "#example-4",
  data: {
    selected: "",
    forSelected: "A",
    options: [
      { text: "One", value: "A" },
      { text: "Two", value: "B" },
      { text: "Three", value: "C" },
    ],
  },
});
