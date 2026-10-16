// footer
const year = new Date().getFullYear();

const footer = document.querySelector("footer");
footer.innerHTML += `
    <p class="mb-2 mt-2">Created by <b class="text-secondary">talchao</b></p>
    <a href="https://discord.com/users/207303842960900098"><i class="fa-brands fa-discord fa-xl p-1 text-white"></i></a>
    <a href="https://github.com/talchao"><i class="fa-brands fa-github fa-xl p-1 text-white"></i></a>
    <a href="https://x.com/talchao"><i class="fa-brands fa-twitter fa-xl p-1 text-white"></i></a>
    <a href="https://instagram.com/talchao"><i class="fa-brands fa-instagram fa-xl p-1 text-white"></i></a>
    <p class="text-white-50 mb-0 mt-3 small">&copy; 2021-${year} MC Prom & Homecoming</p>
    <p class="text-white-50 small">Not an official Minecraft event. Not approved by or associated with Mojang, Microsoft, or MHS.</p>
`;

// nav
const nav = document.createElement("nav");

nav.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-secondary border-bottom border-black border-2 pt-0 pb-0 fixed-top" data-bs-theme="dark">
        <div class="container-fluid bg-secondary pt-2 pb-2">
            <a class="navbar-brand" href="./index.html"><img src="./assets/images/logo.png" height="70px" /></a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon " data-bs-theme="dark"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./changelog.html">Changelog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./archive.html">Past Winners</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://youtu.be/Cjx9cZNkvCA?si=KNJDfbZAwcaBNfOn" target="_blank">Trailer
                        <span class="material-symbols-outlined pr-5" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">open_in_new</span>
                    </a>
                </li>
            </ul>
            <a href="./form.html"><button class="btn btn-dark">Sign Up!</button></a>
            </div>
        </div>
    </nav>
`;

const currentPath = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("header").appendChild(nav)
    document.querySelectorAll("a").forEach((a) => {
        if (a.href.includes(currentPath)) {
            a.classList.add("active")
            a.ariaCurrent = "page"
        }
    });
});