import React, {Component} from 'react'
import ListaComponent from "./ListaReut";
import HaveNeed from "./HaveNeed";
import Social from "./Social";

class Profile extends Component{

render(){


    return(
        <div>
	<div class="partners">
		<img src="../img/partners_white.svg"  width="90px" height="35px" alt="Partners"/>
	</div>

	<div class="content">
		<div class="center">
            <div className="gridPhoto">
                <div className="roundedPhoto colorTrial" />
                    <div className="textList">
                        <h2>Mupey</h2>
                        <p>Especialidad</p>
            </div>
        </div>		
			<p>
				Partners es una red social colaborativa que conecta emprendedores con ganas de crecer y y potenciar sus proyectos.
				En este espacio vas a poder compartir tus proyectos, dar y recibir feedback de otros emprendedores. Intercambiar conocimientos y promover una cultura colaborativa.
			</p>
            
            {Social({})}
		</div>
		<div class="aside">		
			<div class="Box-content">
          {HaveNeed({})}
			</div>
		</div>

		<div class="aside2">
    <div class="Box-content">
				{ListaComponent({title:'Estado del \r\nproyecto'})}
			</div>
			<div class="Box-content">
				{ListaComponent({list:['a','b','c','d'],title:'Colaboraciones'})}
			</div>
			
		</div>
	</div>
</div>	
       )
}




}

export default Profile