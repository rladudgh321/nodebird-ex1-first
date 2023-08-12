import React, { useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';

const PostImages = ({images}) =>{
    const [showImagesZoom, setShowImagesZoom]= useState(false);
    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    },[showImagesZoom]);

    const onClose = useCallback(() =>{
        setShowImagesZoom(false);
    },[])
    if(images.length ===1) {
        return (
            <>
                <img role='presentation' src={images[0].src} alt={images[0].src} onClick={onZoom} />
                { showImagesZoom &&  <ImagesZoom images={images} onClose={onClose} /> }
            </>
        );
    }
    if(images.length === 2) {
        return (
            <>
                <img role='presentation' style={{width:'50%', display:'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role='presentation' style={{width:'50%', display:'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
                { showImagesZoom &&  <ImagesZoom images={images} onClose={onClose} /> }
            </>
        );
    }
    return (
        <>
            <img role='presentation' style={{width:'50%', display:'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
            <div role='presentation' 
            onClick={onZoom}
            style={{verticalAlign:'middle' , textAlign:'center', width:'50%', display:'inline-block'}}>
                <PlusOutlined />
                <br />
                {images.length - 1}
                개의 사진 더보기
            </div>
            { showImagesZoom &&  <ImagesZoom images={images} onClose={onClose} /> }
        </>
    );
}

export default PostImages;