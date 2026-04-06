const { createApp } = Vue;

createApp({

    data() {
        return{
            DadosChar: {},
            ParteNumeroAtual: 1,
            IdPersonagem: 1,
        
            MenuPartes: [
            { numero: 1, nome: "Phantom Blood" },
            { numero: 2, nome: "Battle Tendency" },
            { numero: 3, nome: "Stardust Crusaders" },
            { numero: 4, nome: "Diamond is Unbreakable" },
            { numero: 5, nome: "Vento Aureo" },
            { numero: 6, nome: "Stone Ocean" },
            { numero: 7, nome: "Steel Ball Run" },
            { numero: 8, nome: "JoJolion" }
        ]
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