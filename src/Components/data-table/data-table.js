import React, {Component, Children} from 'react';
import {MDBDataTable, MDBBtn} from 'mdbreact';
import {Line} from "react-chartjs-2";
import './data-table.css'
import axios from 'axios'
import Details from '../Details/Details'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

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
        },

        price: '0',
        directVol24H: '0',
        totalVol24H: '0',
        mktCap: '0'
    }


    // componentDidMount() {
    //
    //     setTimeout(() => {
    //
    //
    //         axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=6894d8fe33eb1e6462b51be246b81ea0850f2bb362b91875037a9c1945b09007')
    //             .then((response) => {
    //                 console.log(response.data.Data[0].DISPLAY.USD)
    //                 this.setState({
    //
    //                     price: response.data.Data[0].DISPLAY.USD.PRICE,
    //                     directVol24H: response.data.Data[0].DISPLAY.USD.VOLUME24HOURTO,
    //                     totalVol24H: response.data.Data[0].DISPLAY.USD.TOTALVOLUME24HTO,
    //                     mktCap: response.data.Data[0].DISPLAY.USD.MKTCAP,
    //                 })
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //
    //     }, 2000)
    //
    // }


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
                    field: 'dadsad',
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
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/19633/btc.png"
                                alt=""/>, 'Bitcoin'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.56%'
                },
                {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/20646/eth_logo.png"
                                alt=""/>, 'Ethereum'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.54%'
                },
                {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/1383652/eos_1.png"
                                alt=""/>, 'EOS'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '1.16%'
                },
                {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/35309662/ltc.png"
                                alt=""/>, 'Litecoin'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                },
                {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                },
                {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                },
                {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: this.state.price,
                    DirectVol24H: this.state.directVol24H,
                    TotalVolume24H: this.state.totalVol24H,
                    MarketCap: this.state.mktCap,
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{width: '80px'}} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                                alt=""/>, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600"
                                alt=""/>,
                    Chg24H: '0.91%'
                },


                //    Line Graph Data set


            ]
        }


        return (


            <div className='container'>

                <div>
                    <div style={{height:'100%'}}>
                        <iframe
                            src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=20&pref_coin_id=1505&graph=yes"
                            width="100%" height="409" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0"
                            border="0" ></iframe>
                    </div>
                    <div>powered
                        by&nbsp;<a href="https://coinlib.io" target="_blank">Coinlib</a>
                    </div>
                </div>
            </div>


        )


    }


};


export default DatatablePage;






