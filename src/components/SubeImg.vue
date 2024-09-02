<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="fileTest">Selecciona una imagen/archivo:</label>
        <input id="fileTest" ref="fileInput" @change="handleFileUpload" type="file">
        <button type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFile: ''
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
      },
      async submitForm() {
        if (!this.selectedFile) {
          alert("Por favor, selecciona un archivo.");
          return;
        }
  
        const formData = new FormData();
        formData.append("fileTest", this.selectedFile);
  
        try {
          const response = await fetch("http://jorgeperalta-001-site4.itempurl.com/backend_postulacion/upload-file.php", {
            method: "POST",
            body: formData
          });
  
          if (response.ok) {
            alert("Archivo subido con éxito.");
          } else {
            alert("Error al subir el archivo.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Error al subir el archivo.");
        }
      }
    }
  };
  </script>