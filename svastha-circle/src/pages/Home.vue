<template>
  <v-layout class="application">
    <v-row>
      <v-col cols="12" md="4" class="column__left">Left</v-col>
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
}
.column {
  &__left {
    background-color: #f90;
  }

  &__right {
    overflow-y: scroll;
  }
}
</style>