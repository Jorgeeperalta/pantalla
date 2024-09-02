<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <v-app>
    <br /><br />
    <br /><br />
    <br /><br />
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
     
          <div class="centered-text">
            <h1>VisioNegocios</h1>
          </div>
          <div class="centered-text">
            <h2>Ilumina tu negocio, mucho más que una pantalla</h2>
          </div>
      </v-col>
    </v-row>
 
    <v-row>
      <v-col md="12" sm="6" class="section">
        <div class="centered-text"></div>
        <h2 class="mb-4">Sobre Nosotros</h2>
        <p>
          Somos [Nombre de tu empresa], una empresa dedicada a [Descripción de tu negocio]. Nuestra misión es [Misión de tu empresa].
        </p>
        <p>
          [Breve historia o descripción de tus servicios]
        </p>
         </v-col>
     
      <v-col md="12" sm="6" class="section">
        <v-img
          src="ruta/a/tu/imagen.jpg"
          alt="Imagen de tu equipo o producto principal"
          width="100%"
        />
      </v-col>
    </v-row>
    <footer>
        <p>&copy; VisioNegocios 2024</p>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    numeros: [],
  }),
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.numeros = [
        { id: 1, name: "numero uno" },
        { id: 2, name: "numero dos" },
        { id: 3, name: "numero tres" },
      ];
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
}
footer {
  text-align: center;
  padding: 10px;
  background-color: #146dc0;
}
</style>
