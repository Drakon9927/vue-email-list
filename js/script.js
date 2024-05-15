const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Drago"
        }
    },
        stampa: {
            stampaMsg() {
                console.log("Funziona ?")
            }
        },
}).mount(`#app`)