import React, {Component} from 'react'
import './DetailsCard.css'

class DetailsCard extends Component{

	state = {
		name: this.props.name,
		symbol: this.props.symbol,
		price: null,
		lastPrice: null
	}

	componentDidMount(){

			this.pollPrice()
		
			setInterval(this.pollPrice, 10000)
	}

	pollPrice = () => {
		console.log('polling for price')
		fetch(`https://min-api.cryptocompare.com/data/price?fsym=${this.state.symbol}&tsyms=${this.state.symbol},USD&api_key=6894d8fe33eb1e6462b51be246b81ea0850f2bb362b91875037a9c1945b09007`)
			.then((response)=>{
				
				return response.json()
			})
			.then((response)=>{
				console.log(response)

				this.setState((prevState) => {
					return {
						price: response.USD,
						lastPrice: prevState.price !== response.USD ? prevState.price : prevState.lastPrice
					}
				})
			})
			.catch((error)=>{
				console.log(error)
			})
	}

	priceChange = () => {

		const diff = this.state.lastPrice - this.state.price
		const change = diff/this.state.lastPrice
		return (change*100).toFixed(3)
	}

	render(){
		const gainloss = this.state.lastPrice > this.state.price ? 'loss' : 'gain'
		return(

			<div className={`card rare-wind-gradient ${gainloss}`}>

				<div className='name'>

				{this.state.name} 
				<span>({this.state.symbol})</span>

				</div>

				<div className={`percent ${gainloss}`}>
					{this.priceChange()}%
				</div>

				<div className="logo">
				
				</div>

				<div className={`price ${gainloss}`}>
					{this.state.price}
				</div>

			</div>

			)
	}
}

export default DetailsCard