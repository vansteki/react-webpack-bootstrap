var React = require('react');

var Item = React.createClass({
	render: function() {
		return (<tr><td>{this.props.item.host}</td><td>{this.props.item.ip}</td></tr>);
	}
});

var ItemTable = React.createClass({
	render: function() {
		var rows = [];
		this.props.items.forEach(function(item) {
			rows.push(<Item item={item} />);
		});
		return (
			<table>
				<thead>
					<th>host</th>
					<th>createTime</th>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
});

var List = React.createClass({
	getInitialState: function() {
		return {
			ftp:window.ftp
		};
	},
	render: function() {
		return (
			<ItemTable items={this.state.ftp} />
		);
	}
});

module.exports = List;