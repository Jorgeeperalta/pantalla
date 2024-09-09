<template>
  <v-app>

      <v-app-bar
      
        :color="$store.state.color"
        :elevation="24">
        <div style="text-align: center; width: 100%">
          <h1>{{  this.$store.state.nombre }}</h1>
          </div>
        <v-spacer></v-spacer>
          <v-spacer></v-spacer>

        <v-btn v-if="$store.state.btnLogin" @click="login" target="_blank" text>
          <span class="mr-2">LOGIN</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>
    
      
   
        
            <router-view /> 
    
   
       
  
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    login() {
      this.$router.push("/login");
      this.$store.state.btnLogin = false;
    },
  },
};
</script>
