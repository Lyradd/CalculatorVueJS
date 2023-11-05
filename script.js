const app = new Vue({
  el: "#app",
  data: {
    expression: "",
  },
  methods: {
    appendToDisplay(value) {
      this.expression += value;
    },
    clearDisplay() {
      this.expression = "";
    },
    calculate() {
      try {
        this.expression = eval(this.expression);
      } catch (error) {
        this.expression = "Error";
      }
    },
  },
});
