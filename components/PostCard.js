import { RetweetOutlined, HeartOutlined,MessageOutlined, EllipsisOutlined, HeartTwoTone } from "@ant-design/icons";
import { Card, Button, Input, Popover, Avatar, List  } from "antd";
import { useSelector } from "react-redux";
import PostImages from '../components/PostImages';
import React, { useCallback, useState } from "react";
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({post}) =>{
    const [liked, setLiked] = useState(false);
    const onToggleLiked = useCallback(()=>{
        setLiked(prev=>!prev);
    },[]);
    const user = useSelector((state)=>state.user.user);
    const id = user?.id;
    const [openComment, setOpenComment] = useState(false);
    const onToggleOpenComment = useCallback(()=>{
        setOpenComment(prev => !prev);
    })
    return (
        <>
            <Card
                cover={ post.Images[0] && <PostImages images={post.Images} /> }
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                    ? <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onToggleLiked} />
                    : <HeartOutlined key="heart" onClick={onToggleLiked} />,
                    <MessageOutlined key="content" onClick={onToggleOpenComment} />,
                    <Popover key="more" content={[
                        <Button.Group>
                            {
                                id === post.User.id
                                ?
                                <>
                                    <Button>수정</Button>
                                    <Button>삭제</Button>
                                </>
                                : <Button>신고</Button>}
                        </Button.Group>
                    ]}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta 
                    avatar={<div><Avatar>{post.User.nickname[0]}</Avatar></div>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            { openComment && <div>
                <CommentForm post={post} />
                <List
                    header={`${post.Comments.length}개의 댓글`}
                    dataSource={post.Comments}
                    renderItem={(item)=> (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                            title={item.User.nickname}
                            description={item.content}
                        />
                    </List.Item>
                    )}
                >
                </List>
            </div> }
        </>
    );  
}

export default PostCard;