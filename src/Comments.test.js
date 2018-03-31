import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comments from './Comments';

describe('<Comments />', () => {
    it('render Comments without crashing', () => {
        const comments = {
            1: {
                comment: "testando commentarios"
            },
            2: {
                comment: "comentario 2..."
            }
        };
        const wrapper = shallow(<Comments comments={comments}/>);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toBe(1);
        console.log(wrapper.find('Comment').length);
        expect(wrapper.find('Comment').length).toBe(2);
    });
});