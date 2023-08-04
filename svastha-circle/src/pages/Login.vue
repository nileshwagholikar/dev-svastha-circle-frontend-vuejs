<template>
  <v-container>
    <v-row class="content_column">
      <v-col
        cols="10"
        offset="1"
        lg="6"
        offset-lg="3"
        xl="4"
        offset-xl="4"
        align-self="center"
      >
        <v-form ref="loginForm" @submit.prevent="login">
          <v-row>
            <v-col cols="12">
              <v-text-field
                color="primary"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                id="email"
                v-model="email"
                :rules="[rules.required, rules.min, rules.emailRules]"
                hint="At least 8 characters"
                counter
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                name="password"
                id="password"
                v-model="password"
                color="primary"
                label="Password"
                variant="outlined"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn color="primary" type="submit" block size="large"
                >Login</v-btn
              >
            </v-col>
            <v-col cols="12">
              <v-divider />
            </v-col>
            <v-col cols="12">
              <div class="d-flex justify-space-between align-center">
                <router-link to="/registration-hospital"
                  >Hospital Registration</router-link
                >
                <router-link to="/registration-doctor"
                  >Doctor Registration</router-link
                >
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => {
    return {
      self: null,
      valid: false,
      email: "",
      password: "",
      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
        emailRules: (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      },
    };
  },
  methods: {
    login(event) {
      if (this.$refs.loginForm.isValid) {
        console.log(this.email, this.password);
      }
    },
  },
  mounted() {
    this.self = this;
  },
};
</script>
<style lang="scss" scoped>
</style>