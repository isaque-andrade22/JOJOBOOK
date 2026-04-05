const { createApp } = Vue;

createApp({

    data() {
        return{
            DadosChars: [],
            DadosStands: [],
            LimiteChars: 4,
            LimiteStands: 4,
            ParteNumeroAtual: 1
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