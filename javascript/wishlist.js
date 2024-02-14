document.addEventListener("DOMContentLoaded", function() {
    // ... (your existing code) ...

    const wishlistItemsDiv = document.getElementById("wishlistItems");
    const btnClearWishlist = document.getElementById("btnClearWishlist");
    const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    if (wishlistItems.length > 0) {
        wishlistItems.forEach(item => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("wishlist-product");

            const imageElement = document.createElement("img");
            imageElement.src = item.imageUrl;

            productDiv.appendChild(imageElement);

            wishlistItemsDiv.appendChild(productDiv);
        });
    } else {
        // Display message when wishlist is empty
        wishlistItemsDiv.innerHTML = "Your wishlist is empty.";
    }

    btnClearWishlist.addEventListener("click", function() {
        wishlistItemsDiv.innerHTML = "Your wishlist is empty.";
        localStorage.removeItem("wishlistItems");
    });
});
