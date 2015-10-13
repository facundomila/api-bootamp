var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = require('react-router');
var classNames = require('classnames');
var RouteHandler = Router.RouteHandler;

var HeaderView = React.createClass({
    render: function () {
        return (
            <div {...this.getProps()}>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="realms">realms</Link>
                    </li>
                    <li>
                        <Link to="character">character</Link>
                    </li>
                    <li>
                        <Link to="guild">guild</Link>
                    </li>
                </ul>
                <div className="row">
                    <RouteHandler />
                </div>
            </div>
        )
    },
    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'style-type': true
        };
        return classNames(classes);
    }
});

module.exports = HeaderView;
