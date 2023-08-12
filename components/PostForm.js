import { Input, Form, Button } from 'antd';
import { useCallback, useRef, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { PostAdd } from '../reducers/post';

const PostForm = () =>{
    const dispatch = useDispatch();
    const { imagePaths } = useSelector((state)=>state.post);
    const fileClick = useRef();
    const onClickFile = useCallback(()=>{
        fileClick.current.click();
    },[fileClick.current]);
    const [text,setText] = useState('');
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[]);

    const onSubmitForm = useCallback(()=>{
        dispatch(PostAdd);
        setText('')
    },[]);
    return (
        <>
            <Form onFinish={onSubmitForm} encType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder='오늘은 어떤 신비한 일이 있었나요?' value={text} onChange={onChangeText} />
                <input type='file' style={{display:'none'}} ref={fileClick} />
                <Button onClick={onClickFile}>이미지업로드</Button>
                <Button type='primary' style={{float:'right'}} htmlType='submit'>짹짹</Button>
                <div>
                    {
                        imagePaths.map((v)=>
                            (
                                <div key={v} style={{display:'inline-block'}}>
                                    <img src={v} style={{width:'200px'}} />
                                    <div>
                                        <Button>제거</Button>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </Form>
        </>
    );  
}

export default PostForm;