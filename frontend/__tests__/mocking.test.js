function Person(name, foods) {
    this.name = name
    this.foods = foods

}

Person.prototype.fetchFavFoods = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.foods), 100);
    });
}

describe('mocking learning', () => {
    it('mocks a reg function', () => {
        const fetchDogs = jest.fn();
        fetchDogs('snickers')
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('snickers');
        fetchDogs('hugo')
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    })

    it('can create a person', () => {
        const me = new Person('Toto', ['pizza', 'burgs']);
        expect(me.name).toBe('Toto')
    })

    it('can fetch foods', async () => {
        const me = new Person('Toto', ['pizza', 'burgs']);
        // mock the favFood function
        me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen'])
        const favFoods = await me.fetchFavFoods()
        expect(favFoods).toContain('sushi')
    })
})