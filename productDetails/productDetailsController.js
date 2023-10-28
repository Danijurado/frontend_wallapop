import { getProduct } from "./productDetailsModel.js"
import { buildProduct } from "./productDetailsview.js";
import {spinnerEvent} from "../utils/spinnerEvent.js";

export const productDetailsController = async (productDetail, productId) => {
    
    try {
        const product = await getProduct(productId);
        productDetail.innerHTML = buildProduct(product);
    } catch (error) {
        spinnerEvent('productLoaded', {
            type: 'error', 
            message: 'El producto no existe'
        }, productDetail);
        setTimeout (() => {
            window.location = './index.html';
        }, 2000);

    }
}