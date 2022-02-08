<template>
  <div class="simon-button" :class="color" @click="btnClick" ref="btn"></div>
</template>

<script>
export default {
  name: "btn",
  props: {
    idx: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    gameStop: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      sound: null,
    };
  },
  methods: {
    play() {
      this.sound.play();
      this.$refs.btn.classList.add("active");
      setTimeout(() => this.$refs.btn.classList.remove("active"), 200);
    },

    btnClick() {
      if (this.gameStop) return;
      this.play();
      this.$emit("btnClick", this.idx);
    },
  },

  created() {
    const path = require(`@/assets/sounds/${this.file}`);
    this.sound = new Audio(path);
  },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
.simon-button {
  width: 100%;
  height: 100%;
  box-shadow: inset 3px 3px 10px rgba(255, 255, 255, 0.3);

  &.green {
    background-color: $color-green;
    border-top-left-radius: 100%;
    &.active {
      background-color: $color-light-green;
    }
  }
  &.red {
    background-color: $color-red;
    border-top-right-radius: 100%;
    &.active {
      background-color: $color-light-red;
    }
  }
  &.yellow {
    background-color: $color-yellow;
    border-bottom-left-radius: 100%;
    &.active {
      background-color: $color-light-yellow;
    }
  }
  &.blue {
    background-color: $color-blue;
    border-bottom-right-radius: 100%;
    &.active {
      background-color: $color-light-blue;
    }
  }
}
</style>
