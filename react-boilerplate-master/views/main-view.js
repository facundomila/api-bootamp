var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var classNames = require('classnames');
var HomeView = require('./home-view');
var HeaderView = require('./header-view');


var MainView = React.createClass({
    render: function () {
        return (
            <div {...this.getProps()}>
                <div className="row">
                    <div className="col-md-8">
                        <HeaderView />
                    </div>
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
            'main-view': true,
            'container-fluid': true
        };

        return classNames(classes);
    }
});

module.exports = MainView;
