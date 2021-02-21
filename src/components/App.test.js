import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import HistoryTable from './HistoryTable';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render()', () => {
    it('renders two <HistoryTable /> components', () => {
      expect(wrapper.find(HistoryTable)).toHaveLength(2);
    });
  });
});
