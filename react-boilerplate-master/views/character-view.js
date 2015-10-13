var React = require('react');
var $ = require('jquery');
var RealmStatusApi = require('../request/request');
var Button = require('../components/button');
var Table = require('../components/table');
var Input = require('../components/input');
var List = require('../components/list');

var CharacterView = React.createClass({
    getInitialState: function () {
        return {
            character: {}
        }
    },

    render: function() {
        return (
            <div>
                <Button {...this.getButtonPropsCharacter()}>Character</Button>
                <Input label="Name " onChange={this.handleInputChange.bind(this, 'name')} />
                <Input label="Realm " onChange={this.handleInputChange.bind(this, 'realm')} />
                {this.renderCharacterImage()}
                <List items={this.getCharacterAttributes()}></List>
            </div>
        );
    },

    renderCharacterImage: function() {
        return (this.state.character.thumbnail) ?
            <img src={'http://us.battle.net/static-render/us/' + this.state.character.thumbnail} alt="" /> :
            null;
    },

    handleInputChange: function(type, event) {
        var newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    },

    getButtonPropsCharacter: function () {
        return {
            className: 'btn-btn-primary',
            onClick: this.handleRequestCharacter
        }
    },

    handleRequestCharacter: function () {
        RealmStatusApi.getCharacterProfile(this.requestCharacter, this.state.realm, this.state.name);
    },

    getCharacterAttributes: function () {
        var attributesList = [];
        var attribute;

        for (attribute in this.state.character) {
            attributesList.push(attribute + ': ' + this.state.character[attribute]);
        }

        return attributesList;
    },

    requestCharacter: function (character) {
        this.setState({character: character});
    }
});

module.exports = CharacterView;