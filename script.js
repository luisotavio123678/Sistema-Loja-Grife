```javascript
// =======================================
// MAISON ÉLÉGANCE
// Sistema de Gestão de Loja de Grife
// JavaScript Principal
// =======================================


// Aguarda carregamento completo

document.addEventListener("DOMContentLoaded", function(){


    console.log("Maison Élégance carregado com sucesso!");



    // ===================================
    // ANIMAÇÃO DE ENTRADA
    // ===================================


    const sections = document.querySelectorAll("section");


    sections.forEach((section,index)=>{


        section.style.opacity="0";

        section.style.transform="translateY(30px)";


        setTimeout(()=>{


            section.style.transition="0.8s ease";

            section.style.opacity="1";

            section.style.transform="translateY(0)";


        },200 * index);



    });





    // ===================================
    // BOTÕES DE COMPRA
    // ===================================


    const buttons = document.querySelectorAll(".btn-gold");



    buttons.forEach(button=>{


        button.addEventListener("click",function(event){


            if(this.innerText.includes("Comprar")){


                event.preventDefault();


                mostrarMensagem(

                "Produto adicionado ao carrinho premium!"

                );


            }


        });


    });






    // ===================================
    // FUNÇÃO DE ALERTA PERSONALIZADO
    // ===================================


    function mostrarMensagem(texto){


        const alerta=document.createElement("div");


        alerta.className="alerta-luxo";


        alerta.innerHTML=

        `
        <i class="fas fa-check-circle"></i>
        ${texto}
        `;



        document.body.appendChild(alerta);



        setTimeout(()=>{


            alerta.remove();


        },3000);



    }





    // ===================================
    // FORMULÁRIOS
    // ===================================


    const forms=document.querySelectorAll("form");



    forms.forEach(form=>{


        form.addEventListener("submit",function(event){


            event.preventDefault();



            mostrarMensagem(

            "Dados registrados com sucesso!"

            );



            form.reset();



        });



    });





});
```
```javascript
// =======================================
// PESQUISA DINÂMICA
// =======================================


function pesquisarProdutos(){


    let campo = document.getElementById("pesquisa");


    if(!campo) return;



    let termo = campo.value.toLowerCase();



    let produtos = document.querySelectorAll(".card");



    produtos.forEach(produto=>{


        let texto = produto.innerText.toLowerCase();



        if(texto.includes(termo)){


            produto.style.display="block";


        }else{


            produto.style.display="none";


        }



    });


}




// =======================================
// CONTADOR ANIMADO DOS INDICADORES
// =======================================


function animarNumeros(){


    const numeros=document.querySelectorAll(".stat h2");



    numeros.forEach(numero=>{


        let valorTexto=numero.innerText;



        let valor=parseInt(

            valorTexto.replace(/\D/g,'')

        );



        if(isNaN(valor)) return;



        let inicio=0;



        let intervalo=setInterval(()=>{


            inicio += Math.ceil(valor/80);



            if(inicio>=valor){


                inicio=valor;

                clearInterval(intervalo);


            }



            numero.innerText=inicio.toLocaleString("pt-BR");



        },30);



    });



}



window.addEventListener(

"load",

animarNumeros

);






// =======================================
// FILTRO DE STATUS DE PEDIDOS
// =======================================


function filtrarPedidos(status){


    const linhas=document.querySelectorAll("tbody tr");



    linhas.forEach(linha=>{


        let conteudo=linha.innerText;



        if(status==="Todos"){


            linha.style.display="table-row";


        }

        else if(conteudo.includes(status)){


            linha.style.display="table-row";


        }

        else{


            linha.style.display="none";


        }



    });


}






// =======================================
// CONFIRMAÇÃO DE AÇÕES
// =======================================


function confirmarAcao(mensagem){


    return confirm(mensagem);



}





// =======================================
// RELÓGIO DO SISTEMA
// =======================================


function atualizarHorario(){


    const elemento=document.getElementById("horaSistema");



    if(!elemento)return;



    let data=new Date();



    elemento.innerHTML=

    data.toLocaleString("pt-BR");



}



setInterval(

atualizarHorario,

1000

);






// =======================================
// PREPARAÇÃO PARA GRÁFICOS
// Chart.js
// =======================================


function carregarGrafico(){


    const canvas=document.getElementById("graficoFinanceiro");



    if(!canvas)return;



    new Chart(canvas,{


        type:"line",


        data:{


            labels:[

            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun"

            ],


            datasets:[{


                label:"Faturamento",


                data:[

                180000,
                240000,
                310000,
                350000,
                390000,
                412000

                ]


            }]


        },


        options:{


            responsive:true


        }



    });



}






document.addEventListener(

"DOMContentLoaded",

carregarGrafico

);
```
