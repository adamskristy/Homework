const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { log } = this.props

        return (
            <DefaultLayout title="Edit Log">
                <h1>Edit Page</h1>
                    <form action={`/logs/${log._id}?_method=PUT`} method="POST">

                        <label htmlFor="title">Entry:</label>
                        <input type="text" id="title" title="title" defaultValue={log.title} />

                        <label htmlFor="etry">Entry:</label>
                        <input type="text" id="entry" title="entry" defaultValue={log.entry} />

                        <label htmlFor='shipIsBroken'>Is Ship Broken:</label>
                        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken} />

                        <input type="submit" value="Edit log"/>
                    </form>
                <nav>
                    <a href ='/logs'>Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Edit