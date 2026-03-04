const display = document.getElementsById("display");
    const botoes = document.querySelectorALL("button")

    let expressao = "";

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const valor = botao.textContent;

            if (valor === "c") {
                expressao = "";
                display.textContent = "0";
                return
            }

            if (valor === "=") {
                try {
                    expressao = eval(expressao).toString();
                    display.textContent = expressao;
                } catch {
                    display.textContent = "Erro";
                    expressao = "";
                }
                return;
            }

            expressao += valor;
            display.textContent = expressao;
        });
    });