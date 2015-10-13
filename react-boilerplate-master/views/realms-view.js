var React = require('react');
var $ = require('jquery');
var RealmStatusApi = require('../request/request');
var Button = require('../components/button');
var Table = require('../components/table');
var Input = require('../components/input');

var RealmsView = React.createClass({
    getInitialState: function () {
        return {
            realms: []
        }
    },

    render: function() {
        return (
            <div>
                <Button {...this.getButtonPropsRealms()}>Realms</Button>
                <Table rows={this.state.realms} columns={['status', 'name', 'type', 'population']}></Table>
            </div>
        );
    },

    getButtonPropsRealms: function () {
        return {
            className: 'btn btn-primary',
            onClick: this.handleRequestRealms
        }
    },

    handleRequestRealms: function () {
        RealmStatusApi.getRealmsStatus(this.updateRealms);
    },

    updateRealms: function (realms) {
        this.setState({realms: realms})
    }
});

module.exports = RealmsView;