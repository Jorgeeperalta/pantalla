<template>
  <v-app>
  <br><br>
  <br><br>
  <br><br>
  <v-data-table
    :headers="headers"
    :items="productos"
    sort-by="calories"
    class="elevation-1"
     item-key="pkproducto"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Pantallas {{totalPantallas }} de  {{ $store.state.cant_pantallas }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-if="totalPantallas < $store.state.cant_pantallas" color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nueva pantalla 
            
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.stock"
                      label="Stock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.precio"
                      label="Precio"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.cantidad"
                      label="Cantidad"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Esta seguro de eliminar este item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</v-app>
</template>
  <script>
export default {
  data: () => ({
    productos: [],
    pkproducto: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Precio", value: "precio" },
      { text: "Cantidad", value: "cantidad" },
      { text: "Stock", value: "stock" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    totalPantallas:'',
    editedIndex: -1,
    editedItem: {
     nombre:'',
     descripcion:'',
     precio:'',
     cantidad:'',
     stock:''
    },
    defaultItem: {
      nombre:'',
     descripcion:'',
     precio:'',
     cantidad:'',
     stock:''
    },
  
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva pantalla" : "Edita pantalla";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
   
    this.traerProductos();
  },

  methods: {
    crearProducto () {
      const obj = this
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + sessionStorage.token + '')
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        opcion: '1',
        nombre: this.editedItem.nombre.toUpperCase(),
        descripcion: this.editedItem.descripcion.toUpperCase(),
        precio: this.editedItem.precio,
        cantidad: this.editedItem.cantidad,
        stock: this.editedItem.stock,
        id_usuario: parseInt(sessionStorage.userId)
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

      promise.then(result => console.log(result))
      promise.then(alert('Producto agregado correctamente'))
      promise.catch(error => console.log(error))
      setTimeout(() => { this.traerProductos() }, 3000)
    },
    traerProductos () {
      //this.$store.state.cant_pantallas
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + sessionStorage.token + '')
      var raw = JSON.stringify({
        id_usuario: sessionStorage.userId,
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
    eliminarProducto () {
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + sessionStorage.token + '')
      // myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBFUkFMVEEgIE1BUlRJTiIsImV4cCI6MTY2NjcwMjAyN30.zjw1YpvvPJK1B1EH2NPGZ9gUalembdu38fv2zLpD3jI')
      var raw = JSON.stringify({
        id: this.pkproducto,
      })
      var requestOptions = {
        method: 'DELETE',
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
      promise.then(result => console.log(result))
      promise.catch(error => console.log(error))
      setTimeout(() => { this.traerProductos() }, 3000)
    },
    editarProducto () {
      // eslint-disable-next-line no-console
     
      
      const obj = this
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + sessionStorage.token + '')
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        id: this.pkproducto,
        nombre: this.editedItem.nombre.toUpperCase(),
        descripcion: this.editedItem.descripcion.toUpperCase(),
        precio: this.editedItem.precio,
        cantidad: this.editedItem.cantidad,
        stock: this.editedItem.stock,
     
      })

      var requestOptions = {
        method: 'PUT',
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

      promise.then(result => console.log(result))
      // promise.then(obj.$swal({
      //   title: 'Se edito con exito!!',
      //   text: '',
      //   icon: 'success'
      // }))
      promise.catch(error => console.log(error))
      setTimeout(() => { this.traerProductos() }, 3000)
    },
    editItem(item) {
      this.pkproducto = item.id
      this.editedIndex = this.productos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.pkproducto = item.id
      this.editedIndex = this.productos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.eliminarProducto()
      this.productos.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.editarProducto();
        Object.assign(this.productos[this.editedIndex], this.editedItem);
      } else {
        this.crearProducto();
        this.productos.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
