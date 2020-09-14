import axios from "axios";
import { url } from "inspector";
export const GetQuestionList = (items) => async dispatch =>{
    try{
        dispatch(
            {
                type: "QUESTION_LIST_LOADING"
            }
        );
        const res= await axios.get('https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow')

        dispatch
        ({
            type:"QUESTION_LIST_SUCCESS",
            payload:res.data
        })
    }
        catch(e){
            dispatch(
                {
                    type:"Question_LIST_FAILED",
                }
            )
        }
    };

