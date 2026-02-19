"use strict";
/*
  O atributo 'private' utilizado no constructor restringe o instanciamento de uma class;
permitindo apenas dentro da mesma. O código abaixo utiliza o padrao singleton e factory
method (GoF). O exemplo faz a conexao de um banco, mas permite apenas 1 conexão. O
método static permite que a class seja acessada sem instância.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    Database.prototype.connect = function () {
        console.log("Connect: ".concat(this.host, ", ").concat(this.user, ", ").concat(this.password));
    };
    Database.getDatabase = function (host, user, password) {
        if (Database.database) {
            console.log('INSTANCE ALREADY EXISTS.');
            return Database.database;
        }
        console.log('CREATE NEW INSTANCE.');
        Database.database = new Database(host, user, password);
        return Database.database;
    };
    return Database;
}());
exports.Database = Database;
var db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
var db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();
var db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();
var db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();
