// Parse query parameters to get product ID
var productId = getQueryParameters().get('product_id');

// Fetch product data from your server or API
fetch('api/products/' + productId)
    .then(response => response.json())
    .then(product => {
        // Populate HTML elements with product details
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;

        // Populate size options
        var sizeSelect = document.getElementById('size');
        product.sizes.forEach(size => {
            var option = document.createElement('option');
            option.value = size;
            option.innerText = size;
            sizeSelect.appendChild(option);
        });

        // Populate color options
        var colorSelect = document.getElementById('color');
        product.colors.forEach(color => {
            var option = document.createElement('option');
            option.value = color;
            option.innerText = color;
            colorSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching product:', error));
