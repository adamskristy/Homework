const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a New Log">
                <div>
                    <form action="/logs" method="POST">

                        <label htmlFor='title'>Title:</label>
                        <input type="text" id="title" name="title" />

                        
                        <label htmlFor='entry'>Entry:</label>
                        <input type="text" id="entry" name="entry" />

                        
                        <label htmlFor='shipIsBroken'>Is Ship Broken:</label>
                        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />

                        <input type="submit" value="Submit Log"/>

                    </form>
                    <nav>
                        <a href ='/logs'>Back</a>
                    </nav>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New;