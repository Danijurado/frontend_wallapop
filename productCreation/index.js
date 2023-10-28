import { productCreationController } from "./productCreationController.js";

document.addEventListener('DOMContentLoaded', () => {
   const productCreation = document.querySelector('#creation');
   productCreationController(productCreation)
})