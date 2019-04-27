import React, { Component, Children } from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import { Line } from "react-chartjs-2";
import './data-table.css'

class DatatablePage extends Component {


    // componentDidMount() {
    //     let baseUrl = "https://widgets.cryptocompare.com/";
    //     var scripts = document.getElementsByTagName("script");
    //     var embedder = scripts[scripts.length - 1];
    //     (function () {
    //         var appName = encodeURIComponent(window.location.hostname);
    //         if (appName == "") { appName = "local"; }
    //         var s = document.createElement("script");
    //         s.type = "text/javascript";
    //         s.async = true;
    //         var theUrl = baseUrl + 'serve/v1/coin/header?fsym=BTC&tsyms=USD,EUR,CNY,GBP';
    //         s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    //         embedder.parentNode.children[1].children[0].children[2].children[1].children[0].children[0].children[0].children[1].children[0].children[5].children[0].appendChild(s)
    //         // console.log(embedder.parentNode.children[1].children[0].children[2].children[1].children[0].children[0].children[0].children[1].children[0].children[5].children[0])
    //         console.log('embdedder is', s)
    //     })();
    // }

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
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/19633/btc.png"
                        alt="" />, ' Bitcoin'],
                    price: '$5310',
                    DirectVol24H: '$173.32M',
                    TotalVolume24H: '$1.98B',
                    MarketCap: '$93.76B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.56%'
                },
                {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/20646/eth_logo.png"
                        alt="" />, 'Ethereum'],
                    price: '$169.91',
                    DirectVol24H: '$65.68M',
                    TotalVolume24H: '$1.42B',
                    MarketCap: '$17.98B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.54%'
                },
                {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/1383652/eos_1.png"
                        alt="" />, 'EOS'],
                    price: '$5.24',
                    DirectVol24H: '$11.71M',
                    TotalVolume24H: '$976.87M',
                    MarketCap: '$5.46B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '1.16%'
                },
                {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/35309662/ltc.png"
                        alt="" />, 'Litecoin'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                },
                {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                },
                {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                },
                {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
                    Chg24H: '0.91%'
                }, {
                    name: [<img style={{ width: '80px' }} src="https://www.cryptocompare.com/media/34477776/xrp.png"
                        alt="" />, 'Monero'],
                    price: '$76.35',
                    DirectVol24H: '$24.63M',
                    TotalVolume24H: '$721.87M',
                    MarketCap: '$4.69B',
                    chart: <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1556343600" alt="" />,
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






