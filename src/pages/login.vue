<template>
  <div class="bg">
    <div class="center">
      <div class="c_w">
        <div class="c_g">
          <img
            src="https://www.helloimg.com/i/2024/12/02/674d5b8f353c0.png"
            class="h-110 relative top-25 left-10"
          />
        </div>
        <div class="flex relative bottom-140 left-90">
          <img
            src="https://www.helloimg.com/i/2024/11/23/6741f9f28cf67.png"
            class="h-22"
          />
          <span class="title">中医在线</span>
        </div>
        <div class="relative bottom-140 left-90">
          <div class="login-methods">
            <button @click="showLoginMethod('phone')" class="m-5 text-h6">
              手机号登录
            </button>
            <span class="text-h5">|</span>
            <button @click="showLoginMethod('qr')" class="m-5 text-h6">
              二维码登录
            </button>
          </div>
          <div
            v-if="currentMethod === 'phone'"
            class="login-form relative right-8 top-5"
          >
            <div class="in1 flex" :class="{ 'input-error': phoneError }">
              <svg
                t="1733126314305"
                class="icon mt-2 ml-1"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2404"
                width="30"
                height="30"
              >
                <path
                  d="M256 85.333333h512c64.8 0 117.333333 52.533333 117.333333 117.333334v618.666666c0 64.8-52.533333 117.333333-117.333333 117.333334H256c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334z m0 64a53.333333 53.333333 0 0 0-53.333333 53.333334v618.666666a53.333333 53.333333 0 0 0 53.333333 53.333334h512a53.333333 53.333333 0 0 0 53.333333-53.333334V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334H256z m170.666667 618.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z"
                  fill="#bfbfbf"
                  p-id="2405"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="请输入手机号"
                v-model="phone"
                class="ml-2"
                @blur="validatePhone"
              />
            </div>
            <div class="h-6">
              <transition name="fade">
                <span v-if="phoneError" class="error">请输入合法的手机号</span>
              </transition>
            </div>
            <div class="flex">
              <div class="in2 flex" :class="{ 'input-error': maError }">
                <svg
                  t="1733126870660"
                  class="icon mt-2 ml-1"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3483"
                  width="30"
                  height="30"
                >
                  <path
                    d="M917.6 267.2c-36.1-2.5-72.4-9.3-103.6-19.3-10.1-3-20.2-6.4-30.3-10-21.4-6.3-50.5-18.8-83.6-36.6-0.4-0.2-0.7-0.4-1.1-0.6-7.8-4.2-15.7-8.7-23.8-13.4-10.9-6.3-21.7-12.9-32.5-19.9-0.4-0.3-0.8-0.5-1.2-0.8-7.7-5-15.5-10.2-23.1-15.5-5-3.4-10-7.1-15-10.7-3.8-2.8-7.5-5.3-11.3-8.2-27.4-20.5-54.5-43.5-79.9-68.3-25.4 24.8-52.5 47.8-79.9 68.3-3.7 2.8-7.5 5.4-11.3 8.2-5 3.6-10 7.3-15 10.7-7.7 5.4-15.4 10.5-23.1 15.5-0.4 0.3-0.8 0.5-1.2 0.8-10.8 6.9-21.6 13.6-32.5 19.9-8.1 4.7-16 9.2-23.8 13.4-0.3 0.2-0.7 0.4-1 0.6-33 17.8-62.2 30.3-83.6 36.6-10.1 3.6-20.2 7-30.3 10-31.1 10-67.4 16.8-103.6 19.3h0.1c1.1 16.2 2.1 37.7 3.4 60.9h0.7c6.1 86.8 23.5 210.2 49.7 282.8 1.2 3.2 2.2 6.5 3.3 9.6 0.6 1.5 1.2 2.8 1.8 4.3 62.8 162.1 171.9 280.1 303 323.4v0.4c17.3 5.7 31.9 9.3 43.5 11.5 11.5-2.2 26.1-5.8 43.5-11.5v-0.4C687 905 796.1 787 858.9 624.8c0.6-1.5 1.2-2.8 1.8-4.3 1.2-3.1 2.2-6.4 3.3-9.6 26.2-72.5 43.6-196 49.7-282.8h0.7c1.1-23.3 2.2-44.7 3.2-60.9z m-47.4 41.9l-0.5 9.5c-0.5 2.2-0.9 4.4-1 6.6C863 406 847 525.7 821.3 596.7c-0.7 1.9-1.4 3.9-2 5.8-0.4 1.2-0.8 2.5-1.4 4.1-0.5 1.2-1 2.5-1.4 3.4C758.1 760.8 657.7 869.3 541 907.8c-1.9 0.6-3.7 1.4-5.5 2.2-7.9 2.5-15.7 4.6-23.2 6.3-7.5-1.7-15.2-3.8-23.1-6.3-1.8-0.9-3.6-1.6-5.5-2.2-116.7-38.5-217.1-147-275.4-297.5-0.5-1.2-0.9-2.4-1.7-4.1-0.4-1.2-0.8-2.4-1.3-3.6-0.7-2-1.3-3.9-1.9-5.6-25.8-71.2-41.7-191-47.4-271.7-0.2-2.3-0.5-4.5-1-6.6l-0.5-9.3c-0.1-1.5-0.2-3-0.2-4.5 24.6-3.8 48.4-9.3 70-16.2 10.1-3 20.4-6.4 31.4-10.4 25.2-7.6 56.5-21.2 90.5-39.6 0.6-0.3 1.2-0.6 1.7-0.9 8.2-4.4 16.7-9.2 24.8-14 10.7-6.1 22-13 34.5-21.1 0.4-0.2 1-0.6 1.3-0.8 8.2-5.3 16.4-10.8 24.1-16.2 4.5-3.1 9.1-6.4 13.7-9.7l2.4-1.8 4-2.9c2.6-1.9 5.2-3.7 7.5-5.5 17.9-13.4 35.3-27.5 52-42.1 16.7 14.7 34 28.7 51.8 42 2.6 1.9 5.1 3.8 7.7 5.6l4.3 3.1 1.5 1.1c4.8 3.5 9.6 6.9 14 9.9 8.1 5.7 16.3 11.2 23.7 16l2.1 1.3c12.4 8 23.7 14.9 34.1 20.8 8.6 5 17 9.8 25 14.1 0.4 0.2 1 0.5 1.5 0.8 34.2 18.4 65.6 32.1 90.9 39.7 11 3.9 21.3 7.3 30.6 10.1 22.1 7.1 46.1 12.6 70.8 16.5 0.1 1.5 0.1 3 0 4.4z"
                    p-id="3484"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    d="M710.6 411.2L476.1 651.6l-120-123c-8.3-8.5-21.8-8.5-30.1 0s-8.3 22.3 0 30.9L461.1 698c4.2 4.3 9.6 6.4 15.1 6.4 5.4 0 10.9-2.1 15-6.4l249.5-255.7c8.3-8.5 8.3-22.3 0-30.9-8.3-8.7-21.8-8.7-30.1-0.2z"
                    p-id="3485"
                    fill="#cdcdcd"
                  ></path>
                </svg>
                <input type="text" placeholder="请输入验证码" class="ml-2" v-model="ma" @blur="validateMa" />
              </div>
              <button class="b1" :class="{ 'button-true': !buttonError }" @click="captcha">获取验证码</button>
            </div>
            <div class="h-6">
              <transition name="fade">
                <span v-if="maError" class="error">验证码应该为6位</span>
              </transition>
            </div>
            <button @click="login" class="b2 relative right-5 top-5" :class="{ 'button-true': !loginError }">登录</button>
          </div>
          <div v-if="currentMethod === 'qr'" class="login-form">
            <img src="" alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentMethod = ref("phone");
