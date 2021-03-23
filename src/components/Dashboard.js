import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Card, CardGroup, CardDeck, CardColumns } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
        chartData:{
            labels: [["N°032"],["N°045"],["N°050"]],
            datasets:[
                {
                    label: 'Montant en euros(€)',
                    data:[
                        32000,4000,5000
                    ],
                    backgroundColor: 'rgb(144, 12, 63)'
                }
            ]
        }     
    }
    this.state2 = {
        chartData2:{
            labels: [["06/03/21"],["07/03/21"],["18/03/21"]],
            datasets: [
                {
                label: 'Nombre de commande',
                borderColor: 'rgb(64, 84, 104)',
                pointRadius: '4' ,
                pointBackgroundColor:  'rgb(64, 84, 104)',
                data: [1,2,3]
                }
            ]
        }
    }
    this.state3 = {
        chartData3:{
            labels: [["Jean Luc"],["John Doe"],["Joe"]],
            datasets: [{
                backgroundColor: ['rgb(144, 12, 63)', 'rgb(64, 84, 104)', 'rgb(41, 99, 81)'], 
                data: [[1],[1],[1]]
                }
            ]
        }
    }
    this.state4 = {
        chartData4:{
            labels: [["Commande validée"],["Commmande en cours"]],
            datasets: [{
                backgroundColor: ['rgb(144, 12, 63)', 'rgb(64, 84, 104)'], 
                data: [[2],[1]]
                }
            ]
        }
    }
  }
    render() {
        return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>3</h3>
              <p>Commandes</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>66<sup style={{fontSize: 20}}>%</sup></h3>
              <p>De Commandes Validées</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>3</h3>
              <p>Fournisseurs Différents</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>0</h3>
              <p> Nouvels Ajouts</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
          </div>
        </div>
        {/* ./col */}
      </div>
      {/* /.row */}


      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Montant en euros en fonction du numéro de commande
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                </ul>
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
              <div className="tab-content p-0">
                {/* Morris chart - Sales */}
                <Bar
                    data={this.state.chartData}
                    options={{}}
                />
                <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                </div>  
              </div>
            </div>{/* /.card-body */}
          </div>
          {/* /.card */}
          {/* /.card */}
{/* Main row */}
<div className="row">
  {/* Left col */}
  <section className="col-lg-7 connectedSortable">
    {/* Custom tabs (Charts with tabs)*/}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <i className="fas fa-chart-pie mr-1" />
          Nombre de commande par jour
                  </h3>
        <div className="card-tools">
          <ul className="nav nav-pills ml-auto">
          </ul>
        </div>
      </div>{/* /.card-header */}
      <div className="card-body">
        <div className="tab-content p-0">
          {/* Morris chart - Sales */}
          <Line
                    data={this.state2.chartData2}
                        options={{}}
                />
          <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 90}}>
            <canvas id="revenue-chart-canvas" height={150} style={{height: 150}} />                         
          </div>
          <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
            <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
          </div>  
        </div>
      </div>{/* /.card-body */}
    </div>
    {/* /.card */}
  </section></div>
</section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable">



{/* Map card */}
<div className="card bg-gradient-primary">
  <div className="card-header border-0">
    <h3 className="card-title">
          <i className="fas fa-chart-pie mr-1" />
      Proportion de commande en fonction du fournisseur
    </h3>
    {/* card tools */}

    {/* /.card-tools */}
  </div>
  <div className="card-body">
  <Pie
                    data={this.state3.chartData3}
                        options={{
                          legend: {
                            display: true,
                            labels: {
                                fontColor: 'rgb(255, 255, 255)'
                            }
                        }
                        }}
                />  </div>
  {/* /.card-body*/}

</div>
{/* /.card */}



{/* Map card */}
<div className="card bg-gradient-primary">
  <div className="card-header border-0">
    <h3 className="card-title">
    <i className="fas fa-chart-pie mr-1" />
    Proportion de commande "validée" et "en cours"
    </h3>
    {/* card tools */}

    {/* /.card-tools */}
  </div>
  <div className="card-body">
  <Pie
                    data={this.state4.chartData4}
                        options={{
                          legend: {
                            display: true,
                            labels: {
                                fontColor: 'rgb(255, 255, 255)'
                            }
                        }
                        }}
                    /> 
                     </div>
  {/* /.card-body*/}

</div>
{/* /.card */}

          {/* /.card */}
          {/* /.card */}
          {/* /.card */}

        </section>
        {/* right col */}
      </div>


      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>


        )
    }
  }



