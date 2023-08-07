import React from 'react';
import { Input, Form } from 'antd';

const NicknameEditForm = () =>{
    return (
        <>
            <Form style={{marginBottom:20, border:'1px solid #d9d9d9', padding:20}}>
                <Input.Search addonBefore="닉네임" enterButton="수정" ></Input.Search>
            </Form>
        </>
    );
}

export default NicknameEditForm;