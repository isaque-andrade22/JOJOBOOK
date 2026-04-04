const { createApp } = Vue;

createApp({

    data() {
        return{
            DadosJson: [],
        }
    },

    mounted() {
        console.log("Teste se a página carrega");
        this.BuscarDados();

        console.log("Teste se os dados foram certos:")
        console.log(this.DadosJson)
    },

    methods: {
        async BuscarDados(){
            const JsonDados = await(fetch("../dados/chars.json"));
            const dados = await JsonDados.json();
            
            console.log("dados carregados:");
            console.log(dados);

            this.DadosJson = dados
        }
    }
}).mount('#app');