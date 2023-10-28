import { getProduct } from "./productDetailsModel.js"
import { buildProduct } from "./productDetailsview.js";


export const productDetailsController = async (productDetail, productId) => {
    
    try {
        const product = await getProduct(productId);
        productDetail.innerHTML = buildProduct(product);
    } catch (error) {
        alert(error)
    }
}