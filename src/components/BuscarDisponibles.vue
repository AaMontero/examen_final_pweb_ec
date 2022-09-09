<template>
  <h1>BIENVENIDOS AL AEROPUERTO</h1>
  <p></p>
  <label for="nombre"> ORIGEN: </label>
  <input v-model = "origen" type="text" />
  <button v-on:click="OrigenViajes">BUSCAR</button>
  <p></p>
  <label for="nombre">DESTINO: </label>
  <input v-model = "destino" type="text" />
  <button v-on:click="DestinoViajes">BUSCAR</button>
  <p></p>
  <label for="nombre">FECHA: </label>
  <input v-model = "fecha" type="text" />
  <button v-on:click="FechaViajes">BUSCAR</button>
  <ul>
      <li v-for="vuelo in vuelos" :key="vuelo.id" ><b>N.-</b> {{vuelo.numeroVuelo}} 
        <b>Origen:</b> {{vuelo.origen}}<b>Destino:</b>  {{vuelo.destino}} <b>Categoria:</b> {{vuelo.categoria}} 
        <b>Nombre del Avion:</b> {{vuelo.nombreAvion}} <b>Precio del Asiento:</b> {{vuelo.valorAsiento}} <br><br></li>
  </ul>
  <label for="nombre">Ingrse el numero de vuelo: </label>
  <input v-model = "numVuelo" type="number" />
  <button v-on:click="estaDisponible">BUSCAR</button>
  <br><br>
  <label v-if = "disponible === true">HAY BOLETOS DISPONIBLES!!</label>
  <div v-if ="disponible === true">
  <label  for="numBol">Ingrese el numero de Boletos que desea Comprar: </label>
  <input v-model = "nBoletosC" type="number" name = "numBol"/>
  <label for="Tarjeta">Ingrese el numero de su tarjeta: </label>
  <input v-model = "numeroTarjeta" type="text" name ="Tarjeta"/>
  <button v-on:click = "estaDisponible" >Comprar</button>
  </div>
  <br><br><br><br>

  <label for="Check">Ingrese su tarjeta para validad el Check IN: </label>
  <input v-model = "numeroTarjeta" type="text" name ="Check"/>
  <button v-on:click = "hacerCheckIn" >Hacer Check in </button>

  <p></p>
</template>

<script>

import {
    obtenerOrigen,
    obtenerDestino,
    obtenerFecha,
    disponible
} from "../helpers/funcionalidades.js"

export default {
    data() {
    return {
        origen:"",
        destino:"",
        fecha:"",
        vuelos: [],
        numVuelo: 0,
        disponible: false, 
        nBoletosC: 0, 
        numeroTarjeta:"",
        checkIn:false, 

    }
    },
    methods:{
      async OrigenViajes() {
      const response = await obtenerOrigen(this.origen);
      this.vuelos = response
      console.log(response);
    },
    async DestinoViajes() {
      const response = await obtenerDestino(this.destino);
      this.vuelos = response; 
      console.log(response);
    },
    async FechaViajes() {
      const response = await obtenerFecha(this.fecha);
      this.vuelos = response; 
      console.log(response);
    },
    async estaDisponible(){
      const response = await disponible(this.numVuelo);
      this.disponible = response; 
      console.log(response);
    },
    async hacerCheckIn(){

    }
    }

}
</script>

<style>
    input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
}

</style>