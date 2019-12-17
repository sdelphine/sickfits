import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json'
import wait from 'waait';
// import PleaseSignIn, { SINGLE_ITEM_QUERY } from '../components/PleaseSignIn';
import { CURRENT_USER_QUERY } from '../components/User';
import { MockedProvider } from 'react-apollo/test-utils'
import { fakeUser } from '../lib/testUtils'

// TODO PleaseSignIn not implemented yet

const notSignedInMocks = [
    {
        request: { query: CURRENT_USER_QUERY},
        result: { data: { me: null } },
    }
]

const signedInMocks = [
    {
        request: { query: CURRENT_USER_QUERY},
        result: { data: { me: fakeUser() } },
    }
]


describe('<PleaseSignIn/>', () => {
    it('render the sign in dialog to logged out users', async () => {
        // const wrapper = mount(
        //     <MockedProvider mocks={notSignedInMocks}>
        //         <PleaseSignIn />
        //     </MockedProvider>
        // )
        // await wait()
        // wrapper.update()
        // expect(wrapper.text()).toContain('Please Sign In efore Continuing')
        // const signIn = wrapper.find('Signin')
        // expect(signIn.exists()).toBe(true)
        // // console.log(wrapper.debug())
    })
    it('render the child component when the user is signed in', async () => {
        // const Hey = () => <p>Hey!</p>
        // const wrapper = mount(
        //     <MockedProvider mocks={signedInMocks}>
        //         <PleaseSignIn>
        //             <Hey />
        //         </PleaseSignIn>
        //     </MockedProvider>
        // )
        // await wait()
        // wrapper.update()
        // const signIn = wrapper.find('Signin')
        // expect(wrapper.contains(<Hey />)).toBe(true)
    })
})