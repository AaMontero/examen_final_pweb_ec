import axios from 'axios'

//Metodos Fachada 
export const obtenerOrigen = async (origen) => {
    return await obtenerVuelosOrigen(origen);
}
export const obtenerDestino = async (destino) => {
    return await obtenerVuelosDestino(destino);
}
export const obtenerFecha = async (fecha) => {
    return await obtenerVuelosFecha(fecha);
}
export const disponible = async (numero) => {
    return await estaDisponible(numero);
}



const obtenerVuelosOrigen = async (origen) => {
    const data = axios.get(`http://localhost:8085/API/Aeropuerto/V1/vuelos/dispOrigen/${origen}`).then(r => r.data)
    console.log(origen)
    console.log(data)
    return data
}

const obtenerVuelosDestino = async (origen) => {
    const data = axios.get(`http://localhost:8085/API/Aeropuerto/V1/vuelos/dispDestino/${origen}`).then(r => r.data)
    console.log(data)
    return data
}
const obtenerVuelosFecha = async (origen) => {
    const data = axios.get(`http://localhost:8085/API/Aeropuerto/V1/vuelos/dispFecha/${origen}`).then(r => r.data)
    console.log(data)
    return data
}
const estaDisponible = async (numero) => {
    const data = await fetch(`http://localhost:8085/API/Aeropuerto/V1/vuelos/Disponible/${numero}`).then((r) =>
    r.json())
    console.log(data)
    return data
}

export default obtenerOrigen; obtenerDestino; obtenerFecha; disponible