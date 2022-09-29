const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <div className='container'>
                    
                    {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;