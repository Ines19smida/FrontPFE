<template>
<MaHeader/>
<section class="container">
    <section class="cont">
        <form>
                <label for="fname">Tapez le nom d'entreprise</label><br>
                <input type="text" id="fname" name="fname"><br>
                <label for="lname">Tapez votre avis</label><br>
                <input type="text" id="lname" name="lname"><br>
                <button id="env">Envoyer</button>
        </form>
    </section>
</section>
<MaFooter/>
</template>
<script>
    import MaHeader from './elements/MaHeader'
    import MaFooter from "./elements/MaFooter"
export default {
    data: () => ({}),
components: {
            MaHeader,
            MaFooter,
        },
}
</script>