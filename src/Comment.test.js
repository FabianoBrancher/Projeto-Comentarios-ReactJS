import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comment from './Comment';

describe('<Comment />', () => {
    it('renders Comment without crashing', () => {
        const comment = {
            comment: 'testando componente Comment'
        }
        const wrapper = shallow(<Comment comment={comment}/>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.is('.card')).toBe(true);
        // expect(wrapper.childAt(0).is('.card-body')).toBe(true);
        expect(wrapper.text()).toBe(comment.comment);
        // expect(wrapper.find('p').text()).toBe(comment.comment);
        // console.log(wrapper.debug());
    });
});