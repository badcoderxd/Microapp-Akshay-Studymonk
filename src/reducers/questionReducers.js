const DefaultState = {
     loading: false,
     data:[],
     errorMsg:""
};

const QuestionListReducer = (state,action)=>{
    switch (action.type) {
        case "QUESTION_LIST_LOADING":
        return{
            ...state,
            loading:true,
        };

        case "Question_LIST_FAILED":
            return{
                ...state,
                loading:true,
                errorMsg:"unable to get questions"
            };
        case "Question_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                data: action.payload

            };
            default:
                return state
         
    }
};