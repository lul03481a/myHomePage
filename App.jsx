import React from 'react';
import  {Table} from 'react-bootstrap';
import  {Panel} from 'react-bootstrap';
class App extends React.Component {
	constructor() {
      	super();

		this.state = require('./data.json');
		}	
//                    
//
   render() {
      return (
         <div>     
         	<Panel header="Console d'administration">
         	</Panel>         	
         	<Panel header="Applications">
            	<TableServeur serveur={this.state.serveur} liens={this.state.liens} />
            </Panel>
         </div>
      );
   }
}

/*
*
*/

class TableServeur extends React.Component {
   render() {
      return (            	   
	       	<Table striped bordered condensed hover>
	       	 <thead>
      			<tr>
        			<th>{this.props.serveur}</th>        
      			</tr>
    			</thead>
               	<tbody>
                  {this.props.liens.map((item, i) => <TableRow key = {i} lien = {item} />)}
               	</tbody>
            </Table>
            
      );
   }
}


/*
*
*/
class TableRow extends React.Component {
   render() {
      return (
       
         <tr>  
            <td> <Lien adresse={this.props.lien}/></td>          
         </tr>
      );
   }
}


/*
*
*/
class Lien extends React.Component {
   render() {
      return (
         <a href={this.props.adresse.url} target="_blank">{this.props.adresse.name}</a>            
      );
   }
}

export default App;