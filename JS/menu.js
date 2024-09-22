fetch('../data/product2.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    data.forEach(item => {
      const col = document.createElement('div');
      col.classList.add('col');
      col.setAttribute('data-id', item.id);
      col.innerHTML = `
        <img src="${item.image}" alt="">
        <h2>${item.gia}</h2>
        <h2>${item.mon_hang}</h2>
        <p>${item.thong_tin}</p>
        <button class="order-button">Order Now</button>
      `;
      gallery.appendChild(col);
    });

    // Add event listener for the dynamically created buttons
    document.querySelectorAll('.order-button').forEach(button => {
      button.addEventListener('click', (event) => {
        const productElement = event.target.parentElement;
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h2:nth-of-type(2)').innerText;
        const productPrice = productElement.querySelector('h2:nth-of-type(1)').innerText;

        const product = {
          id: productId,
          name: productName,
          price: productPrice,
        };

        console.log(product);
        cart.push(product);
        updateCart();
      });
    });

  })
  .catch(error => console.error('Error loading JSON:', error));

// Example cart logic
const cart = [];
const cartContainer = document.querySelector('.cart-container');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');

// Toggle cart visibility
cartIcon.addEventListener('click', () => {
  cartContainer.classList.toggle('visible');
  cartContainer.classList.toggle('hidden');
});

// Update cart display
function updateCart() {
  cartCount.innerText = cart.length;

  const cartContent = cartContainer.querySelector('.cart');
  cartContent.innerHTML = '';

  if (cart.length === 0) {
    cartContent.innerHTML = '<p>Chưa có sản phẩm nào trong giỏ hàng</p>';
  } else {
    cart.forEach(item => {
      cartContent.innerHTML += `
        <p>${item.name} - ${item.price}</p>
      `;
    });
  }
}
