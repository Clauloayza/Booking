const RowTable = (props) => {
    const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
    return (
       <tr>
          {_tds}
      </tr> 
    )
 }

 const RTable = ({seats}) => {
     return (
        
        <div className="container">
            <img className="img" src="img/header.jpg" alt=""/>
             <div className="row">
                 <div className="col-md-6 col-xs-12" align="center">
                     
                    <table width="40%" border="5" className = "table table-bordered text-center">
                        <RowTable items = {seats[0]} />
                        <RowTable items = {seats[1]} />
                        <RowTable items = {seats[2]} />
                        <RowTable items = {seats[3]} />
                        <RowTable items = {seats[4]} />
                        <RowTable items = {seats[5]} />
                        <RowTable items = {seats[6]} />
                    </table>
                 </div>
                 <div className="col-md-6 col-xs-12 text-center">
                        
                        <h1><strong>Air Tickets Booking: </strong></h1>
                                           
                        <h3>Booking Details</h3>
                        <div className="form-group">
                        <span className="pull-left"><strong>Name:</strong></span>
                        <input type="text" className="form-control" placeholder="Name" size="6" maxlength="3"/>
                        <br/>
                        <span className="pull-left"><strong>LastName:</strong></span>
                        <input type="text" className="form-control" placeholder="LastName" size="6" maxlength="3"/>
                        <br/>
                        <span className="pull-left"><strong>DNI:</strong></span>
                        <input type="text" className="form-control dniId" placeholder="123456" size="6" maxlength="3"/>
					    </div>
                        <div className="btn form-group">
                            <button class="btn btn-info" id="btnReservar">Booking</button>
                            <button class="btn btn-success" id="btnLimpiarReservar">Check</button>
                            <button class="btn btn-danger" id="btnLimpiarLista">Clear</button>
                        </div> 
                        <div className="form-group">
                            <button class="btn btn-warning" id="btnListar">Add</button>
                        </div>
                        
                 </div>  
            </div>
        </div>
            
         
        
     );
 }

 class Passenger{
     constructor(seatNumber, name, lastname, dni){
         this.seatNumber = seatNumber;
         this.name = name;
         this.lastname = lastname;
         this.dni = dni;
     }
 }

 let ticketPerson = new Array();

 ticketPerson[14] = new Passenger('14','Ventura','Loayza','345423');
 ticketPerson[2] = new Passenger('2','Yovana','Medina','454322');
 ticketPerson[10] = new Passenger('10','Gaela','Zavala','546543');
 ticketPerson[23] = new Passenger('23','Favio','Zavala','786577');
 ticketPerson[22] = new Passenger('22','Josse','de la Cuba','236786');
 ticketPerson[1] = new Passenger('1','Javier','Perea','236785');

 function listPassengers (seats) {
    //console.log ("seats: ", seats);
    let newSeats = [];
    
    return ticketPerson.map ((row, index) => {
       return (
          <li className="text-center" key = {index}> 
              <div className="container">
                  
                 
                  <div className="row">
                  
                      <div className="col-md-3 col-xs-12"></div>
                      <div className="col-md-6 col-xs-12 tickets">
                      <h2 id="PassBoarding"><img className="airplane" src="img/airplane.png" alt=""/>BOARDING PASS</h2>
                                <div className="col-md-2 col-xs-2 code ">
                                  <img className="barras" src="img/codigo.jpg" alt=""/>
                                </div>
                                <div className="col-md-7 col-xs-7 code text">
                                    <span className="pull-left"><b>Name of passenger</b></span>
                                    <br/><p >{row.name} </p>
                                    <span className="pull-left"><b>LastName of passenger</b></span>
                                    <br/><p>{row.lastname} </p>
                                    <span className="pull-left"><b>DNI</b></span>
                                    <br/><p>{row.dni} </p>
                                </div>
                                <div className="col-md-2 col-xs-2 code ">
                                    <div className="numberSeat"> {row.seatNumber}</div>
                                </div>
                           
                          
                        
                      </div>
                      <div className="col-md-3 col-xs-12"></div>
                  </div>

              </div>
                
          </li>
       );
    });
 }
 
 const App = ({title, seats}) => {
    return (
       <div className="container">
          <RTable  seats = {seats}/>
        
          
          <ul>
             {listPassengers (seats)}
          </ul>
       </div>
    );
 }
 
 let seats = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28]
]


 ReactDOM.render ( 
     
    <App seats = {seats} />, 
    document.getElementById("root")
 ); 




  
