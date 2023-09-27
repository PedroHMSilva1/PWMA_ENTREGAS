class Login {
    constructor (){
        this.id = 1;
        this.arrayLogin = [];
    }

    checar (){
        let login = this.clicou();

        if(this.validacampo(login))  {
            window.alert("Login Efetuado com Sucesso")
            this.adicionar(login)
            
        }   
        this.listatabela();
        this.cancelar();
    }    
    listatabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0 ; i < this.arrayLogin.length ; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_Login = tr.insertCell();
            let td_senha = tr.insertCell();
            
            td_Login.innerText = this.arrayLogin[i].Login;
            td_senha.innerText = this.arrayLogin[i].password;
            td_id.innerText = this.arrayLogin[i].id;

            td_id.classList.add('center');
            td_senha.classList.add('center');
            
        }

    }

    adicionar(login){
        this.arrayLogin.push(login);
        this.id++;
    }

    cancelar(){
        document.getElementById('usuario').value = '';
        document.getElementById('password').value = '';
    }


    clicou () {        
        let Login = {

    }
    Login.id = this.id;
    Login.Login = document.getElementById('usuario').value;
    Login.password = document.getElementById('password').value;
    

    return Login;
    }
    validacampo(login){
        let msg = '';
        if(login.Login == ''){
            msg += '- Informe Seu Login \n';
        }
        if(login.password == ''){
            msg += '- Digite sua Senha \n';
        }
        if(msg != ''){
            alert(msg);
            return false
        }

        return true;

    }
}

var login = new Login();