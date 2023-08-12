import React from 'react';
import PropType from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const NodeBird = ({Component}) =>{
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Component></Component>
        </>
    );
}

NodeBird.propTypes = {
    Component : PropType.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);