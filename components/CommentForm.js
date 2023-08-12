import React, { useCallback } from 'react';
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';

const CommentForm = ({post}) =>{
    const id = useSelector((state)=>state.user.user?.id)
    const [text, onChangeText] = useInput('');
    const onSubmitForm = useCallback(()=>{
        console.log(post.id, text);
    },[text]);
    return (
        <>
            <Form onFinish={onSubmitForm}>
                <Input.TextArea value={text} onChange={onChangeText} rows={4} />
                <Button type='primary' htmlType='submit'>짹짹</Button>
            </Form>
        </>
    );
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;