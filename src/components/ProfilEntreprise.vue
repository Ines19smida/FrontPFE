<template>
<MaHeader/>
<div class="profil-header">
    <img src="../assets/image-cap.svg" class="w-100 profil-couverture">
    <img src="../assets/user-avatar.webp" class="profil-logo" >
</div>
<div class="bg-white mb-5 profil-info pt-5 shadow">
    <h1 class="text-center">{{name}}</h1>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <div class="card h-100 shadow">
                <div class="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                        <h2>Présentation</h2>
                        <p>{{description}}</p>
                    </div>
                    <div v-if="$user.get('id') != $route.params.id">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Contactez-nous
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form @submit="sendContact">
                                            <div class="mb-2">
                                                <label for="contact-nom" class="form-label">
                                                    Nom
                                                </label>
                                                <input type="text" id="contact-nom" class="form-control" v-model="contactData.nom">
                                            </div>
                                            <div class="mb-2">
                                                <label for="contact-tel" class="form-label">
                                                    Numéro Téléphone
                                                </label>
                                                <input type="text" id="contact-tel" class="form-control" v-model="contactData.numTel">
                                            </div>
                                            <div class="mb-2">
                                                <label for="contact-email" class="form-label">
                                                    Email
                                                </label>
                                                <input type="email" id="contact-email" class="form-control" v-model="contactData.email">
                                            </div>
                                            <div class="mb-2">
                                                <label for="contact-sujet" class="form-label">
                                                    Sujet
                                                </label>
                                                <input type="text" id="contact-sujet" class="form-control" v-model="contactData.sujet">
                                            </div>
                                            <div class="mb-2">
                                                <label for="contact-question" class="form-label">
                                                    Question
                                                </label>
                                                <textarea type="text" id="contact-question" class="form-control" v-model="contactData.question">
                                                </textarea>
                                            </div>
                                            <button type="submit" class="btn btn-primary" id="send">
                                                Envoyer
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-sm-8">
            <div class="card mb-3 shadow">
                <div class="card-body">
                    <h2>Equipe</h2>
                    <p class="fs-2"><i class="fas fa-user-friends"></i> {{equipe}}</p>
                </div>
            </div>
            <div class="card shadow">
                <div class="card-body">
                    <h2>Nos offres</h2>
                    <table v-if="offres" class="table table-hover">
                        <tbody>
                        <tr v-for="offre in offres" :key="offre.id">
                            <td>{{offre.sujet}}</td>
                            <td>{{offre.dateDeDebut}}</td>
                            <td><router-link :to="'/offre/view/' + offre.id" class="btn btn-orange float-end">More..</router-link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<MaFooter/>
</template>
<style lang="scss">
.profil-header{
    position:relative;
    .profil-logo{
        position: absolute;
        bottom: -50px;
        left: 50%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        transform: translateX(-50%);
    }
    .profil-couverture{
        max-height: 400px;
        object-fit: cover;
    }
}
</style>
<script>

import MaHeader from './elements/MaHeader'
import MaFooter from "./elements/MaFooter";
import $ from "jquery";
export default {
    components: {
        MaHeader,
        MaFooter,
    },
    data(){
        return {
            photo:"../assets/image-cap.svg",
            logo:"../assets/image-cap.svg",
            name:'',
            description:null,
            equipe:0,
            offres:[],
            id:null,
            contactData:{}
        }
    },
    mounted() {
        const my = this
        $.ajax({
            url: 'http://127.0.0.1:8000/api/user-by-id',
            dataType: "json",
            data:{
                id: my.$route.params.id
            },
            method: 'POST',
            success(data){
                my.name=data.user.nom + ' ' + data.user.prenom
                my.description = data.user.description
                my.equipe = data.user.equipe
                my.id = data.user.id
                my.offres = data.offers
            },
            error(jqXHR){
                my.errors = jqXHR.responseJSON.errors
            }
        })
    },
    methods: {
        sendContact(e) {
            e.stopPropagation()
            e.preventDefault()
            let my = this
            const contactData = { ...my.contactData }
            contactData.user_id = my.id
            $.ajax({
                url: 'http://127.0.0.1:8000/api/contactus',
                dataType: "json",
                data: contactData,
                method: 'POST',
                success(){
                },
                error(){

                }
            })
            return false
        }
    }
}
</script>
