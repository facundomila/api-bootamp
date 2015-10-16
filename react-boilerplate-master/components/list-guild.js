var React = require('react');

var ListGuild = React.createClass ({

    propTypes: {
        items: React.PropTypes.array
    },

    getDefaultProps: {
        items: {}
    },

    render: function () {
        return (
            <ul clasName="list-group">
                {this.props.items.map(this.renderItems)}
            </ul>
        );
    },

    renderItems: function (items, index) {
        return (
            <li key={index}></li>
            <li {items.}></li>
        );
    }

});
