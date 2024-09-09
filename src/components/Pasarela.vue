<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-main class="background-image">
      <v-container>
  <v-spacer></v-spacer>
    
    <v-row >
      <v-col  class="red"  cols="4" >
        
          <v-card
           height="100px"
            max-width="600"
           
          >
            <v-expansion-panels class="green">
              <v-expansion-panel class="green" v-for="product in productos" :key="product.id">
                <v-card max-heigth="10">
                  <v-card-title>{{ product.nombre }}    <v-spacer></v-spacer>
                    <img width="40" height="40" v-bind:src="product.rutaimg"/>
                  </v-card-title>
                  <v-card-text>
                    {{ product.descripcion }}
                   
                    
                    <v-btn
                      append-icon="mdi-chevron-right"
                      color="green"
                      outlined
                     small
                  
                    >Precio:$ {{ product.precio }}</v-btn>
                
                  </v-card-text>
                </v-card>
                <br>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
          <br>
        
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="8" class="green">
        <br>
        <v-responsive>
      
            <v-carousel cycle :interval="interval" hide-delimiters :show-arrows="false">
              <v-carousel-item
                ><vue3VideoPlay v-bind="options"
              /></v-carousel-item>

              <v-carousel-item
               
              ></v-carousel-item>

              <v-carousel-item
                src="https://ibpensistema.com/storage/molino2.gif"
                cover
              ></v-carousel-item>
              <v-carousel-item
                src="http://jorgeperalta-001-site4.itempurl.com/backend_postulacion/files2/Fondo-Pant-UAA.png"
                cover
              ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle :interval="interval" hide-delimiters :show-arrows="false">
             
              <v-carousel-item
                src="http://jorgeperalta-001-site4.itempurl.com/backend_postulacion/files2/Fondo-Pant-UAA.png"
                cover
              ></v-carousel-item>
              <v-carousel-item
                src="https://ibpensistema.com/storage/molino2.gif"
                cover
              ></v-carousel-item>
             
            </v-carousel>
       
        </v-responsive>
      </v-col>

    </v-row>
  
      </v-container>
    </v-main>
 
      
  </v-app>
</template>

  <script>
 
export default {
  components: { },

  data() {
    return {
      imageUrl: '',
      interval: 8000,
    
      

      productos: [],
    };
  },
  created() {
   
   this.traerProductos();
 },
  methods: {
    traerProductos () {
      //this.$store.state.cant_pantallas
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + sessionStorage.token + '')
      var raw = JSON.stringify({
        id_usuario: sessionStorage.userId,
        id_pantalla: this.$store.state.pkpantalla,
        opcion: '2'
      })
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      var promise = Promise.race([
        fetch(`${this.$store.state.url}productos.php`, requestOptions)
          .then(response => response.json()),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 520000)
        )
      ])
      promise.then(result => (this.productos = result))
      promise.then(result => (this.totalPantallas = result.length))
      promise.then(result => console.log(result))
      promise.catch(error => console.log(error))
    },

   }
}


</script>
  
  <style>
  .background-image {
  background-image: url('../assets/fondoPrecios.png');
  background-size: cover;
  background-repeat: no-repeat;
}
  .v-container {
  border-radius: 10px; /* Ajusta el valor según el redondeo deseado */
}
.blue {
  background-color: rgb(72, 238, 224);
  border-radius: 10px;
 
}
.green {
  background-color: rgb(72, 238, 224);
  border-radius: 10px;
}
.my-spacer {
  flex-grow: 5;
}
</style>