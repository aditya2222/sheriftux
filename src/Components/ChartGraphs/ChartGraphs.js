import React, {Component} from 'react'


class ChartGraphs extends Component {

    componentDidMount() {
        let baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") {
                appName = "local";
            }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=BTC&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            // console.log(embedder.parentNode.children[1].children[0].children[1])
            embedder.parentNode.children[1].children[0].children[1].children[0].children[0].appendChild(s);
        })();


        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[ scripts.length - 1 ];
        (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=LTC&tsym=USD';
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.children[1].children[0].children[1].children[0].children[1].appendChild(s);
        })();

        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[ scripts.length - 1 ];
        (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=XMR&tsym=USD';
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.children[1].children[0].children[1].children[0].children[2].appendChild(s);
        })();

        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[ scripts.length - 1 ];
        (function (){
            var appName = encodeURIComponent(window.location.hostname);
            if(appName==""){appName="local";}
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl+'serve/v1/coin/chart?fsym=ETH&tsym=USD';
            s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            embedder.parentNode.children[1].children[0].children[1].children[0].children[3].appendChild(s);
        })();

    }

    render() {
        return (
            <div className={'row'}>
                <div id={'card1'} className={'col-3'}></div>
                <div id={'card2'} className={'col-3'}></div>
                <div id={'card3'} className={'col-3'}></div>
                <div id={'card4'} className={'col-3'}></div>
            </div>

        )
    }
}

export default ChartGraphs