import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class ImageProy extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
        
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }


    save(e){
        // e.preventDefault()
        const input= document.getElementById('fileUpload')
        //this.props.handleInterest(input)
        // input.value= ''
        const div = document.getElementById('value')
        div.innerHTML=input.files[0].name
    }

    render(){
        const {values}=this.props
    //     const interest =values.interesting

    //     const list = interest.map((interest,i)=>{
    //         return(
    //         <div key={i} className="boxList">
    //         <p className="textList"
    //         >{interest}</p>
    //         </div>)
    //    })

        return(
        <div>
            <Felicitaciones/>
            <form>
                <p className="pregunta">4. Subi una imagen</p>
                <input 
                className="inputFile"
                id="fileUpload"
                type="file"
                accept="image/*"
                onChange={this.save}
                defaultValue={values.imageProy}/>
                
                <div id="value" className="subir">
                </div>
                <label htmlFor="fileUpload" className="saveInterest"></label>
                {/* <button className="saveInterest" onClick={this.save}></button> */}
                
                <br/>
                {/* {list} */}
                
                

                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue} >Siguiente Pregunta</button>
                </div>
            </form>
       </div>
       )
    }



}
export default ImageProy