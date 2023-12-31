import React, { useCallback } from 'react';
import { Button, Input, Form } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { LogInAction } from '../reducers/user';
import { useDispatch } from 'react-redux';

const LoginForm = () =>{
    const dispatch = useDispatch();
    const [id,onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(()=>{
        console.log({id,password});
        dispatch(LogInAction({id,password}));
    },[id, password]);

    return (
        <>
            <Form style={{padding:10}} onFinish={onSubmitForm}>
                <div>
                    <label htmlFor='user-id'>아이디</label>
                    <Input id='user-id' name='user-id' value={id} onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <Input id='user-password' name='user-password' value={password} onChange={onChangePassword} />
                </div>
                <div style={{marginTop:10}}>
                    <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </div>
            </Form>
        </>
    );
}

export default LoginForm;