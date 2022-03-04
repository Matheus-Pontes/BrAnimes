let url = "receitaFederal.xml";
let xhrDoc;
let xhr;

const useXML = {
    init() {
        useXML.criaObjetoXHR();
        useXML.carregaXML();
        useXML.processaRetorno();
    },

    criaObjetoXHR(){
        if (window.XMLHttpRequest) { 
            xhr = new XMLHttpRequest();
         }
         else {
            alert('A solicitação HTTP não poderá ser efetuada!');     
         }	
    },

    carregaXML(){	
        xhr.open('GET', url, true); 
        xhr.onreadystatechange = useXML.processaRetorno; 
        xhr.responseType = 'document';
        xhr.withCredentials = true;
        xhr.send(null); 
    },

    processaRetorno(){
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {			
                xhrDoc = xhr.response; 
                useXML.exibirDados();
            }
        }
    
    },

    exibirDados() {
        let pessoas = xhrDoc.querySelectorAll("Pessoa");
    
        let conteudo = "";
    
        for(let i=0; i < pessoas.length; i++) {
            // conteudo += pessoas[i].childNode[0].nodeValue + "</p>" 
            console.log(pessoas[i].childNodes[0].textContent)
    
            conteudo += `
                <div class='content'>
                    <div class='imagem'>
                        <img src=https://source.unsplash.com/random?id=${i}>
                    </div>

                    <div class='dados'>
                        <p>Nome: ${pessoas[i].childNodes[0].textContent}</p>
                        <p>CPF: ${pessoas[i].childNodes[1].textContent}</p>
                        <p>Endereço: ${pessoas[i].childNodes[2].textContent}</p>
                        <p>Telefone: ${pessoas[i].childNodes[3].textContent}</p>
                        <p>Email: ${pessoas[i].childNodes[4].textContent}</p>
                    </div>
                </div>
            ` 
        }
    
        document.querySelector(".container").innerHTML = conteudo;
    }
}


useXML.init();