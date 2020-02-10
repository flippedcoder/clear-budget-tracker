let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');

chai.use(chaiHttp);

describe('GET endpoint test', () => {
  it('it should GET all the items', (done) => {
    chai.request(server)
        .get('/api/getAllItems')
        .end((res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
          done();
        });
  });
});

describe('POST endpoint test', () => {
  it('it should POST a new item', (done) => {
      let item = {
          title: 'Cookies',
          category: 'food',
          cost: 19.54,
          date: '02/04/2020'
      }
    chai.request(server)
        .post('/api/createItem/')
        .send(item)
        .end((res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
          done();
        });
  });
});