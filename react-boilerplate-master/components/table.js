var React = require ('react');
var _ = require ('lodash');

var Table = React.createClass ({

    propTypes: {
        colums: React.PropTypes.array,
        rows: React.PropTypes.array
    },

    getDefaultProps: function () {
        return {
            columns: [],
            rows: []
        };
    },

    render: function () {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {this.props.columns.map(this.renderColumn)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.rows.map(this.renderRow)}
                </tbody>
            </table>
        );
    },

    renderColumn: function (column, index) {
        return (
            <th key={index}>{column}</th>
        );
    },

    renderRow: function (row, index) {
        return (
            <tr key={index}>{this.props.columns.map(this.renderCell.bind(this, row))}</tr>
        );
    },

    renderCell: function (row, column, index) {
        return (
            <td key={index}>{row[column].toString()}</td>
        );
    }
});

module.exports = Table;
