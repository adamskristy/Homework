const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

// class compnent
class Show extends React.Component {
    render () {
       
        
        const { log } = this.props

        return (

            <DefaultLayout title ="Log Details">
                
                    <h1>{`${log.title} Log`}</h1>
                        <p>{log.entry}</p>
                        <p>{log.time}</p>
                        <h4><p>{log.shipIsBroken ? "Ship status: need repairs " : "Ship status: all clear  " }</p></h4>

                    <div id="show-btns">
                        
                        <form action ={`/logs/${log._id}/edit`} >
                            <input type="submit" value="Edit" />
                        </form>
                            
                
                        <form action ={`/logs/${log._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete Log" />
                        </form>

                    <nav>
                        <a href ='/logs'>Back</a>
                    </nav>
               </div> 
            </DefaultLayout>
        );
    }
}
module.exports = Show;