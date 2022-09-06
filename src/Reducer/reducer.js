
const initialState = {
    name: "",
    email: "",
    img: "",
    password: "",
    con_pass: ""
};

const MyReducer = (state=initialState,action) => {
     switch (action.type) {
        case "SUBMIT":
            return {...state,FormData: action.payload};
     
        default: return state;
     }
}

export default MyReducer;