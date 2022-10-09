import { getStoredCart } from "../utils/fakeDB";

const getCartAndProduct = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    //get cart
    const savedCart = getStoredCart();
    let initialCart = [];
    for(const id in savedCart){
            const foundProducts = products.find(product => product.id === id);
            if(foundProducts){
                const quantity = savedCart[id];
                foundProducts.quantity = quantity;
                initialCart.push(foundProducts);
            }
       }
    

    return {products, initialCart};
};

export default getCartAndProduct;