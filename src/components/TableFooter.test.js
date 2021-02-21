import React from 'react';
import { shallow } from 'enzyme';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import TableFooter from './TableFooter';

const props = { fetchData: jest.fn(), error: false, loading: false };
const errorProps = { fetchData: jest.fn(), error: true, loading: false };
const loadingProps = { fetchData: jest.fn(), error: false, loading: true };

describe('<TableFooter />', () => {
  it('renders Button with text "Load more" when error and loading are false', () => {
    const wrapper = shallow(<TableFooter {...props} />);
    expect(wrapper.find(Button).prop('children')).toEqual('Load more');
  });

  it('renders Button with text "Retry" when error is true', () => {
    const wrapper = shallow(<TableFooter {...errorProps} />);
    expect(wrapper.find(Button).prop('children')).toEqual('Retry');
  });

  it('renders CircularProgress when loading is true', () => {
    const wrapper = shallow(<TableFooter {...loadingProps} />);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });

  it('should trigger fetchData on <Button/> click', () => {
    const wrapper = shallow(<TableFooter {...props} />);
    wrapper.find(Button).simulate('click');
    expect(props.fetchData).toHaveBeenCalled();
  });
});
