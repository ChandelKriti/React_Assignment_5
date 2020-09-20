import React from 'react';
import { shallow, mount } from 'enzyme';
import Clock from './Clock';

describe('Clock',() => {

  const container = shallow(<Clock />)

  it ('should match snapshot', () => {
      expect(container.html()).toMatchSnapshot();
  });

  it('should have input field', () => {
      expect(container.find('input[type="checkbox"]').length).toEqual(1);
  })

})

describe('Clock', () => {
    let clock;
    let onClick;

    beforeEach(() => {
        onClick = jest.fn();
        clock = mount(<Clock onClick={onClick} />)
    })

    it('clock requires onClick prop', () => {
        expect(clock.props().onClick).toBeDefined()
    })
})
