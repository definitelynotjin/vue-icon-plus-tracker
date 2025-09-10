<script setup lang="ts">
  import { ref } from 'vue'

  const username = ref('')
  const password = ref('')
  const show1 = ref(false)
  const valid = ref(false)

  const nameRules = [
    (v: string) => !!v || 'Username is required',
    (v: string) => (v && v.length <= 10) || 'Username must be less than 10 characters',
  ]

  const passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 6) || 'Password must be less than 6 characters',
  ]

</script>

<template>
  <v-app class="!bg-gradient-to-r from-blue-800 to-gray-800 ">
    <v-row class="ma-4 pa-4">
      <v-col class="bg-gray-900 rounded-tl-2xl rounded-bl-2xl" />
      <v-col class="bg-slate-200 rounded-tr-2xl rounded-br-2xl flex items-center justify-center">
        <v-col class="d-flex !justify-center bg-red-200" cols="12">
          <v-form v-model="valid" centered class="w-full max-w-md">
            <v-col class="">
              <v-text-field
                v-model="username"
                class="text-blue-900"
                :counter="10"
                label="Username"
                required
                :rules="nameRules"
              />
            </v-col>

            <v-col class="">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                class="!text-blue-900 "
                :counter="10"
                label="Password"
                required
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              />

              <v-btn block class="!bg-blue-800 !mt-10" rounded="lg" type="submit">
                Submit
              </v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-app>
</template>
