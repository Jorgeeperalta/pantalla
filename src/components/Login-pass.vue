<template>
  <v-app class="app-container">
    
     <v-row  >
     
        <v-col  sm="8" md="4">
         <v-card  height="1000">
            <br><br><br><br><br><br><br><br><br><br>
            <v-card-title class="justify-center">
             LOGIN
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="username"
                  label="Usuario"
                  prepend-inner-icon="mdi-account"
                  outlined
                  dense
                  rounded
                  :rules="usernameRules"
                   variant="solo-filled"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Contraseña"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  outlined
                  dense
                  rounded
                  :rules="passwordRules"
                  variant="solo-filled"
                  required
                ></v-text-field>
                <v-btn
                  color="primary"
                  block
                  rounded
                  class="my-4"
                  @click="submit"
                >
                  Entrar
                </v-btn>
                <v-btn text block rounded @click="recoverPassword">
                  Recuperar Contraseña
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col  md="8">
          <br><br><br><br><br><br><br><br><br><br> 
          <div class="centered-text">
            <h1>VisioNegocios</h1>
          </div>
          <div class="centered-text">
            <h2>Ilumina tu negocio, mucho más que una pantalla</h2>
          </div>
        </v-col>
      </v-row>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: null,
        password: null,
        valid: false,
        usernameRules: [
          v => !!v || 'El usuario es requerido',
          v => v.length >= 3 || 'El usuario debe tener al menos 3 caracteres'
        ],
        passwordRules: [
          v => !!v || 'La contraseña es requerida',
          v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
        ]
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
            sessionStorage.clear();
            sessionStorage.id = '';
          fetch(`${this.$store.state.url}login.php`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          })
          .then(response => response.json())
          .then(data => {
            localStorage.removeItem('token');
            console.log(data);
            if (data.message==='ok') {
              sessionStorage.token =data.token;
              sessionStorage.userId = data.userId;
              sessionStorage.nombre = data.username;
              localStorage.setItem('token', data.token);
              this.$store.state.userId= data.userId;
              this.$store.state.nombre= data.username;
              this.$store.state.cant_pantallas= data.cant_pantallas;
              this.$router.push('/pantallas');
            } else {
              localStorage.removeItem('token');
              alert(data.message);
            }
          })
          
             
          // Lógica para iniciar sesión
          console.log('Usuario:', this.username, 'Contraseña:', this.password);
        }
      },
      recoverPassword() {
        // Lógica para recuperar contraseña
        console.log('Recuperar contraseña');
      }
    }
  }
  </script>
  
  <style scoped>
  
  .centered-text {
  text-align: center;
  color: white;
 
}
  .app-container {
  background-image: url('../assets/azul.jpg');
 
}
.centered-text h1 {
  font-size: 98px; /* Ajusta el valor según tu preferencia */
}
  .imagen-transparente {
            opacity: 0.5;
            /* Ajusta el valor de opacidad entre 0 y 1 */
        }
  .login-container {
    background-color:#ffffff ;
    height: 200vh;
  }
  .custom-input .v-input__control {
    background-color: #e7eaeb !important; /* Color de fondo */
    border-radius: 25px; /* Bordes redondeados */
  }
  
  .custom-input .v-label {
    color: #00796b !important; /* Cambia el color de la etiqueta */
  }
  
  .custom-input input {
    color: #bececb !important; /* Cambia el color del texto */
  }
  
  .custom-input .v-input__control::before,
  .custom-input .v-input__control::after {
    border-color: #ee0909 !important; /* Color del borde */
  }
  </style>
  