fetch('../data/product2.json')
        .then  (response => response.json())
        .then(data => {
          const gallery = document.getElementById('gallery');
          data.forEach(item => {
            const col = document.createElement('div');
            col.classList.add('col');
            col.innerHTML = `
              <img src="${item.image}" alt="">
                <h2>"${item.gia}"</h2>
                <h2>"${item.mon_hang}"</h2>
                <p>"${item.thong_tin}"</p>
            `;
            gallery.appendChild(col);
          });
        })
        .catch(error => console.error('Error loading JSON:', error));