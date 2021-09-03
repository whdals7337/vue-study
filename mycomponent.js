Vue.component("my-component", {
  template: "<div>사용자 정의 컴포넌트 입니다!</div>",
});

Vue.component("simple-counter", {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
  // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
  data: function () {
    return {
      counter: 0,
    };
  },
});

Vue.component("child", {
  // props 정의
  props: ["message"],
  // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
  // vm의 this.message로 사용할 수 있습니다.
  template: "<span>{{ message }}</span>",
});

Vue.component("dynamic-child", {
  // JavaScript는 camelCase
  props: ["myMessage"],
  template: "<span>{{ myMessage }}</span>",
});

Vue.component("example", {
  props: {
    // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
    propA: Number,
    // 여러개의 가능한 타입
    propB: [String, Number],
    // 문자열이며 꼭 필요합니다
    propC: {
      type: String,
      required: true,
    },
    // 숫자이며 기본 값을 가집니다
    propD: {
      type: Number,
      default: 100,
    },
    // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
    propE: {
      type: Object,
      default: function () {
        return { message: "hello" };
      },
    },
    // 사용자 정의 유효성 검사 가능
    propF: {
      validator: function (value) {
        return value > 10;
      },
    },
  },
});

// 루트 인스턴스 생성
new Vue({
  el: "#example",
  data: {
    parentMsg: "",
  },
});
