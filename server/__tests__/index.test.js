const request = require('supertest');
const app = require('../index.js');

describe('GET endpoint', () => {
    it('should get all items', async () => {
        const res = await request(app)
            .get('/api/getAllItems');
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toBeNull();
    });
});

describe('POST endpoint', () => {
    it('responds with the new item', async () => {
      const newItem = await request(app)
        .post('/api/createItem/')
        .send({
          category: 'food',
          cost: 14.56,
          date: '12/23/2019',
          title: 'Sushi'
        });
  
      expect(newItem.statusCode).toBe(200);
      expect(newItem).not.toBeNull();
      expect(newItem.title).toBe('Sushi');
    });
});