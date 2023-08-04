<template>
  <v-layout class="application">
    <v-row>
      <v-col cols="12" md="4" class="column__left"
        ><img src="../img/logo-light.png" alt="Svastha Circle"
      /></v-col>
      <v-col cols="12" md="8" class="column__right">
        <router-view v-slot="{ Component, route }">
          <!-- Use any custom transition and  to `fade` -->
          <transition :name="route.meta.transition || 'fade'">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-col>
    </v-row>
  </v-layout>
</template>
<style lang="scss" scoped>
.application {
  overflow: hidden;
  height: 100vh;
  background-color: #fff;

  .v-row {
    margin: 0;
  }
}
.column {
  &__left {
    background-color: #0a0065;
    background: #0a0065 url("../img/login-bg.png") center bottom no-repeat;
    padding: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100px;

    img {
      width: auto;
      height: 80px;
    }

    @media only screen and (min-width: 960px) {
      height: auto;

      img {
        height: auto;
        width: 80%;
        max-width: 500px;
      }
    }
  }

  &__right {
    overflow-y: auto;
    padding: 0;
    margin: 0;
    height: 100%;
  }
}
</style>