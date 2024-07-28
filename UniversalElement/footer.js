document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <footer class="bg-light py-5 mt-5">
            <div class="container text-center">
                <small>&copy; Copyright by Kayson Souksaly, All rights reserved.</small>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});