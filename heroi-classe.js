class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    } 
  
    atacar() {
      let ataque = ""
      if (this.tipo === "Guerreiro") {
        ataque = "Espada"
      }
     
      if (this.tipo === "mago") {
        ataque = "magia"
      }
       if (this.tipo === "monge") {
        ataque = "artes marciais"
      }
       if (this.tipo === "ninja") {
        ataque = "shuriken"
      }
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
   }
    }
  
  const heroi = new Heroi("Heroi qualq", 20, "Guerreiro")
  
  heroi.atacar();