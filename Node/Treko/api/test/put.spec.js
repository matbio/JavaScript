import chai from "chai"
import chaiHttp from "chai-http"
import tasksModel from "../models/task"

chai.use(chaiHttp);

const expect = chai.expect
const app = require('../app')
const request = chai.request.agent(app)

describe("Dado que eu vou usar o método PUT da API Tasks", () => {
    context("Quando eu alterar uma tarefa", () => {
        let task =  {_id: require("mongoose").Types.ObjectId(), title: "Tarefa Não Atualizada", owner: "teste@teste.com", done: true }
        before((done) => {
            tasksModel.insertMany(task);
            done();
        })
        it("Então vai ter retorno de sucesso (status 200)", (done) => {
            task.title = "Tarefa Atualizada",
            request
            .put('/task/'+ task._id)
            .send(task)
            .end((err, res) => {
                expect(res).to.has.status(200);
                expect(res.body).to.eql({})
                done();
            })
        })
        it("E vai ser alterado", (done) => {
            request
            .get('/task/'+ task._id)
            .send(task)
            .end((err, res) => {
                expect(res.body.data.title).to.equals(task.title);
                done();
            })
        })
    })
})