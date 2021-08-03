import chai from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp);

// Iniciando a aplicação junto aos testes
import app from "../app"
const request = chai.request(app)

// realizando os testes com a aplicação já iem execução
//const request = chai.request("http://localhost:3000");

const expect = chai.expect;


describe("Testes com o Mocha e Chai", () => {
    it("Primeiro teste", () => {
        expect(1).to.equals(1);
    })

    it("Teste ChaiHttp", (done) => {
        request
            .get("/")
            .end((err, resp) => {
                expect(resp.body.message).to.equal("Hello com uma aplicação de NodeJs");
                done();
            })
    })
})