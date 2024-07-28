document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header>
            <nav class="navbar navbar-light bg-light">
                <ul class="nav">
                <li class="nav-item">
                    <a class="navbar-brand" href="index.html">Kayson Souksaly</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary h4" href="https://www.linkedin.com/in/kayson-souksaly-82a247203/">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary h4" href=mailto:"kayson.souksaly@gmail.com"">
                        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    </a>
                </li>
                </ul>
                <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link text-secondary h5" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary h5" href="about-me.html">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary h5" href="https://drive.google.com/file/d/1goa6naZhOdgK2YE_nFqsP53TlCMZOL0x/view?pli=1">Resume</a>
                </li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});