var React = require('react');
var $ = require('jquery');
var RealmApi = require('../request/request');
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
            <div className="row">
                <div className="col-md-8">
                    <div className="FormCharacter">
                        <div>
                            <h3>Input name and realm</h3>
                            <Input label="Name " onChange={this.handleInputChange.bind(this, 'name')} />
                            <Input label="Realm " onChange={this.handleInputChange.bind(this, 'realm')} />
                            <Button {...this.getButtonPropsCharacter()}>Character</Button>
                        </div>
                    </div>
                    <div className="CharacterList">
                        {this.renderCharacterImage()}
                        <List items={this.getCharacterAttributes()}></List>

                    </div>
                </div>
            </div>
        );
    },

    renderCharacterImage: function() {
        return (this.state.character.thumbnail) ?
            <img className="img-circle" src={'http://us.battle.net/static-render/us/' + this.state.character.thumbnail} alt="" /> :
            null;
    },

    handleInputChange: function(type, event) {
        var newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    },

    getButtonPropsCharacter: function () {
        return {
            className: 'btn btn-danger btn-lg btn-block',
            onClick: this.handleRequestCharacter
        }
    },

    handleRequestCharacter: function () {
        RealmApi.getCharacterProfile(this.requestCharacter, this.state.realm, this.state.name);

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