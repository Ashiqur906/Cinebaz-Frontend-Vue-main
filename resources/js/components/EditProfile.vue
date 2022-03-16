<template>
    <v-card
        min-height="70vh"
        rounded="lg"
        dark
     >
        <v-card
         class="card-part"
         >
            <div class="head-part">
                <h2>Edit Profile</h2>
            </div>
            <v-row >
                <v-col 
                cols="5"
                class="main_part_user"
                >
                    <v-text-field label="Name" :rules="rules" hide-details="auto"></v-text-field>
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Phone Number"></v-text-field>
                    <v-textarea
                        solo
                        name="input-7-4"
                        label="Address"
                        >
                    </v-textarea>
            
                    <v-col
                        class="d-flex"
                        cols="6"
                        sm="3"
                    >
                        <v-select
                        :items= "['Male', 'Female', 'Others']"
                        label="Gender"
                        solo
                        ></v-select>
                    </v-col>
                    <v-btn
                        class="mr-4"
                        @click="submit"
                        >
                        Update
                    </v-btn>
                </v-col>
                <v-col 
                cols="5"
                class="main_part_user"
                >
                    <v-file-input
                        label="File input"
                        filled
                        prepend-icon="mdi-camera"
                    >
                    </v-file-input>
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
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
                        label="Confirm Password"
                        hint="At least 8 characters"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                    ></v-text-field> 
                </v-col>
            </v-row>
        </v-card>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
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

.head-part{
 margin-bottom: 20px;
}

.head-part h2{
 font-size: 30px;
}
.card-part{
    padding: 20px;
}
 .main_part_user{
    padding: 43px;
    border-radius: 8px;
    background-color: #adaba81f;
    margin-left: 83px;
    margin-top: 20px;
    margin-bottom: 55px;
 }
</style>
