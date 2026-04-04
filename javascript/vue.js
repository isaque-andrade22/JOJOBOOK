const { createApp } = Vue;

createApp({

    data() {
        return{
            DadosChars: [],
            DadosStands: [],
            LimiteChars: 4,
            LimiteStands: 4
        }
    },

    mounted() {
        console.log("Teste se a página carrega");
        this.BuscarDados();

        console.log("Teste se os dados foram certos:")
        console.log(this.DadosChars)
    },

    methods: {
        async BuscarDados(){
            const JsonDados = await(fetch("../dados/chars.json"));
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