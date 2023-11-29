<template>
    <MaHeader v-if="user"/>
    <div v-if="user">
        <div class="profil-header">
            <img src="@/assets/image-cap.svg" class="w-100 profil-couverture">
            <img src="@/assets/user-avatar.webp" class="profil-logo" >
        </div>
        <div class="profil-info pt-5 bg-white">
            <h1 class="text-center">{{user.nom}} {{user.prenom }}</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card h-100">
                        <div class="card-body h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h2>Présentation</h2>
                                <div v-if="modeEditPresentation == false">
                                    <button class="btn position-absolute" style="top: 0;right: 0;" @click="openEditPresentation"><i class="fas fa-edit"></i></button>
                                    <p>{{user.description}}</p>
                                </div>
                                <div v-if="modeEditPresentation == true">
                                    <textarea ref="nouveauPresentation" class="form-control mb-2" v-model="user.description" rows="5"></textarea>
                                    <button type="button" class="btn btn-primary w-100" @click="updatePresentation">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="user.type = 'recruteur'" class="col-sm-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h2>Equipe</h2>
                            <div v-if="modeEditEquipe == false">
                                <button class="btn float-end" @click="openEditEquipe"><i class="fas fa-edit"></i></button>
                                <p class="fs-2"><i class="fas fa-user-friends"></i> {{user.equipe}}</p>
                            </div>
                            <div v-if="modeEditEquipe == true">
                                <div class="input-group">
                                    <input type="text" ref="nouveauNombreEquipe" class="form-control" :value="user.equipe" placeholder="Nouveau nombre d'équipe">
                                    <button class="btn btn-secondary" type="button" @click="updateEquipe">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h2>Nos offres</h2>
                            <div class="d-flex flex-column justify-content-center">
                                <router-link class="btn btn-primary btn-sm" to="/offer/add"><i class="fas fa-plus-circle"></i> Ajouter</router-link>
                            </div>
                        </div>
                        <div class="card-body">
                            <table v-if="offres" class="table table-hover">
                                <tbody>
                                <tr v-for="offre in offres" :key="offre.id">
                                    <td>{{offre.sujet}}</td>
                                    <td>{{offre.dateDeDebut}}</td>
                                    <td>
                                        <div class="btn-group btn-group-sm float-end">
                                            <router-link class="btn btn-secondary" :to="'/offre/candidat/' + offre.id"><i class="far fa-eye"></i> Candidat</router-link>
                                            <router-link class="btn btn-warning" :to="'/offre/edit/' + offre.id" :class="{ disabled: offre.condidatureNumber != 0 }"><i class="fas fa-edit"></i> Edit</router-link>
                                            <button class="btn btn-danger" @click="deleteOffer(offre.id)" id="btnn"><i class="fas fa-trash"></i> Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MaFooter v-if="user"/>
</template>
<script>
    import $ from "jquery"
    import MaHeader from '@/components/elements/MaHeader'
    import MaFooter from "@/components/elements/MaFooter"
    export default {
        data() {
            return {
                user: null,
                offres: [],
                contacts: [],
                modeEditEquipe: false,
                modeEditPresentation: false
            }
        },
        components: {
            MaHeader,
            MaFooter,
        },
        mounted: function () {
            this.$nextTick(function () {
                this.user = this.$user.get()
                this.loadOffers()
            })
        },
        methods: {
            deleteOffer(id) {
                const my = this
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/supprimer/' + id,
                    dataType: "json",
                    method: 'delete',
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.loadOffers()
                    },
                    error() {

                    }
                })
            },
            loadOffers() {
                const my = this
                let token = my.$cookies.get('token')
                if (token != null) {
                    $.ajax({
                        url: 'http://127.0.0.1:8000/api/profile',
                        dataType: "json",
                        method: 'GET',
                        data: {
                            offre: true,
                            contact: true
                        },
                        headers: {
                            "authorization": "Bearer " + token
                        },
                        success(data) {
                            my.user = data.user
                            my.offres = data.offers
                            my.contacts = data.contacts
                        },
                        error() {
                            my.user = null
                        }
                    })
                }
            },
            openEditEquipe() {
                this.modeEditEquipe = true
            },
            openEditPresentation() {
                this.modeEditPresentation = true
            },
            updateEquipe() {
                const my = this
                let val = $(this.$refs.nouveauNombreEquipe).val()
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/user/update-equipe',
                    dataType: "json",
                    method: 'GET',
                    data: {
                        numberEquipe: val
                    },
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.loadOffers()
                        my.modeEditEquipe = false
                    },
                    error() {
                    }
                })
            },
            updatePresentation() {
                const my = this
                let val = $(this.$refs.nouveauPresentation).val()
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/user/update-presentation',
                    dataType: "json",
                    method: 'GET',
                    data: {
                        presentation: val
                    },
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.loadOffers()
                        my.modeEditPresentation = false
                    }
                })
            }
        },
    }
</script>