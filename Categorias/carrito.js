let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Función para actualizar carrito 
function renderCart() {
    let cartList = document.getElementById("cart-list");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartList.innerHTML = "";  
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        listItem.innerHTML = `
            ${item.name} - $${item.price} 
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">X</button>
        `;
        cartList.appendChild(listItem);
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length; 

    // Guardar carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}


function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let confirmacion = confirm(`Total a pagar: $${total}\n¿Deseas continuar con la compra?`);

    if (confirmacion) {
        alert("¡Compra realizada con éxito! 🎉\nTe llegará un correo con los detalles.");
        clearCart(); 
    }
}

document.addEventListener("DOMContentLoaded", renderCart);


// Botón de carrito.

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        let name = event.target.getAttribute("data-name");
        let price = parseFloat(event.target.getAttribute("data-price"));

        cart.push({ name, price });
        renderCart();
    });
});



function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de confirmar la compra.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem("cartTotal", total); // Guardar el total en localStorage

    window.location.href = "pago.html";  
}
