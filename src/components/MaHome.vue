<template>
    <MaHeader />
    <div class="d-flex flex-column justify-content-around py-5 backimage">
        <section>
            <h1 class="text-center">Le travail, c'est un alibi, une fuite</h1>
            <p class="text-center">
                Sur Logo, Choisissez un travail que vous aimez et vous n’aurez pas à travailler <br>
                un seul jour de votre vie
            </p>
            <form class="text-center">
                <div class="input-group m-auto w-50">
                    <input type="search" class="form-control border-primary" placeholder=" Quel poste recherchez vous? " >
                    <button type="button" class="btn btn-outline-primary bg-white text-primary border-start-0">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </section>
        <section>
            <h2 class="text-center">Ils recrutent sur Logo</h2>
            <div class="row mt-3">
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="../assets/image-cap.svg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="../assets/image-cap.svg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 car">
                    <div class="card">
                        <img class="card-img-top" src="../assets/image-cap.svg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <MaFooter />
</template>
<script>
    import MaHeader from './elements/MaHeader'
    import MaFooter from "./elements/MaFooter";
    export default {
        data: () => ({}),
        components: {
            MaHeader,
            MaFooter,
        }
    }
</script>
<style>
.backimage{
    padding-left: 20px !important;
    padding-right: 20px !important;
    padding-top: 100px !important;
    background-image: url('../../src/assets/h1_hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>