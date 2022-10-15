export default function Info ({question}){
// question is a props passed down from question.js

let qstn = question[0]
//data from api is question object
//console.log(qstn)

//use loaded/loading make sure react has question data first before trying to render
const loaded = () => {
    
        return(
            <div>
                <h2>Category: {qstn.category.title}</h2>
                <h2>Points: {qstn.value} </h2>
                <h2>Question: {qstn.question}</h2>
            </div>
        )
    }
const loading = () => {
        return   <div>
                    <h2>Category: </h2>
                    <h2>Points:  </h2>
                    <h2>Question: </h2>
                </div>
    }

    return question ? loaded() : loading()
}
