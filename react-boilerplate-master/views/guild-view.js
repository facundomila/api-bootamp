var React = require('react');
var $ = require('jquery');
var RealmApi = require('../request/request');
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
            <div className="row">
                <div className="col-md-8">
                    <Button {...this.getButtonPropsGuild()}>Gild Information</Button>
                    <Input label="Guild name " onChange={this.handleInputChange.bind(this, 'guildName')} />
                    <Input label="Realm " onChange={this.handleInputChange.bind(this, 'realm')} />
                    <ul>
                        <li><h3>guild Guild_name: {this.state.guild.battlegroup}</h3></li>
                        <li><h3>Character Realm: {this.state.guild.realm}</h3></li>
                    </ul>
                </div>
            </div>
        );
    },

//<img src= {'http://us.battle.net/static-render/us/'+this.state.guild.thumbnail} alt="" />

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

        RealmApi.getGuildProfile(this.requestGuild, this.state.realm, this.state.guildName);
        /*console.log(RealmApi);*/

        RealmApi.getGuildProfile(this.requestGuild);
    },

    requestGuild: function (guild) {
        this.setState({guild: guild});

        console.log(guild)
    }
});

module.exports = GuildView;