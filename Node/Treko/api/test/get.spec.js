import chai from "chai"
import chaiHttp from "chai-http"
import tasksModel from "../models/task"

chai.use(chaiHttp);

const expect = chai.expect;
const app = require('../app');
const request = chai.request.agent('http://localhost:3000');

describe("Dado que eu vou usar o método GET da API Tasks", () => {

    context("Quando eu tenho tarefas cadastradas", () => {
        before((done) => {
            let tasks = [
                { title: "Ler para a prova", email: "teste@teste.com", done: true },
                { title: "Fazer a prova", email: "teste@teste.com", done: false },
                { title: "Chorar pela prova", email: "teste@teste.com", done: false },
                { title: "Estudar sobre Express", email: "eu@papito.io", done: false },
                { title: "Estudar sobre Express com Mocha", email: "eu@papito.io", done: false }

            ]
            tasksModel.insertMany(tasks);
            done();
        })

        it("Então vai ser retornado uma lista com sucesso (status 200)", (done) => {
            request
                .get('/task')
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    expect(res.body.data).to.be.an("array");
                    done();
                })
        })

        it("Então vai ser retornado uma lista filtrada pela palavra Express com sucesso (status 200)", (done) => {
            request
                .get('/task')
                .query({ title: 'Express' })
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    expect(res.body.data).to.be.an("array");
                    expect(res.body.data[0].title).to.eql("Estudar sobre Express");
                    expect(res.body.data[1].title).to.eql("Estudar sobre Express com Mocha");
                    done();
                })
        })
    })
    context("Quando eu tenho uma tarefa cadastrada", () => {

        it("Então vai ser retornado uma tarefa com sucesso (status 200)", (done) => {
            let task = [
                { title: "Estudar para a prova de Matematica", email: "teste@teste.com", done: true },
            ]
            tasksModel.insertMany(task, (err, res) => {
                let id = res[0]._id
                request
                    .get("/task/" + id)
                    .end((err, res) => {
                        expect(res).to.has.status(200);
                        expect(res.body.data.title).to.equal("Estudar para a prova de Matematica");
                        done();
                    })
            })
        })
    })

    context('Quando eu tenho uma tarefa nao existe', () => {

        it('Então deve retornar 404', (done) => {
            request
                .get('/task/13')
                .end((err, res) => {
                    expect(res).to.has.status(404);
                    expect(res.body).to.eql({});
                    done();
                })

        })
    })
})