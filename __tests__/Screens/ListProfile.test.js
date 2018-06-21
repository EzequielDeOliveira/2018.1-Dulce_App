import React from 'react';
import renderer from 'react-test-renderer';
import ListProfile from '../../src/Screens/ListProfile';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('bezier');

Enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer
    .create(<ListProfile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should test navigateToNewProfile correctly', () => {
  // This is to test component functions
  const navigation = {navigate: jest.fn()};
  let profileScreen = renderer
    .create(
      <ListProfile
      navigation={navigation}
        dispatch={action =>
          expect(action)
          .toEqual(navigation.navigate)
        }
      />
    )
    .getInstance();

  profileScreen.navigateToNewProfile();
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('Should call function when button is pressed', async() => {
  const navigation = {navigate: jest.fn()};
  const spy = jest.spyOn(ListProfile.prototype, 'navigateToNewProfile');
  const wrapper = shallow(<ListProfile navigation={navigation} />);
  await flushPromises();
  wrapper.update();
  const enterButton = wrapper.find('Styled(Fab)').at(0);
  enterButton.simulate('press');
  expect(spy).toHaveBeenCalled();
});
