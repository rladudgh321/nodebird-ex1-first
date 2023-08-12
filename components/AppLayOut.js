import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Col, Row, Button } from 'antd';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';


const AppLayOut = ({children}) =>{
    const { isLoggedIn } = useSelector((state)=>state.user);
    const items = [
        {
            label:(<Link href="/"><a>노드버드</a></Link>),
            key:'home'
        },
        {
            label:(<Link href="/profile"><a>프로필</a></Link>),
            key:'profile'
        },
        {
            label:(<Input.Search enterButton style={{verticalAlign:'middle'}}></Input.Search>),
            key:'input.search'
        },
        {
            label:(<Link href="/signup"><a>회원가입</a></Link>),
            key:'signup'
        }
    ];

    return (
        <>
            <Menu mode="horizontal"  items={items} />
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    <Link href="https://www.naver.com" target="_blank" rel="noopener noreferrer"><a><Button>네이버</Button></a></Link>
                </Col>
            </Row>

                
            
        </>
    );
}

AppLayOut.propTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayOut;