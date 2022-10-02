const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Index extends React.Component {
    render() {

        const { log } = this.props;

        return (
            <DefaultLayout title="All Logs">
                
                    <h1>Captain's Logs</h1>
                    <ul id ="logs-index">
                        {log.map((log)=> {
                            return (
                                <li key = {log._id}>
                                    <a href={`/logs/${log._id}`}> {log.title}</a> 
                                </li>
                            )
                        })}
                    </ul>
                    
                    <nav>
                        <a href="/logs/new">Create New Log</a>
                    </nav>
                
            </DefaultLayout>
        )
    }
}

module.exports = Index;