/* main.js */

'use strict';

// require("expose?jQuery!jquery");
// var Db = require("json!./ftp.json");
var React = require('react');
var Dog = require('./Dog.js');

var Main = React.createClass({
    getInitialState: function() {
        return null;
    },
    render: function() {
        return (
            <div>
                <Dog />
            </div>
        );
    }
});

module.exports = Main;