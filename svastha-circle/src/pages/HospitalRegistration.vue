<template>
  <v-container>
    <v-row class="content_column">
      <v-col cols="12" sm="10" offset-sm="1" align-self="center">
        <v-form ref="loginForm" @submit.prevent="login">
          <v-row>
            <v-col cols="12" class="text-center">
              <h2>Hospital Registration</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-stepper :items="['Step 1', 'Step 2', 'Step 3']">
                <template v-slot:item.1>
                  <v-card title="Step One" flat>...</v-card>
                </template>

                <template v-slot:item.2>
                  <v-card title="Step Two" flat>...</v-card>
                </template>

                <template v-slot:item.3>
                  <v-card title="Step Three" flat>...</v-card>
                </template>
              </v-stepper>
            </v-col>
          </v-row>
          <v-row class="mt-8">
            <v-col cols="12" lg="6">
              <v-text-field
                color="primary"
                label="Hospital Name"
                variant="outlined"
                name="name"
                type="text"
                id="name"
                v-model="name"
                :rules="[rules.required, rules.min]"
                hint="At least 8 characters, Max 150 characters"
                maxlength="150"
                clearable
                counter
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-autocomplete
                color="primary"
                variant="outlined"
                label="Nature"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                clearable
                :rules="[rules.required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                color="primary"
                label="Registration Number"
                variant="outlined"
                name="name"
                type="text"
                id="name"
                v-model="name"
                :rules="[rules.required, rules.min]"
                hint="At least 8 characters, Max 150 characters"
                maxlength="150"
                clearable
                counter
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                color="primary"
                label="Registration Date"
                variant="outlined"
                name="name"
                type="date"
                id="name"
                v-model="registration_date"
                :rules="[rules.required]"
                hint="DD.MM.YYYY format"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <p class="mb-4">Services</p>
              <template
                v-for="service in services_options"
                :key="service.label"
              >
                <v-checkbox
                  name="services"
                  :label="service.label"
                  v-model="services"
                  color="primary"
                ></v-checkbox>
              </template>
              <v-text-field
                color="primary"
                label="Other Services"
                variant="outlined"
                name="name"
                type="text"
                id="name"
                v-model="services_other"
                hint="Comma separated values. Max 150 characters."
                maxlength="150"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <p class="mb-4">Speciality</p>
              <template
                v-for="service in services_options"
                :key="service.label"
              >
                <v-checkbox
                  name="services"
                  :label="service.label"
                  v-model="speciality"
                  color="primary"
                ></v-checkbox>
              </template>
              <v-text-field
                color="primary"
                label="Other Specialities"
                variant="outlined"
                name="name"
                type="text"
                id="name"
                v-model="speciality_other"
                hint="Comma separated values. Max 150 characters."
                maxlength="150"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                color="primary"
                label="Nurses"
                variant="outlined"
                name="name"
                type="number"
                id="name"
                v-model="nurses"
                hint="Number of Nurses"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                color="primary"
                label="Doctors"
                variant="outlined"
                name="name"
                type="number"
                id="name"
                v-model="doctors"
                hint="Number of Doctors"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6"><router-link to="/">Back</router-link></v-col>
            <v-col cols="6" class="text-right">
              <v-btn color="primary">Next Step</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import dayjs from "dayjs";

export default {
  data: () => {
    return {
      name: "",
      nature: "",
      registration_number: "",
      registration_date: dayjs().format("DD.MM.YYYY"),
      services: "",
      services_other: "",
      speciality: "",
      speciality_other: "",
      nurses: 1,
      doctors: 1,
      address1: "",
      address2: "",
      state: "",
      city: "",
      pin_code: "",
      email_01: "",
      email_02: "",
      phone_01: "",
      phone_02: "",
      mobile_01: "",
      mobile_02: "",
      total_beds: 0,
      icu_beds: 0,
      private_beds: 0,
      semi_private_beds: 0,
      general_beds: 0,
      status: 0,
      services_options: [],
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
    console.log(this.registration_date);
  },
};
</script>
<style lang="scss" scoped>
</style>