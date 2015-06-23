'use strict';

// require("expose?jQuery!jquery");
var React = require('react');
var db = require("json!../db/db.json");
var ftp = require("json!../db/ftp.json");
var Dog = require('./Dog.js');
// var Todo = require('./todo.allin1.js');
var List = require("./List.js");

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
        window.db = db.data;
        window.ftp = ftp.results;
        console.log("{\n  window.ftp\n  window.db\n}\nloaded!")
    },
    render: function() {
        this._iniTestData();
        return (
            <div>
                <input type='button' onClick={this._iniTestData} value="expose DB to window.db"/>
                <List />
            </div>
        );
    }
});

module.exports = Main;