import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Slick from 'react-slick';

import { Overlay, Global, Header, CloseBtn, SlickWrapper, ImagWrapper, Indicator } from './style';

const ImagesZoom = ({images, onClose}) =>{
    const [currentSlice, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <div>
                <SlickWrapper>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide)=>setCurrentSlide(slide)} //슬라이드 번호 매기기
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v)=>(
                            <ImagWrapper key={v.src}>
                                <img src={v.src} alt={v.src} />
                            </ImagWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlice +1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </SlickWrapper>
            </div>
        </Overlay>
    );
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ImagesZoom;