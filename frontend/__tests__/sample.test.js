describe('sample test 101', () => {
    it('Works as excepted', () => {
        const age = 100;
        expect(age).toEqual(100)
    })
    it('Handle range just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
        
    })
})