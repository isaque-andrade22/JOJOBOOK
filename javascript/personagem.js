const { createApp } = Vue;

createApp({

    data() {
        return{
            DadosChar: {},
            ParteNumeroAtual: 1,
            IdPersonagem: 1
        }
    },

    mounted() {
        console.log("Teste se a página carrega");
        const numeroParte = new URLSearchParams(window.location.search).get('parte');
        const numeroId = new URLSearchParams(window.location.search).get('id');

        this.ParteNumeroAtual = numeroParte;
        this.IdPersonagem = numeroId;

        console.log(numeroParte);
        console.log(numeroId);


        this.BuscarDados(this.ParteNumeroAtual, this.IdPersonagem)
    },

    methods: {
        async BuscarDados(numeroParte, numeroId){
            const JsonDados = await fetch(`../dados/parte${numeroParte}.json`);
            const dados = await JsonDados.json();

            const personagemSelecionado = dados.personagens.find(char => char.id == numeroId);

            console.log("Econtrado:");
            console.log(personagemSelecionado)

            this.DadosChar = personagemSelecionado
        }
    }
}).mount('#app');