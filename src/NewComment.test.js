import React from 'react';
import NewComment from './NewComment';

import { shallow, mount, render } from 'enzyme';

describe('<NewComment />', () => {
    const postNewCommentMock = jest.fn();
    it('renders without crashing', () => {
        const wrapper = shallow(<NewComment postNewComment={postNewCommentMock}/>);
        expect(wrapper.length).toBe(1);
    });
    it('handle enter event correctly', () => {
        const wrapper = mount(<NewComment postNewComment={postNewCommentMock}/>);
        const eventMock = {
            keyCode: 13,
            preventDefault: jest.fn()
        }
        wrapper.instance().refs.comment.value = 'test';
        wrapper.instance().handleEnter(eventMock);
        expect(eventMock.preventDefault.mock.calls.length).toBe(1);
        expect(postNewCommentMock.mock.calls.length).toBe(1);
        expect(wrapper.instance().refs.comment.value).toBe('');
        expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test');
        expect(eventMock.keyCode).toBe(13);
    });
    it('handle enter event with keyCode !== 13', () => {
        const wrapper = mount(<NewComment postNewComment={postNewCommentMock}/>);
        const eventMock = {
            keyCode: 11,
            preventDefault: jest.fn()
        }
        wrapper.instance().handleEnter(eventMock);
        expect(eventMock.keyCode).toBe(11);
    });
});