import { productDetailsController } from "./productDetailsController.js";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const productDetail = document.querySelector('#productDetail');
    productDetailsController(productDetail, productId);
})