import React, {Component} from 'react';
import {MDBDataTable, MDBBtn} from 'mdbreact';
import {Line} from "react-chartjs-2";


class DatatablePage extends Component {


    state = {
        dataLine: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    }


    render() {


        const data = {
            columns: [
                {
                    label: 'Coin',
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Price',
                    field: 'position',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Direct Vol 24H',
                    field: 'office',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Total Volume 24H',
                    field: 'age',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Mkt. Cap',
                    field: 'date',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Chart',
                    field: 'date',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Chg 24H',
                    field: 'salary',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: [
                {
                    name: [<i className="fab fa-bitcoin fa-3x"></i>, ' Bitcoin'],
                    price: '$5310',
                    DirectVol24H: '$173.32M',
                    TotalVolume24H: '$1.98B',
                    MarketCap: '$93.76B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.56%'
                },
                {
                    name: [<i className="fab fa-ethereum fa-3x"></i>, 'Ethereum'],
                    price: '$169.91',
                    DirectVol24H: '$65.68M',
                    TotalVolume24H: '$1.42B',
                    MarketCap: '$17.98B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.54%'
                },
                {
                    name: [<i className="fab fa-neos fa-3x"></i>, 'EOS'],
                    price: '$5.24',
                    DirectVol24H: '$11.71M',
                    TotalVolume24H: '$976.87M',
                    MarketCap: '$5.46B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '1.16%'
                },
                {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                },
                {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                },
                {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                },
                {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<i class="fab fa-monero fa-3x"></i>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <Line height={150} width={400} data={this.state.dataLine} options={{responsive: false}}/>,
                    Chg24H: '0.91%'
                },


                //    Line Graph Data set


            ]
        }

        return (
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />

        )


    }


};


export default DatatablePage;






