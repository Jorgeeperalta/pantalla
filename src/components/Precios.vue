<template>
    <v-app id="inspire">
        <v-main class="background-image">
        <v-container>
            <v-row>
                <v-col md="12">   <v-alert
                    rounded="xl"
                    :color="backgroundColor"
                    variant="outlined"
                    height="80"><h1 class="titulo">LISTA DE PRECIOS</h1>
                    </v-alert></v-col>
                </v-row>
          <v-row>
            <v-col
               v-for="(option, index) in productos"
                :key="index"
                cols="4"
            ><v-row>
                <v-col md="8">     
                    <v-alert
                    rounded="xl"
                    :color="backgroundColor"
                    variant="outlined"
                    height="80"><h1>{{ option.nombre }} </h1><h5>{{ option.descripcion}} </h5>
                    </v-alert>
               </v-col>
                <v-col md="4">   <v-alert
                    rounded="xl"
                     :color="backgroundColor"
                    variant="outlined"
                    height="80"><h1> {{ option.precio }}</h1>
                    </v-alert></v-col>
            </v-row>
           
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
        backgroundColor :'',
        colors: [
  "#FF5733",  // Rojo brillante
  "#33FF57",  // Verde brillante
  "#3357FF",  // Azul brillante
  "#FF33A1",  // Rosa
  
  "#33FFF7",  // Cian
  "#A133FF",  // Púrpura
  "#33FFBD",  // Verde agua

  "#8D33FF",  // Violeta
  "#FF5733",  // Rojo fuerte
  "#33A1FF",  // Azul claro
  "#FF3333",  // Rojo intenso
  "#33FF33",  // Verde neón
  "#FF33FF",  // Magenta
  "#FF6F33",  // Coral
  "#33FFD7",  // Turquesa
  "#FF33D1",  // Fucsia
  "#33FF83",  // Verde lima
  "#FFA133",  // Ámbar
  "#FFC733",  // Dorado
  "#33C7FF",  // Azul cielo
  "#FF3357",  // Rosa intenso
  "#8DFF33",  // Lima claro
  "#FF3333",  // Rojo brillante (repetido pero distinto tono)
  "#33FFA1"   // Verde claro
],
       imageUrl: '',
       interval: null,
     
       
 
       productos: [],
     };
   },
   created() {
    
    this.traerProductos();
  },
   methods: {
    getRandomColor() {
      const randomIndex = Math.floor(Math.random() * this.colors.length);
      return this.colors[randomIndex];
    },
    changeColor() {
      this.backgroundColor = this.getRandomColor();
    },

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
 
    },
  mounted() {
    this.intervalId = setInterval(this.changeColor, 9000); 
  },
  beforeDestroy() {
    clearInterval(this.intervalId); 
  }
 }
 
 
 </script>
<style scoped>
.titulo{
    text-align: center;
}
.background-image {
  background-image: url('../assets/fondoPrecios.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.card-transparent {
  background-color: rgba(255, 255, 255, 0.5); /* Fondo blanco con 20% de opacidad */
  box-shadow: none; /* Elimina la sombra para mayor transparencia */
  border: none; /* Elimina bordes */
}
</style>