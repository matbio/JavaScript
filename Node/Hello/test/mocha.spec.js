var chai = require("chai");
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

// Iniciando a aplicação junto aos testes
const app = require("../app")
const request = chai.request(app)

// realizando os testes com a aplicação já iem execução
//const request = chai.request("http://localhost:3000");

const expect = chai.expect;


describe("Testes com o Mocha e Chai", function(){
    it("Primeiro teste", function(){
        expect(1).to.equals(1);
    })

    it("Teste ChaiHttp", function(done) {
        request.get("/hello").end(function(err, resp){
            expect(resp.body.message).to.equal("Hello com uma aplicação de NodeJs");
            done();
        })     
    })
})