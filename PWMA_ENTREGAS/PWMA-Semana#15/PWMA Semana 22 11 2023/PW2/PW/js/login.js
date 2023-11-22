class Login {
    constructor() {
        this.arrayLogin = [];
        this.usuariosValidos = [
            { username: 'usuario1', password: 'senha1' },
            { username: 'usuario2', password: 'senha2' }
        ];
    }

    checar() {
        const login = this.clicou();

        if (this.validaCredenciais(login)) {
            this.adicionar(login);
            if (login.username === 'usuario1') {
                window.location.href = 'dashboard1.html';
            } else if (login.username === 'usuario2') {
                window.location.href = 'dashboard2.html';
            }
        }
    }

    adicionar(login) {
        this.arrayLogin.push(login);
    }

    clicou() {
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        return { username, password };
    }

    validaCredenciais(login) {
        for (const usuario of this.usuariosValidos) {
            if (usuario.username === login.username && usuario.password === login.password) {
                return true;
            }
        }

        alert('Credenciais inválidas. Tente novamente.');
        return false;
    }
}

const login = new Login();