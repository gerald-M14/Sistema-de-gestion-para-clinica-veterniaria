// header.js
document.addEventListener('DOMContentLoaded', function () {
    const headerHtml = `
        <nav class="navbar navbar-expand-lg" style="background-color: #ffffff;">
            <div class="container-fluid">
                <img src="img/logo.png" alt="Logo" class="logo-header">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none"></ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
                        <li class="nav-item"><i class="fa-solid fa-message me-4"></i></li>
                        <li class="nav-item"><i class="fa-solid fa-square-envelope me-4"></i></li>
                        <li class="nav-item"><i class="fa-solid fa-calendar-week me-4"></i></li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    `;
    document.querySelector('header').innerHTML = headerHtml;
});
