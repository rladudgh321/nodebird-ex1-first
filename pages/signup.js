import React, { useCallback, useState }  from 'react';
import AppLayOut from '../components/AppLayOut';
import { Form, Input, Button, Checkbox } from 'antd';
import useInput from '../hooks/useInput';


const SignUp = () =>{
    const [id,onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
   
    const [passwordCheck, setPasswordCheck] = useState(''); 
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[])

    const onSubmitForm = useCallback(()=>{
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }

        console.log({id,nickname,password,passwordCheck});
        
    },[id,nickname,password,passwordCheck,term,termError]);
    return (
        <>
            <AppLayOut>
                <Form onFinish={onSubmitForm}>
                    <h3 style={{textAlign:'center'}}>회원가입</h3>
                    <div>
                        <label htmlFor='user-sign-id'>아이디</label>
                        <Input type='primary' id='user-sign-id' name='user-sign-id' value={id} onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor='user-sign-nickname'>닉네임</label>
                        <Input type='primary' id='user-sign-nickname' name='user-sign-nickname' value={nickname} onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor='user-sign-password'>비밀번호</label>
                        <Input type='primary' id='user-sign-password' name='user-sign-password' value={password} onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor='user-sign-password-check'>비밀번호 확인</label>
                        <Input type='primary' id='user-sign-password-check' name='user-sign-password-check' value={passwordCheck} onChange={onChangePasswordCheck} />
                    </div>

                    {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다</div>}
                    <div>

                        <Checkbox
                            name='user-sign-checkbox'
                            checked={term}
                            onChange={onChangeTerm}
                        >약관에 동의합니다</Checkbox>
                        {termError && <div style={{color:'red'}}>약관에 동의하셔야 합니다</div>}
                    </div>
                    <div>
                        <Button type='primary' htmlType='submit' loading={false}>가입하기</Button>
                    </div>
                </Form>
            </AppLayOut>
            
        </>
    );
}

export default SignUp;