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
                <h3>Points: {qstn.value} </h3>
                <h3>Question: {qstn.question}</h3>
            </div>
        )
    }
    const loading = () => {
        return   <div>
                    <h2>Category: </h2>
                    <h3>Points:  </h3>
                    <h3>Question: </h3>
                </div>
    }

    return question ? loaded() : loading()
}
