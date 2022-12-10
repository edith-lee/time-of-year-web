<!--
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-08 23:28:07
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 17:05:42
 * @FilePath: \time-of-year-web\src\App.vue
 * @Description: app.vue
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved.
-->
<template>
  <Entry></Entry>
</template>

<script lang="ts" setup>
import Entry from './appEntry.vue'
</script>

<style lang="less">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'sans-serif';
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

[type='search']，textarea {
  user-select: text;
  -webkit-user-select: text;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 400;
  font-size: 0.3rem;
  color: rgba(0, 0, 0, 0.93);
  background-color: #f5f5f5;
  user-select: none;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  text-decoration: underline;
}

a:not([href]):not([tabindex]) {
  /*color: inherit;*/
  text-decoration: none;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  /*color: inherit;*/
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

p {
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: scroll;
}
</style>
