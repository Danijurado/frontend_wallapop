import { deleteProduct, getProduct } from "./productDetailsModel.js";
import { buildProduct } from "./productDetailsview.js";
import { spinnerEvent } from "../utils/spinnerEvent.js";

export const productDetailsController = async (productDetail, productId) => {
  try {
    const product = await getProduct(productId);
    const token = localStorage.getItem("token");
    const userData = parseJwt(token);

    productDetail.innerHTML = buildProduct(product);
    if (product.userId === userData.userId) {
      productDetail.innerHTML += '<button id="delete">Borrar</button>';

      document.getElementById("delete").addEventListener("click", async () => {
        if (confirm("¿Estas seguro de que quieres eliminar?")) {
          await deleteProduct(productId);
          window.location = './index.html';
        }
      });
    }
  } catch (error) {
    spinnerEvent(
      "productLoaded",
      {
        type: "error",
        message: "El producto no existe",
      },
      productDetail
    );
    setTimeout(() => {
      window.location = "./index.html";
    }, 2000);
  }
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
