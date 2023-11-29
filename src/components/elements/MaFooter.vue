<template>
    <div class="footer pt-5 pb-3 text-light">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    <router-link class="logo link-light" to="/">Logo</router-link>
                </div>
                <div class="col-sm-7">
                    <div class="row mt-4 pt-3">
                        <div class="col-sm-4">
                            <h3>Entreprise</h3>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <router-link class="nav-link link-light" to="/inscription">créer votre page</router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link link-light" href="#">offres d'emploi</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                            <h3>Employé</h3>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <router-link class="nav-link link-light" to="/inscription">créer votre page</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link link-light" to="/offre">découvrir nos offres</router-link>
                                </li>
                                <li>
                                    <a class="nav-link link-light" href="#">trouver votre travail</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                            <h3>A propos</h3>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <router-link class="nav-link link-light" to="/avis">avis</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card footer-card">
                        <div class="card-body text-black">
                            <div class="text-center mb-2">
                                <img class="img-fluid newsletter-img" src="../../assets/undraw_newsletter_re_wrob.svg" alt="Newsletter">
                            </div>
                            <h3>Newsletter : </h3>
                            <p>
                                News, bien-être au travail, lifestyle,
                                tutos, interviews… bref, de la bonne lecture
                                directement dans votre boite mail
                            </p>
                            <div class="input-group">
                                <input type="text" class="form-control border-primary border-end-0" placeholder="votre adresse email...">
                                <button class="btn btn-outline-primary border-start-0 bg-white text-primary"><i class="fas fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center pt-3">
                    <span>Copyright 2022, ines smida</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .footer {
        background-color: #5E6472;
        .logo {
            text-decoration: none;
            font-size: 2.5rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
        }
        .newsletter-img {
            width: 100px;
            height: auto;
        }
        .footer-card {
            border-radius: 1.25rem;
        }
    }
</style>
<script>
    export default {
        data: () => ({}),
        props: {

        },
        components: {
        }
    }
</script>