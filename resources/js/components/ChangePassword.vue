<template>
    <v-card
        min-height="70vh"
        rounded="lg"
        dark
        class="profile_wish"
     >
        <div class="profile_wish_1">
            <h2>Change Password</h2>
            <v-card
            class="card-part"
            >
            <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label=" Old Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            >
            </v-text-field>
            <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-1"
                label="New Password"
                hint="At least 8 characters"
                class="input-group--focused"
                @click:append="show2 = !show2"
            >
            </v-text-field> 
            <v-text-field
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show3 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm Password"
                hint="At least 8 characters"
                class="input-group--focused"
                @click:append="show3 = !show3"
            >
            </v-text-field>
            <v-btn
                class="mr-4"
                @click="submit"
                >
                Save
            </v-btn>
            </v-card>
        </div>
    </v-card>
</template>
<script>
  export default {
    data: () => ({
      show1: false,
        show2: false,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
    }),
  }
</script>

<style>
.card-part{
    padding: 20px;
    background-color: #adaba81f;
}
 .profile_wish_1 h2{
    margin-bottom: 20px;
    font-size: 30px;
    }
    .profile_wish_1{
    margin-top: 50px;
    margin-bottom: 20px;
    }

    .profile_wish{
    padding: 20px;
    }
    .profile-link{
  color: white !important;
  line-height: 0.5;
  font-size: 15px;
}
</style>