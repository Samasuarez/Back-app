import mongoose from "mongoose";
import Carta from "./carta.model.js";

// Definir el esquema de la mano de juego
const manoSchema = new mongoose.Schema({
  jugador: {
    type: String,
    required: true,
  },
  cartas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Carta",
    },
  ],
  cerrada: {
    type: Boolean,
    default: false,
  },
});

// Definir un método para recoger una carta del mazo
manoSchema.methods.recogerCarta = function () {
  // Crear una nueva instancia de Carta y agregarla a la mano
  const nuevaCarta = new Carta();
  this.cartas.push(nuevaCarta);
};

// Definir un método para recoger la última carta boca arriba de la mesa
manoSchema.methods.recogerCartaMesa = function (carta) {
  this.cartas.push(carta);
};

// Definir un método para cerrar la mano
manoSchema.methods.cerrarMano = function () {
  if (this.cartas.length === 7) {
    // Verificar si se cumplen las condiciones para cerrar
    // implementar las reglas específicas de combinaciones aquí
    // Por ejemplo, verificar escaleras, tríos, Chinchón, etc.
    // Si se cumplen las condiciones, establecer cerrada en true
    this.cerrada = true;
  }
};

// Definir el modelo de mano de juego
const Mano = mongoose.model("Mano", manoSchema);

// Exportar el modelo de mano de juego

export default Mano;
