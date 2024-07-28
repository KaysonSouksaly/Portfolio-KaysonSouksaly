document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header>
            <div class="social">
                <h1>Kayson Souksaly</h1>
                <a href="https://www.linkedin.com/in/kayson-souksaly-82a247203/"><i class="fa-brands fa-linkedin"></i></a>
                <a href=mailto:"kayson.souksaly@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            </div>
            <menu>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about-me.html">ABOUT ME</a></li>
                <li><a href="https://drive.google.com/file/d/1goa6naZhOdgK2YE_nFqsP53TlCMZOL0x/view?pli=1">RESUME</a></li>
            </menu>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});