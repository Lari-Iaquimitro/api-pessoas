export class Pessoa {

    //atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //metodo construtor
    public constructor(_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
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
    public getNome() {   //get = atribuir (não tem parâmetro, mas tem retorno)
        return this.nome;
    }

    /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _nome : nome da Pessoa
     */
    public setNome(_nome: string) {  //set = atribuir (tem parâmetro, mas não tem retorno)
        this.nome = _nome
    }

    /**
    * Retorna o Cpf da Pessoa
    * 
    * @returns cpf : cpf da pessoa
    */
    public getCpf() {
        return this.cpf;
    }

    /**
     * Atribui o parâmetro ao atributo cpf
     * 
     * @param _cpf : cpf da Pessoa
     */
    public setCpf(_cpf: string) {
        this.cpf = _cpf;
    }

    /**
     * Retorna a data de nascimento da Pessoa
     * 
     * @returns data_nascimento: data de nascimento da pessoa
     */
    public getData_nascimento() {
        return this.data_nascimento;
    }

    /**
    * Atribui o parâmetro ao atributo data_nascimento
    * 
    * @param _data_nascimento : data de nascimento da Pessoa
    */
    public setData_nascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }

    /**
     * Retorna o telefone da Pessoa
     * 
     * @returns telefone : telefone da pessoa
     */
    public getTelefone() {
        return this.telefone;
    }

    /**
    * Atribui o parâmetro ao atributo telefone
    * 
    * @param _telefone : telefone da Pessoa
    */
    public setTelefone(_telefone: string) {
        this.telefone = _telefone;
    }

    /**
     * Retorna o endereço da Pessoa
     * 
     * @returns endereço : endereço da pessoa
     */
    public getEndereco() {
        return this.endereco;
    }

    /**
    * Atribui o parâmetro ao atributo endereço
    * 
    * @param _endereco : endereço da Pessoa
    */
    public setEndereco(_endereco: string) {
        this.endereco = _endereco;
    }

    /**
     * Retorna a altura da Pessoa
     * 
     * @returns altura : altura da pessoa
     */
    public getAltura() {
        return this.altura;
    }

    /**
    * Atribui o parâmetro ao atributo altura
    * 
    * @param _altura : altura da Pessoa
    */
    public setAltura(_altura: number) {
        this.altura = _altura;
    }

    /**
     * Retorna o peso da Pessoa
     * 
     * @returns peso : peso da pessoa
     */
    public getPeso() {
        return this.peso;
    }

    /**
    * Atribui o parâmetro ao atributo peso
    * 
    * @param _peso : peso da Pessoa
    */
    public setPeso(_peso: number) {
        this.peso = _peso;
    }

    public mostraPessoa() {
        console.log(`Nome: ${this.nome}
CPF: ${this.cpf}
Data: ${this.data_nascimento}
Telefone: ${this.telefone}
Endereço: ${this.endereco}
Altura: ${this.altura}
Peso: ${this.peso}`);
    }

    //implementar métodos
    public falar(): void {
        //lógica do negócio
        console.log(`${this.nome} está falando:`);
    }

    public falarFrase(_frase: string): void {
        //lógica de negócio
        console.log(`${this.nome} fala a frase: ${_frase}`);
    }

    public andar() {
        //lógica do negócio
        console.log(`${this.nome} está andando...`);
    }

    public andarKm(_quilômetros: number) {
        setTimeout(() => {
            console.log(`${this.nome} andou ${_quilômetros}km.`)
        }, 1000)

    }

    public comer() {
        console.log(`${this.nome} está comendo:`);
    }

    public comerPrato(_prato: string) {
        console.log(`${this.nome} está comendo ${_prato}.`);
    }
}
