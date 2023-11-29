<template>
    <MaHeader v-if="user" />
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
                <div v-if="user.type = 'candidat'" class="col-sm-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h3>Niveau Etude</h3>
                            <div v-if="modeEditNiveau == false">
                                <button class="btn float-end" @click="openEditNiveau"><i class="fas fa-edit"></i></button>
                                <p class="fs-2"><i class="fas fa-graduation-cap"></i> {{user.niveauEtude}}</p>
                            </div>
                            <div v-if="modeEditNiveau == true">
                                <div class="input-group">
                                    <input type="text" ref="nouveauNiveau" class="form-control" placeholder="Nouveau niveau etude">
                                    <button class="btn btn-secondary" type="button" @click="updateNiveau">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3>Expérience</h3>
                            <div v-if="modeEditExperience == false">
                                <button class="btn float-end" @click="openEditExperience"><i class="fas fa-edit"></i></button>
                                <p class="fs-2"><i class="fas fa-book"></i> {{user.experiences}}</p>
                            </div>
                            <div v-if="modeEditExperience == true">
                                <div class="input-group">
                                    <input type="text" ref="nouveauExperience" class="form-control" placeholder="Nouvelle experience">
                                    <button class="btn btn-secondary" type="button" @click="updateExperience">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3>Compétence</h3>
                            <div v-if="modeEditCompetence == false">
                                <button class="btn float-end" @click="openEditCompetence"><i class="fas fa-edit"></i></button>
                                <p class="fs-2"><i class="fas fa-brain"></i> {{user.competences}}</p>
                            </div>
                            <div v-if="modeEditCompetence == true">
                                <div class="input-group">
                                    <input type="text" ref="nouveauCompetence" class="form-control" placeholder="Nouvelle compétence">
                                    <button class="btn btn-secondary" type="button" @click="updateCompetence">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3>Addresse</h3>
                            <div v-if="modeEditAddresse == false">
                                <button class="btn float-end" @click="openEditAddresse"><i class="fas fa-edit"></i></button>
                                <p class="fs-2"><i class="fas fa-map-marker-alt"></i> {{user.adresse}}</p>
                            </div>
                            <div v-if="modeEditAddresse == true">
                                <div class="input-group">
                                    <input type="text" ref="nouveauAddresse" class="form-control" placeholder="votre addresse">
                                    <button class="btn btn-secondary" type="button" @click="updateAddresse">Sauvegarder</button>
                                </div>
                            </div>
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
                modeEditNiveau: false,
                modeEditPresentation: false,
                modeEditExperience: false,
                modeEditCompetence: false,
                modeEditAddresse: false,
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
            loadOffers() {
                const my = this
                let token = my.$cookies.get('token')
                if (token != null) {
                    $.ajax({
                        url: 'http://127.0.0.1:8000/api/profile',
                        dataType: "json",
                        method: 'GET',
                        data: {
                            offre: false,
                            candidature: true
                        },
                        headers: {
                            "authorization": "Bearer " + token
                        },
                        success(data) {
                            my.user = data.user
                            console.log(data)
                        }
                    })
                }
            },
            openEditNiveau() {
                this.modeEditNiveau = true
            },
            openEditPresentation() {
                this.modeEditPresentation = true
            },
            openEditExperience() {
                this.modeEditExperience = true
            },
            openEditCompetence() {
                this.modeEditCompetence = true
            },
            openEditAddresse() {
                this.modeEditAddresse = true
            },
            updateNiveau() {
                const my = this
                let val = $(this.$refs.nouveauNiveau).val()
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/user/update-niveau',
                    dataType: "json",
                    method: 'GET',
                    data: {
                        niveau: val
                    },
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.modeEditNiveau = false
                        my.loadOffers()
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
                        my.modeEditPresentation = false
                        my.loadOffers()
                    }
                })
            },
            updateExperience() {
                const my = this
                let val = $(this.$refs.nouveauExperience).val()
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/user/update-experience',
                    dataType: "json",
                    method: 'GET',
                    data: {
                        experience: val
                    },
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.modeEditExperience = false
                        my.loadOffers()
                    }
                })
            },
            updateCompetence() {
                const my = this
                let val = $(this.$refs.nouveauCompetence).val()
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/user/update-competence',
                    dataType: "json",
                    method: 'GET',
                    data: {
                        competence: val
                    },
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.modeEditCompetence = false
                        my.loadOffers()
                    }
                })
            },
            updateAddresse() {
                const my = this
                let val = $(this.$refs.nouveauAddresse).val()
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/user/update-addresse',
                    dataType: "json",
                    method: 'GET',
                    data: {
                        addresse: val
                    },
                    headers: {
                        "authorization": "Bearer " + token
                    },
                    success() {
                        my.modeEditAddresse = false
                        my.loadOffers()
                    }
                })
            }
        },
    }
</script>