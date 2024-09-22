fetch('../data/product2.json')
        .then  (response => response.json())
        .then(data => {
          const gallery = document.getElementById('gallery');
          data.forEach(item => {
            const col = document.createElement('div');
            col.classList.add('col');
            col.setAttribute('data-id', item.id)
            col.innerHTML = `
              <img src="${item.image}" alt="">
                <h2>"${item.gia}"</h2>
                <h2>"${item.mon_hang}"</h2>
                <p>"${item.thong_tin}"</p>
                <button class="order-button class="add-to-cart">Order Now</button> <!-- New button added here -->
            `;
            gallery.appendChild(col);
          });
        })
        .catch(error => console.error('Error loading JSON:', error));


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
        // updateCart();
    });
});



});
      