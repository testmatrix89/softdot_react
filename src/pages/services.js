import React, { Component } from 'react'
import InvestmentBoard from '../components/investment_calculator/InvestmentBoard';

class Services extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='mt-4'>Services</h1>
        <InvestmentBoard />
      </div>
    )
  }
}
export default Services;