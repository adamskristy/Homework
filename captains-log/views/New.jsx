const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a New Log">
                <h1>New Log</h1>
                    <form action="/logs" method="POST">
                        <fieldset>

                            <p>
                                <label htmlFor='title'>Title:</label>
                                <input type="text" id="title" name="title" />
                            </p>

                            <p>
                                <label htmlFor='entry'>Entry:</label>
                                <textarea rows="10" cols="50" id="entry" title="entry"></textarea>
                            </p>
                            
                            <p>
                                <label htmlFor='shipIsBroken'>Is Ship Broken:</label>
                                <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
                            </p>

                            <input type="submit" value="Submit Log"/>
                        </fieldset>
                    </form>
                    <nav>
                        <a href ='/logs'>Back</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = New;