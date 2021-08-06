import chai from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp);

const expect = chai.expect
const app = require('../app')
const request = chai.request.agent(app)
const rabbit = chai.request.agent("http://rabbitmq:15672")

describe("Dado que eu vou usar o método POST da API Tasks", () => {

    context("Quando eu cadastrar uma tarefa", () => {
        before((done) => {
            rabbit
                .delete("/api/queues/%2F/tasksdev/contents")
                .auth('guest', 'guest')
                .end((err, res) => {
                    expect(res).to.has.status(204);
                    done();
                })
        })
        it("Então vai ser inserido uma nova tarefa na lista de tarefas", (done) => {
            let task = { title: "Ver um filme sobre POST", owner: "teste@teste.com", done: false }
            request
            .post('/task')
            .send(task)
            .end((err, res) => {
                expect(res).to.has.status(200);
                expect(res.body.data.title).to.be.an("string");
                expect(res.body.data.owner).to.be.an("string");
                expect(res.body.data.done).to.be.an("boolean");
                done();
            })
        })
        it("e deve enviar email", (done) => {
            let payload = { vhost: "/", name: "tasksdev", truncate: "50000", ackmode: "ack_requeue_true", encoding: "auto", count: "1000" }

            rabbit
                .post("/api/queues/%2f/tasksdev/get")
                .auth('guest', 'guest')
                .send(payload)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body[0].payload).to.contain(`Tarefa ${task.title} criada com sucesso!`);
                    done();
                })
        })
    })
    context("Quando eu cadastrar uma tarefa sem informações obrigatórias", () => {
        it("Então sem titulo não vai ser cadastrada e vai retornar (status 400)", (done) => {
            let task = { title: "", owner: "teste@teste.com", done: false }
            request
            .post('/task')
            .send(task)
            .end((err, res) => {
                expect(res).to.has.status(400);
                expect(res.body.errors.title.message).to.equal("Title is required!");
                done();
            })
        })
        it("Então sem Owner não vai ser cadastrada e vai retornar (status 400)", (done) => {
            let task = { title: "Teste de tarefa", owner: "", done: false }
            request
            .post('/task')
            .send(task)
            .end((err, res) => {
                expect(res).to.has.status(400);
                expect(res.body.errors.owner.message).to.equal("Owner is required!");
                done();
            })
        })
    })
})