var React = require('react');
var _ = require('lodash');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func
    },

    render: function() {
        return(
            <div>
                <button {...this.getProps()}>{this.props.children}</button>
            </div>
        );
    },

    getProps: function () {
        return {
            onClick: this.handleClick,
            className: this.props.className
        }
    },

    handleClick: function (event) {
        this.props.onClick(event);
    }
});

module.exports = Button;
