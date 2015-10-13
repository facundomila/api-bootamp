module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var MainView = require('./views/main-view');
    var RealmsView = require('./views/realms-view');
    var HomeView = require('./views/home-view');
    var CharacterView = require('./views/character-view');
    var GuildView = require('./views/guild-view');

    var ModuleRouter = function () {
        this.routes = (
            <Route handler={MainView}>
                <DefaultRoute handler={HomeView} />
                <Route name="home" path="home/" handler={HomeView}/>
                <Route name="realms" path="realms/" handler={RealmsView}/>
                <Route name="character" path="character/" handler={CharacterView}/>
                <Route name="guild" path="guild/" handler={GuildView}/>
            </Route>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        Router.run(this.routes, function (Root) {
            React.render(<Root />, mountElement);
        });
    };

    return new ModuleRouter();
})();
