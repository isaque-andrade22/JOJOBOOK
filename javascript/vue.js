const { createApp } = Vue;

createApp({

    data() {
        return{
            DadosChars: [],
            DadosStands: [],
            LimiteChars: 4,
            LimiteStands: 4,
            ParteNumeroAtual: 1,

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
        const parametro = new URLSearchParams(window.location.search).get('parte')
        this.ParteNumeroAtual = parametro
        console.log(parametro)

        this.BuscarDados(parametro);

        console.log("Teste se os dados foram certos:")
        console.log(this.DadosChars)
    },

    methods: {
        async BuscarDados(numeroParte){
            const JsonDados = await(fetch(`../dados/parte${numeroParte}.json`));
            const dados = await JsonDados.json();
            
            console.log("dados carregados:");
            console.log(dados);

            this.DadosChars = dados["personagens"]
            this.DadosStands = dados["stands"]

        },
        
        ExpandirBotao(categoria) {
            if (categoria === 'personagens'){
                if (this.LimiteChars <= this.DadosChars.length) {
                    this.LimiteChars +=4
                } else {
                    this.LimiteChars = 4;
                    this.$nextTick(() => {this.$refs.tituloPersonagens.scrollIntoView({ behavior: 'smooth' })})
                }
            }
            
            else if (categoria === 'stands') {
                if (this.LimiteStands <= this.DadosStands.length) {
                    this.LimiteStands +=4
                } else {
                    this.LimiteStands = 4;
                    this.$nextTick(() => {this.$refs.tituloStands.scrollIntoView({ behavior: 'smooth' })});
                }
            }
        },
    }
}).mount('#app');