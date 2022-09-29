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
                        <h4><p>{log.shipIsBroken ? "Ship status: shipwrecked " : "Ship status: all clear  " }</p></h4>

                    <button>
                        <a href={`/logs/${log._id}/edit`}>Edit</a>
                    </button>


                    <form action ={`/logs/${log._id}?_method=DELETE`} method="POST">

                        <input type="submit" value="Delete Log" />
                    </form>

                    <nav>
                        <a href ='/logs'>Back</a>
                    </nav>
                
            </DefaultLayout>
        );
    }
}
module.exports = Show;