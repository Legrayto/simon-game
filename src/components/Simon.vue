<template>
  <div class="game">
    <div class="container">
      <div class="gameboard">
        <div class="gameboard__center">
          <div class="center-text">{{ message }}</div>
        </div>
        <div class="gameboard__buttons">
          <div
            class="gameboard__button"
            v-for="(button, idx) in buttons"
            :key="idx"
          >
            <Button
              :idx="idx"
              :color="button.color"
              :file="button.file"
              :gameStop="gameStop || isGameOver"
              ref="button"
              @btnClick="checkClick"
            />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content__start">
          <div class="content__text">Round {{ round }}</div>
          <button
            type="button"
            class="content__button content__button_start"
            @click="start"
          >
            Start / Reset
          </button>
          <button
            type="button"
            class="content__button content__button_resume"
            @click="resume"
          >
            Resume
          </button>
        </div>
        <div class="content__levels">
          <div
            class="content__level"
            v-for="(grade, index) in levels"
            :key="index"
          >
            <label class="content__control">
              <input
                type="radio"
                name="level"
                class="level-input"
                v-model="delay"
                :value="grade.time"
              />
              <div class="level-text">
                {{ grade.name }}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { buttons, levels } from "../variables.js";

export default {
  components: {
    Button,
  },
  data() {
    return {
      round: 0,
      orders: [],
      buttons,
      levels,
      delay: 1500,
      message: "",
      gameStop: true,
      isGameOver: false,
    };
  },

  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    start() {
      this.reset();
      this.newRound();
    },
    resume() {
      this.isGameOver = false;
      this.message = "";
      this.newRound();
    },
    reset() {
      this.round = 0;
      this.orders = [];
      this.isGameOver = false;
      this.gameStop = true;
      this.message = "";
    },
    async newRound() {
      this.gameStop = true;
      this.message = "Wait";
      this.round++;
      this.actual = 0;
      const index = this.newButtonIndex();
      this.orders.push(index);

      for (let order of this.orders) {
        this.$refs.button[order].play();

        await this.sleep(this.delay);
      }
      this.gameStop = false;
      this.message = "";
    },
    newButtonIndex() {
      const btnIndex = Math.floor(Math.random() * 4);
      return btnIndex;
    },
    checkClick(index) {
      if (!this.round) return;
      const actualIndex = this.orders[this.actual];
      if (index === actualIndex) {
        this.checkActual();
      } else {
        this.gameOver();
      }
    },
    async checkActual() {
      if (this.actual === this.round - 1) {
        this.orders = this.orders.map((item) => {
          item = this.newButtonIndex();
          return item;
        });
        this.message = "Next Round!";
        this.gameStop = true;
        await this.sleep(2000);
        this.newRound();
      } else {
        this.actual++;
      }
    },
    async gameOver() {
      this.isGameOver = true;
      this.message = "Game Over";
      await this.sleep(2000);
    },
  },
};
</script>

<style lang="scss"></style>
