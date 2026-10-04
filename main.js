const footer = document.createElement("footer")
const nav = document.createElement("nav")

const year = new Date().getFullYear()

footer.innerHTML = `
    <p>&#169; <b>Minecraft Prom ${year}</b></p>
    <p><i>Not affiliated with MHS, Minecraft, Mojang, or Microsoft</i></p>
    <p>Created by <a href="https://www.github.com/talchao">talchao</a></p>
`

nav.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="archive.html">Archive</a></li>
        <li><a href="changelog.html">Changelog</a></li>
        <li><a href="form.html">Sign Up!</a></li>
        <li>
            <a href="https://www.youtube.com/watch?v=Cjx9cZNkvCA" target="_blank" class="external-link">
                Trailer
                <span class="material-symbols-outlined" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">open_in_new</span>
            </a>
        </li>
    </ul>
`
const currentPath = window.location.pathname

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("wrapper").appendChild(footer)
    document.querySelector("header").after(nav)
    document.querySelectorAll("a").forEach(tag => {
        if (tag.href.includes(currentPath)) tag.setAttribute("id", "page")
    }) 
})