document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartContainer = document.querySelector('.cart-container');
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    
    // Mở/đóng giỏ hàng khi nhấn vào icon
    cartIcon.addEventListener('click', () => {
        cartContainer.classList.toggle('visible');
        cartContainer.classList.toggle('hidden');
    });
    
    // Thêm sản phẩm vào giỏ hàng
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h2').innerText;
            const productPrice = productElement.querySelector('p').innerText;

            const product = {
                id: productId,
                name: productName,
                price: productPrice
            };

            cart.push(product);
            updateCart();
        });
    });

    // Cập nhật giỏ hàng
    function updateCart() {
        const cartElement = document.querySelector('.cart');
        cartElement.innerHTML = '';

        // Thêm sản phẩm vào giỏ hàng
        cart.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
                <span class="remove-item" data-index="${index}">X</span>
            `;
            cartElement.appendChild(productElement);
        });

        // Cập nhật số lượng sản phẩm trong icon giỏ hàng
        cartCount.innerText = cart.length;

        // Xoá sản phẩm khỏi giỏ hàng
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1); // Xoá sản phẩm
                updateCart(); // Cập nhật lại giỏ hàng
            });
        });

        // Nếu giỏ hàng trống, hiển thị thông báo
        if (cart.length === 0) {
            cartElement.innerHTML = '<p>Chưa có sản phẩm nào trong giỏ hàng</p>';
        }
    }
});
