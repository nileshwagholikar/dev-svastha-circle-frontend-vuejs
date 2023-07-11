<template>
  <v-layout class="h-100 d-flex align-center justify-center">
    <v-row>
      <v-col cols="6" offset="3">
        <v-text-field
          color="primary"
          label="Email"
          variant="underlined"
          name="email"
          id="email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          name="password"
          id="password"
          v-model="password"
          color="primary"
          label="Password"
          variant="underlined"
        ></v-text-field>
        <v-btn color="primary" block>Login</v-btn>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style lang="scss" scoped>
</style>