const phone = ref();
const ma = ref();
const phoneError = ref(false);
const buttonError = ref(true);
const maError = ref(false);
const loginError = ref(true);

function showLoginMethod(method: string) {
  currentMethod.value = method;
  phoneError.value = false;
  buttonError.value = true;
  maError.value = false;
  loginError.value = true;
}

function login() {
  if(!loginError.value){
    // 登录逻辑
  }
}
function captcha() {
  if(!buttonError.value){
    // 获取验证码逻辑
  }
}
function validatePhone() {
  const phoneRegex = /^\d{11}$/; // 正则表达式，匹配11位数字
  if (!phoneRegex.test(phone.value)) {
    phoneError.value = true;
    buttonError.value = true;
  } else {
    phoneError.value = false;
    buttonError.value = false;
  }
  if (!phoneError.value && !maError.value){
    loginError.value = false;
  }else {
    loginError.value = true;
  }
}

function validateMa() {
  const maRegex = /^\d{6}$/;
  if (!maRegex.test(ma.value)) {
    maError.value = true;
  } else {
    maError.value = false;
  }
  if (!phoneError.value && !maError.value){
    loginError.value = false;
  }else {
    loginError.value = true;
  }
}
</script>

<style scoped>
.bg {
  background-image: url(https://www.helloimg.com/i/2024/12/02/674d5702b654d.png);
  width: 100%;
  height: 100%;
  z-index: 0;
}
.center {
  width: 1080px;
  height: 640px;
  position: absolute;
  top: 20%;
  left: 20%;
  z-index: 10;
}
.c_w {
  position: relative;
  left: 300px;
  background-color: white;
  width: 800px;
  height: 550px;
  z-index: 100;
  border-radius: 20px;
}
.c_g {
  background: linear-gradient(147deg, #a6fea4 0%, #3c9467 100%);
  width: 550px;
  height: 640px;
  border-radius: 20px 50% 50% 20px;
  position: relative;
  right: 280px;
  bottom: 45px;
}
/* 淡入淡出动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.title {
  font-size: 45px;
  padding: 10px;
}
input {
  background-color: rgb(255, 255, 255);
  width: 100%;
}
input:focus {
  outline: none;
}
.in1 {
  background-color: rgb(255, 255, 255);
  border: solid 2px;
  border-radius: 5px;
  border-color: rgb(197, 197, 197);
  width: 415px;
  height: 50px;
}
.in2 {
  background-color: rgb(255, 255, 255);
  border: solid 2px;
  border-radius: 5px;
  border-color: rgb(197, 197, 197);
  width: 255px;
  height: 50px;
}
.input-error {
  border-color: red; /* 改变边框颜色为红色 */
}
.error {
  font-size: smaller;
  color: red;
}
.b1{
  width: 135px;
  height: 50px;
  background-color: #e4e4e4;
  margin-left: 20px;
  color: rgb(153, 153, 153);
  border-radius: 5px;
  cursor: not-allowed;
}
.b2{
  width: 415px;
  height: 50px;
  background-color: #e4e4e4;
  margin-left: 20px;
  color: rgb(153, 153, 153);
  border-radius: 5px;
  cursor: not-allowed;
}
.button-true{
  background-color: #3ea06d;
  color: white;
  cursor: pointer;
}
</style>
