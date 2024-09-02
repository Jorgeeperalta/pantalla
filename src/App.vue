<template>
  <v-app>

      <v-app-bar
        absolute
        :color="$store.state.color"
        dark
        shrink-on-scroll
    
        scroll-target="#scrolling-techniques-2"
      >
       

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

     

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
