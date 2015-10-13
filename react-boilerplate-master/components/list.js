var React = require ('react');
var _ = require('lodash');

var List = React.createClass ({

    propTypes: {
        items: React.PropTypes.array
    },

    getDefaultProps: function () {
        return{
            items: {}
        }
    },

    render: function () {
        return (
            <ul clasName="list-group">
                {this.props.items.map(this.renderItem)}
            </ul>
        )
    },

    renderItem: function (item, index) {
        return (
            <li className="list-group-item" key={index}>
                {item}
            </li>
        );
    }
});

module.exports = List;
