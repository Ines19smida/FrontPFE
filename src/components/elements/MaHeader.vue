<template>
    <div class="header fixed-top">
        <nav class="navbar navbar-expand-sm navbar-light bg-white">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Logo</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <router-link class="nav-link mx-sm-3" to="/entreprise">Entreprises</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mx-sm-3" to="/offre">Offres</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mx-sm-3" to="/avis">Avis</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <MaLogin v-if="userType == 'GEST'" />
                            <router-link v-if="userType == 'GEST'" class="btn btn-outline-orange btn-sm" to="/inscription" >J'inscris</router-link>
                            <router-link v-if="userType != 'GEST'" class="btn btn-outline-orange me-2 btn-sm" to="/profil"><i class="fas fa-user"></i> Profile</router-link>
                            <button v-if="userType != 'GEST'" class="btn btn-outline-danger btn-sm" @click="logout()" type="button" id="log"><i class="fas fa-sign-out"></i> logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style lang="scss">
    div.header {
        box-shadow: 0 1px 2px 0 #adadad;
        z-index: 9999;

        .navbar-brand {
            font-size: 2rem;
            font-weight: 600;

            .logo {
                border-radius: 50%;
                width: 12px;
                height: 12px;
            }
        }
    }
</style>
<script>
    import MaLogin from "@/components/elements/MaLogin";
    import router from "@/router";
    export default {
        data() {
            return {
                userType:"GEST"
            }
        },
        components: {
            MaLogin
        },
        mounted: function () {
            this.$nextTick(function () {
                const my = this
                my.userType = my.$user.get('type')
            })
        },
        methods: {
            logout() {
                const my = this
                my.$user.logout(function () {
                    router.replace({ path: '/' })
                    if (my.$router.currentRoute.value.fullPath == '/') {
                        my.$router.go(my.$router.currentRoute)
                    }
                })
            }
        }
    }
</script>