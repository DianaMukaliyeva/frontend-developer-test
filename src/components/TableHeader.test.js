import React from 'react';
import { shallow } from 'enzyme';

import TableSortLabel from '@material-ui/core/TableSortLabel';

import TableHeader from './TableHeader';

const props = { onRequestSort: jest.fn(), order: 'desc', tableName: 'User' };

describe('<TableHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TableHeader {...props} />);
  });

  it('should have span element with visuallyHidden class', () => {
    expect(wrapper.find('span').hasClass(/visuallyHidden/)).toBeTruthy();
  });

  it('should trigger onRequestSort on <TableSortLabel/> press', () => {
    wrapper.find(TableSortLabel).simulate('click');
    expect(props.onRequestSort).toHaveBeenCalled();
  });
});
