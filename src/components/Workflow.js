import React, { Component } from 'react'
import Table from './Table'

class Workflow extends Component {
    state = {
        elements: [
            {
                numero: '032',
                fournisseur: 'Jean Luc',
                montant: '32000',
                date: '06/03/21',
                statut: 'Validé'
            },
            {
                numero: '045',
                fournisseur: 'John Doe',
                montant: '4000',
                date: '07/03/21',
                statut: 'Validé'
            },
            {
                numero: '050',
                fournisseur: 'Joe ',
                montant: '5000',
                date: '18/03/21',
                statut: 'En cours'
            }
        ]
    }
    render() {
        return (
            <div>
                <div class='container'>
                    <table class="table tableMarging">
                        <thead>
                            <tr>
                                <th>Numéro</th>
                                <th>Fournisseur</th>
                                <th>Montant</th>
                                <th>Date</th>
                                <th>Statut</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.elements.map(element => (
                                <tr>
                                    <td>{element.numero}</td>
                                    <td>{element.fournisseur}</td>
                                    <td>{element.montant}</td>
                                    <td>{element.date}</td>
                                    <td>{element.statut}</td>
                                    <td><button type="button" class="btn btn-warning">Supprimer</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button type="button" class="btn btn-success">Ajouter</button>
            </div>
        )
    }
}

export default Workflow;