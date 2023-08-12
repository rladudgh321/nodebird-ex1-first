const initialState = {
    isLoggedIn:false,
    user:null,
    loginData:[],
    signUpData:[],
}

const LogIn = 'LogIn';
export const LogInAction = (data) =>{
    return {
        type:LogIn,
        data,
    }
}

const LogOut = 'LogOut';
export const LogOutAction = {
    type:LogOut,
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case LogIn :
            return { ...state, isLoggedIn:true, user:action.data } 
        case LogOut :
            return { ...state, isLoggedIn:false, user:null }

        default : return state;
    }
}

export default reducer;