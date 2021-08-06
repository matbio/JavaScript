import chai from "chai"
import chaiHttp from "chai-http"
import tasksModel from "../models/task"

chai.use(chaiHttp);

const expect = chai.expect
const app = require('../app')
const request = chai.request.agent(app)

describe("Dado que eu vou usar o método DELETE da API Tasks", () => {

    context("Quando eu vou deletar uma tarefa existente", () => {
        let tarefa = {
            _id: require("mongoose").Types.ObjectId(),
            title: "Tarefa que vai ser deletada",
            owner: "teste@teste.com",
            done: true
        }

        before((done) => {
            tasksModel.insertMany(tarefa);
            done();
        })

        it("Então retorno de sucesso (status 200)", (done) => {
            request
                .delete('/task/' + tarefa._id)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.eql({});
                    done();
                })
        })

        after((done) => {
            request
                .get('/task/' + tarefa._id)
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                })
        })
    })

    context('Quando a tarefa nao existe', () => {
        it('Então deve retornar 404', (done) => {
            let id = require('mongoose').Types.ObjectId();
            request
                .delete('/task/' + id)
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body).to.eql({});
                    done();
                })
        })
    })
})