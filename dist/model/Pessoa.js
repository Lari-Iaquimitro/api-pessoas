"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //atributos da classe
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    //metodo construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    //metodos GETTERS(recupera infromação) and SETTERS(altera informação/ dá valor)
    /**
     * Retorna o Nome da Pessoa
     *
     * @returns nome : nome da pessoa
     */
    getNome() {
        return this.nome;
    }
    /**
     * Atribui o parâmetro ao atributo nome
     *
     * @param _nome : nome da Pessoa
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
    * Retorna o Cpf da Pessoa
    *
    * @returns cpf : cpf da pessoa
    */
    getCpf() {
        return this.cpf;
    }
    /**
     * Atribui o parâmetro ao atributo cpf
     *
     * @param _cpf : cpf da Pessoa
     */
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    /**
     * Retorna a data de nascimento da Pessoa
     *
     * @returns data_nascimento: data de nascimento da pessoa
     */
    getData_nascimento() {
        return this.data_nascimento;
    }
    /**
    * Atribui o parâmetro ao atributo data_nascimento
    *
    * @param _data_nascimento : data de nascimento da Pessoa
    */
    setData_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    /**
     * Retorna o telefone da Pessoa
     *
     * @returns telefone : telefone da pessoa
     */
    getTelefone() {
        return this.telefone;
    }
    /**
    * Atribui o parâmetro ao atributo telefone
    *
    * @param _telefone : telefone da Pessoa
    */
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    /**
     * Retorna o endereço da Pessoa
     *
     * @returns endereço : endereço da pessoa
     */
    getEndereco() {
        return this.endereco;
    }
    /**
    * Atribui o parâmetro ao atributo endereço
    *
    * @param _endereco : endereço da Pessoa
    */
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    /**
     * Retorna a altura da Pessoa
     *
     * @returns altura : altura da pessoa
     */
    getAltura() {
        return this.altura;
    }
    /**
    * Atribui o parâmetro ao atributo altura
    *
    * @param _altura : altura da Pessoa
    */
    setAltura(_altura) {
        this.altura = _altura;
    }
    /**
     * Retorna o peso da Pessoa
     *
     * @returns peso : peso da pessoa
     */
    getPeso() {
        return this.peso;
    }
    /**
    * Atribui o parâmetro ao atributo peso
    *
    * @param _peso : peso da Pessoa
    */
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                     CPF: ${this.cpf}
                     Data: ${this.data_nascimento}
                     Telefone: ${this.telefone}
                     Endereço: ${this.endereco}
                     Altura: ${this.altura}
                     Peso: ${this.peso}`);
    }
    //implementar métodos
    falar() {
        //lógica do negócio
        console.log(`${this.nome} está falando:`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala a frase: ${_frase}`);
    }
    andar() {
        //lógica do negócio
        console.log(`${this.nome} está andando...`);
    }
    andarKm(_quilômetros) {
        setTimeout(() => {
            console.log(`${this.nome} andou ${_quilômetros}km.`);
        }, 1000);
    }
    comer() {
        console.log(`${this.nome} está comendo:`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} está comendo ${_prato}.`);
    }
    /**
     * CRUD
     */
    cadastroPessoa(clovileu) {
        console.log(`${clovileu.nome} cadastro com sucesso`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map