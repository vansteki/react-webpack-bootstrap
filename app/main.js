/* main.js */

'use strict';

// require("expose?jQuery!jquery");
var React = require('react');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');


var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    _getUser(e, n, url) {
        var url = url || 'http://jsonplaceholder.typicode.com/users/1';
        jQuery.getJSON(url, function(res) { console.log(res)});
    },
    render() {
        return (
            <div>
                <input type="button" onClick={this._toggle} value="Press Me!"/>
                <input type="button" onClick={this._getUser} value="ckUser"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
            </div>
        );
    }
});

React.render(<Main />, document.body);