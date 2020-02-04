const index = require('./index');

test('switches category and title', () => {
    const req = { category: 'test category 5', title: 'test title 87'};
    const updatedReq = { category: 'test title 87', title: 'test category 5'};
    expect(index.updateValue(req)).toBe(updatedReq);
});