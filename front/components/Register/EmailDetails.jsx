import React, {Component} from 'react'
import Welcome from './Welcome'

class EmailDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
      } 
   
    
    saveAndContinue(e){
        e.preventDefault()
        const input = document.getElementsByClassName('input')[0]
        // console.log(input)
        if(input.value != ''){
            // console.log('Continue')
            if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)$/i.test(input.value)){
            this.props.nextStep()
            }else{
                input.style.color = 'red'
                input.placeholder = 'please, complete with a valid email'
                input.style.borderBottomColor = 'red'
            }
        }else{
            // console.log('dont continue')
            input.style.color = 'red'
            input.placeholder = 'please, complete this'
            input.style.borderBottomColor = 'red'
        }
    }

    render(){
        const {values}=this.props
        
        return(
        <div>
            <Welcome/>
            <form action="">
                <p className="pregunta">1. Confirmanos tu email</p>
                <input
                className="input" 
                type="email"
                name='email'
                onChange={this.props.handleChange}
                defaultValue={values.email} 
                autoFocus
                />
                <div>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )


    }
}

export default EmailDetails