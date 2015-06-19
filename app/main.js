/* main.js */

'use strict';

// require("expose?jQuery!jquery");
var React = require('react');
var Dog = require('./Dog.js');
var Db = require("Json!./db.json");
var XD = require("Json!./XD.json");

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle: function() {
        this.setState({
            switch: !this.state.switch
        });
    },
    _getUser: function(e, n, url) {
        var url = url || 'http://jsonplaceholder.typicode.com/users/1';
        jQuery.getJSON(url, function(res) { console.log(res)});
    },
    _iniTestData: function() {
        window.db = Db.data;
        window.xd = XD.results;
    },
    render: function() {
        return (
            <div>
                <input type='button' onClick={this._iniTestData} value="expose Db to window.db"/>
                <Dog />
            </div>
        );
    }
});

module.exports = Main;