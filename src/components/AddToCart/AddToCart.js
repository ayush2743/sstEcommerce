
function AddToCart({ product, increaseQuantity, decreaseQuantity, cart}) {
    function increase(product) {
        increaseQuantity(product)
    }
    function decrease(product) {
        decreaseQuantity(product)
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;

    if(quantity === 0) {
        return (
            <div>
                <button onClick = {() => increase(product)}>Add to cart</button>
            </div>
        )
    } else {

        return (
            <div>
                <button onClick = {() => decrease(product)}>-</button>
                <span>{quantity}</span>
                <button onClick = {() => increase(product)}>+</button>
            </div>
        )
    }
}    
export default AddToCart;

// const cart = {"1":{id:1, name:"apple", price:10}, "2":{id:2, name:"banana", price:20}, "3":{id:3, name:"orange", price:30}, "4":{id:4, name:"grapes", price:40}, "5":{id:5, name:"mango", price:50}};

// console.log(Object.keys(cart));
// console.log(Object.values(cart));