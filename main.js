class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//herança
class TodoList extends List{
    constructor() {
        super();

        this.usuario = 'Felipe';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo'). onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

//metodo estatico não enxerga o resto da classe só retorna algo
class Math {
    static sum(a, b) {
        return a + b;
    }
}

console.log(Math.sum(1, 4));
