import React, { useCallback } from 'react';
import { Card, Button, Avatar } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({setIsLoggedIn}) =>{

    const Logout = useCallback(()=>{
        setIsLoggedIn(false);
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
                    style={{margin:10, position:'relative',right:'-150px'}}
                    onClick={Logout}
                >로그아웃</Button>
            </Card>
        </>
    );
}

    UserProfile.propTypes = {
        setIsLoggedIn:PropTypes.func.isRequired,
    }
export default UserProfile;