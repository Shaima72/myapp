import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
                    <tbody>
                        <tr>
                            <td>{this.props.numero}</td>
                            <td>{this.props.date}</td>
                            <td>{this.props.prix}</td>
                            <td>{this.props.valideur}</td>
                        </tr>
                    </tbody>
        )
    }
} 