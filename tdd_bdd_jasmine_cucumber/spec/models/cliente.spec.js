const Cliente = require("../../models/cliente.js")

describe('Clientes', () => {
    beforeEach(async () => {

    })

    it('Valida propriedades de um cliente', async () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()
    });

    it('Retorna todos', async () => {
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10)
    });

    it('Nome do cliente Upercase', async () => {
        let cliente = Cliente.primeiro();
        cliente.nome = "danilo"
        expect(cliente.nomeUppercase()).toEqual(cliente.nome.toUpperCase());
    });


})
