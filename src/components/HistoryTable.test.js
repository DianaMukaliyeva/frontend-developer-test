import React from 'react';
import { shallow } from 'enzyme';

import HistoryTable from './HistoryTable';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';

const props = { getApiData: jest.fn(), tableName: 'Test name' };

describe('<HistoryTable />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HistoryTable {...props} />);
  });

  describe('render()', () => {
    it('renders <TableHeader /> component', () => {
      expect(wrapper.find(TableHeader)).toHaveLength(1);
    });
    it('renders <TableFooter /> component', () => {
      expect(wrapper.find(TableFooter)).toHaveLength(1);
    });
  });
});
