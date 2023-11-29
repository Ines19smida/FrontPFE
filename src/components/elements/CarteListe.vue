<template>
    <div class="carte-liste">
        <slot :items="items" :updateEvent="updateEvent"/>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    data () {
        return {
            items: []
        }
    },
    props: {
        maxResult:{
            type:Number,
            default:6
        },
        apiUrl: {
            type:String,
            required: true
        },
        defaultFiltrage:{
            type:Object,
            default(){
                return {}
            }
        },
        getData:{
            type:Function,
            default() {
                return function() {return{}}
            }
        }
    },
    methods: {
        lood(dataFiltrage){
            let my = this
            $.ajax(this.apiUrl,{
                data:dataFiltrage,
                method: 'POST',
                success(data){
                    my.items=data
                },
                error(){
                }
            })
        },
        updateEvent() {
            let data = this.getData()
            this.lood(data)
        }
    },
    mounted() {
        this.lood(this.defaultFiltrage);
    }

}
</script>