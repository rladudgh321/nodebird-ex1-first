const initialState = {
    mainPost:[{
        id:1,
        User:{
            id:1,
            nickname:'제로초',
        },
        content:'첫게시물 #해시태그 #익스프레스',
        Images:[{
            src:'https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_1280.jpg',
        },{
            src:'https://cdn.pixabay.com/photo/2015/01/27/18/32/bananas-614090_1280.jpg',
        },{
            src:'https://cdn.pixabay.com/photo/2014/12/02/03/11/grapes-553464_1280.jpg',
        }],
        Comments:[{
            User:{
                nickname:'nero',
            },
            content:'우와 노드버드다',
        },{
            User:{
                nickname:'hero',
            },
            content:'나 여기 나왔다',
        },],
    }],
    imagePaths:[],
    postAdded:false,
}

const dummyPost = {
    id:2,
    User:{
        id:1,
        nickname:'제로초',
    },
    content:'더미데이터',
    Images:[],
    comments:[],
}

const POST_ADD = 'POST_ADD';
export const PostAdd = {
    type:POST_ADD
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case POST_ADD : 
            return { ...state, mainPost:[dummyPost, ...state.mainPost],  postAdded:true }
        default : return state;
    }
}

export default reducer;