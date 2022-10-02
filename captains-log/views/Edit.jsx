const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { log } = this.props

        return (
            <DefaultLayout title="Edit Log">

                
                    <h1>Edit Log</h1>
                    
                        <form action={`/logs/${log._id}?_method=PUT`} method="POST">

                            <fieldset>
                                <p> 
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" id="title" name="title" defaultValue={log.title} />
                                </p>

                                <p>
                                    <label htmlFor="entry">Entry:</label>
                                    <textarea rows="10" cols="50" id="entry" name="entry" defaultValue={log.entry}></textarea>
                                    
                                </p>

                                <p>
                                    <label htmlFor='shipIsBroken'>Is Ship Broken:</label>
                                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
                                </p>


                                <input type="submit" value="Edit log"/>
                            </fieldset>
                        </form>
                    <nav>
                        <a href ='/logs'>Back</a>
                    </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Edit