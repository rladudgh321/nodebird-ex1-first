import React from 'react';
import AppLayOut from '../components/AppLayOut';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () =>{
    const followerList = [{nickname:'김영호'},{nickname:'권현주'},{nickname:'노드오피셜'}];
    const followingList = [{nickname:'김영호'},{nickname:'권현주'},{nickname:'노드오피셜'}];
    return (
        <>
            <AppLayOut>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayOut>
            
        </>
    );
}

export default Profile;