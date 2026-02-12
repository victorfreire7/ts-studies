/*
  O atributo 'private' utilizado no constructor restringe o instanciamento de uma class;
permitindo apenas dentro da mesma. O código abaixo utiliza o padrao singleton e factory
method (GoF). O exemplo faz a conexao de um banco, mas permite apenas 1 conexão. O
método static permite que a class seja acessada sem instância.
*/

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ){}

  connect(): void {
    console.log(`Connect: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string) : Database {
    if(Database.database) {
      console.log('INSTANCE ALREADY EXISTS.');
      return Database.database;
    }
    console.log('CREATE NEW INSTANCE.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();
