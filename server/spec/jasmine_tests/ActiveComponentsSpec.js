const request = require('request');
const server = require('../../index.js');

describe("GET endpoint test", () => {
    let data = {};

    beforeAll(async (done) => {
        await request.get('http://localhost:3010/api/getAllItems', (res, body) => {
            data.status = res.statusCode;
            data.body = JSON.parse(body);
            done();
        });
    });
    
    afterAll(() => {
        server.close();
    });

    it('should have 200 status', () => {
        expect(data.status).toBe(200);
    });

    it("should return all the item data", () => {
        expect(data.body).not.toBeNull();
    });
});

describe('POST endpoint test', () => {
    let data = {};

    beforeAll(async (done) => {
        await request.post({
            url: 'http://localhost:3010/api/createItem/',
            form: {
                category:'food',
                title: 'Tacos',
                cost: 5.55,
                date: '02/03/2020'
            }
        }, (res, body) => {
            data.status = res.statusCode;
            data.body = JSON.parse(body);
            done();
        });
    });

    afterAll(() => {
        server.close();
    });

    it('should have 200 status', () => {
        expect(data.status).toBe(200);
    });

    it("should have new item data", () => {
        expect(data.body).not.toBeNull();
    });
});