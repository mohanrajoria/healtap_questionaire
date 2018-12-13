const UPDATE_ANSWER = "UPDATE_ANSWER";

const initialState = {
    questionIds : ["question1", "question2", "question3"],
    questions : {
        "question1" : {
            text : "Question number 1",
            answerId : "answer1"
        },
        "question2" : {
            text : "Question number 2",
            answerId : "answer2"
        },
        "question3" : {
            text : "Question number 3",
            answerId : "answer3"
        }
    },
    answers : {
        "answer1" : {
            text : ""
        },
        "answer2" : {
            text : ""
        },
        "answer3" : {
            text : ""
        }   
    }
}

export default function questionaire(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_ANSWER :
            return {
                ...state,
                answers : Object.assign({}, action.answers)
            }
        default :
            return state
    }
}

export function updateAnswer(answers) {
  return {
    type : UPDATE_ANSWER, 
    answers : answers
  };
}

