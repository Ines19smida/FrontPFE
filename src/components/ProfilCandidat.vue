<template>
    <MaHeader/>
    <div class="profil-header">
    <img src="../assets/image-cap.svg" class="w-100 profil-couverture">
    <img src="../assets/user-avatar.webp" class="profil-logo" >
    </div>
<div class="profil-info pt-5 bg-white">
    <h1 class="text-center">{{name}}</h1>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <div class="card h-100">
                <div class="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                        <h3>Présentation</h3>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="card mb-3">
                <div class="card-body">
                    <h5>Niveau Etude</h5>
                    <p class="fs-2"><i class="fa-solid fa-user-graduate"></i>{{niveauEtude}}</p>
                </div>
                <div class="card-body">
                    <h5>Expérience</h5>
                    <p class="fs-2"> <i class="fas fa-book"></i>{{expereriences}}</p>
                </div>
                <div class="card-body">
                    <h5>Compétence</h5>
                    <p class="fs-2"><i class="fas fa-brain"></i>{{competences}}</p>
                </div>
                <div class="card-body">
                    <h5>Addresse</h5>
                    <p class="fs-2"><i class="fa-solid fa-location-dot"></i>{{adresse}}</p>
                </div>
                <div class="card-body">
                    <h5>Numéro de téléphone</h5>
                    <p class="fs-2"> <i class="fas fa-phone"></i>{{numTel}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    <MaFooter/>
</template>
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
            niveauEtude:null,
            experience:null,
            competence:null,
            Addresse:null,
            numTel:null,
            id:null,
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
                my.name=data.user.nom + data.user.prenom
                my.description = data.user.description
                my.niveauEtude = data.user.niveauEtude
                my.experience = data.user.experiences
                my.competence = data.user.competences
                my.addresse = data.user.adresse
                my.numTel = data.user.numTel
                my.id = data.user.id
            },
            error(jqXHR){
                my.errors = jqXHR.responseJSON.errors
            }
        })
    },
}
</script>