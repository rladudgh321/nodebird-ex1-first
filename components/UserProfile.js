import React, { useCallback } from 'react';
import { Card, Button, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { LogOutAction } from '../reducers/user';

const UserProfile = () =>{
    const dispatch = useDispatch();
    const Logout = useCallback(()=>{
        dispatch(LogOutAction);
    },[]);
    return (
        <>
            <Card
                actions={[
                    <div key="twit">짹쨱<br />0</div>,
                    <div key="followings">팔로잉<br />0</div>,
                    <div key="followers">팔로워<br />0</div>
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>KYH</Avatar>}
                    title="Card title"
                    description="This is the description"
                />
                <Button
                    style={{marginTop:20, float:'right'}}
                    onClick={Logout}
                >로그아웃</Button>
            </Card>
        </>
    );
}

export default UserProfile;