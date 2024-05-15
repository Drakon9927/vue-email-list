const { createApp } = Vue

createApp({
    data() {
        return {
           email: null
        }
    },
        methods: {
           
        },
        mounted(){
            console.log("App montata");

            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(function (result){
                this.email = result.data.response;
            
        })
        }
}).mount(`#app`)