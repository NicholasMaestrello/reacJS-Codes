import React from 'react'

import Header from './header'
import Footer from './footer'

class Layout extends React.Component {
  constructor(){
    super()
    this.state = {
      title:'Welcome'
    }
  }
  render(){
    setTimeout(()=>{
      this.setState({title:'Welcome my friend'})
    },3000)
    return(
      <div>
        <Header title={this.state.title}/>
        <Header title={'Another title'}/>
        <Footer />
      </div>
    )
  }
}

export default Layout
