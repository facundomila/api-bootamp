var React = require('react');
var $ = require('jquery');
var RealmStatusApi = require('../request/request');
var Button = require('../components/button');
var Table = require('../components/table');
var Input = require('../components/input');


var GuildView = React.createClass({
    getInitialState: function () {
        return {
            guild: {}
        }
    },

    render: function() {
        return (
            <div>

                <Button {...this.getButtonPropsGuild()}>Gild Information</Button>
                <Input label="Guild name " onChange={this.handleInputChange.bind(this, 'guild_name')} />
                <Input label="Realm " onChange={this.handleInputChange.bind(this, 'realm')} />
                <Input label="name " onChange={this.handleInputChange.bind(this, 'name')} />
                <ul>
                    <li><h3>Character name: {this.state.guild.name}</h3></li>
                    <li><h3>Character Realm: {this.state.guild.realm}</h3></li>
                    <li><h3>Character Battlegroup: {this.state.guild.battlegroup}</h3></li>
                </ul>
                <img src= {'http://us.battle.net/static-render/us/'+this.state.guild.thumbnail} alt="" />

            </div>
        );
    },


    handleInputChange: function(type, event) {
        var newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    },

    getButtonPropsGuild: function () {
        return {
            className: 'btn-btn-primary',
            onClick: this.handleRequestGuild
        }
    },

    handleRequestGuild: function () {
        RealmStatusApi.name = (this.state.name);
        RealmStatusApi.realm = (this.state.realm);
        RealmStatusApi.realm = (this.state.guild);

        RealmStatusApi.getguildProfile(this.requestGuild);
    },

    requestGuild: function (guild) {
        this.setState({character: guild});
        console.log(guild)
    }
});

module.exports = GuildView;