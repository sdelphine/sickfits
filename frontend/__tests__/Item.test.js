import Item from '../components/Item';
import { shallow, mount } from 'enzyme';
import PriceTag from '../components/styles/PriceTag'
import Title from '../components/styles/Title';
import ItemStyles from '../components/styles/ItemStyles';
import DeleteItem from '../components/DeleteItem'
import toJSON from 'enzyme-to-json'


const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 5000,
    description: 'This item is really cool!',
    image: 'dog.jpg',
    largeIamge: 'largedog.jpg',
}

describe('<Item />', () => {
    it('renders and matches the snapshot', () => {
        // const price = '$50.35'
        // expect(price).toMatchSnapshot()

        const wrapper = shallow(<Item item={fakeItem} />)
        expect(toJSON(wrapper)).toMatchSnapshot()

    })

    // it('renders the image properly', () => {
    //     const wrapper = shallow(<Item item={fakeItem} />)
    //     const image = wrapper.find('img').props()
    //     // console.log(image)
    //     expect(image.src).toBe(fakeItem.image)
    //     expect(image.alt).toBe(fakeItem.title)
    // })

    // it('renders the priceTag and title properly', () => {
    //     const wrapper = shallow(<Item item={fakeItem} />)
    //     // console.log(wrapper.debug())
    //     const priceTag = wrapper.find(PriceTag).children().text()
    //     // console.log(priceTag)
    //     expect(priceTag).toBe('$50')
    //     const title = wrapper.find(Title).find('a').children().text()
    //     expect(title).toBe(fakeItem.title) 
    // })

    // it('renders out the buttons properly', () => {
    //     const wrapper = shallow(<Item item={fakeItem} />)
    //     const buttonList = wrapper.find(ItemStyles).find('.buttonList')
    //     expect(buttonList.children()).toHaveLength(3)
        
        
    //     expect(buttonList.find('Link').exists()).toBe(true)
    //     // expect(buttonList.find('Link')).toHaveLength(1)
    //     // expect(buttonList.find('Link').exists()).toBeTruthy()
        
    //     // AddToCart Not implemented yet 
    //     // expect(buttonList.find(AddToCart).exists()).toBe(true)

    //     expect(buttonList.find(DeleteItem).exists()).toBe(true)

    // })
})