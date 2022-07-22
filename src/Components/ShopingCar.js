import React,{useState,useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Modal,Form, Button} from 'react-bootstrap-v5'
export const ShopingCar = () => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}
        const [dataStorage,setDataStorage]= useState([]);
        let sum=0;
        const getData=()=>{
            let data=[];
          let kesys=Object.keys(localStorage)
          let i=kesys.length  
          while ( i-- ) {
            data.push( JSON.parse(localStorage.getItem(kesys[i]))); 
        }
           setDataStorage(data);
        }
        const deleteLocaStoragelData=(id)=>{
            localStorage.removeItem(id)
            let newData = dataStorage.filter(item => item.id !== id)
            
            setDataStorage(newData)   
        }
        const deleteAll=()=>{
            setTimeout(handleOpenModal(),300) 
        }
        const deleteStorage =()=>{
            const newStorageData=dataStorage.map((e)=>{
                localStorage.removeItem(e.id);
            })
            setDataStorage(newStorageData)
        }
        useEffect(() => {
           getData()
        }, []);
        console.log("------------------------")
        console.log(JSON.stringify(dataStorage))
        console.log("------------------------")
  return (
    <div> 
         <nav className="navbar navbar-dark bg-dark">
        <div className='container'>
        <a className="navbar-brand">Acasity</a> 
        <NavLink className="navbar-brand" to="/">Course</NavLink>
        <Link  className="nav-link h1" aria-current="page" to="/cart">🛒  <span className="badge bg-primary"></span></Link>
        </div> 
        </nav>
        
        <h1 className='text-center'>Cesta</h1>
        <div className='container '>
                <div className='mt-3 col-12 row'>
             {dataStorage?.map((lis)=>{
                 sum+=lis.price;
            return(
                        <div className="mb-3 border border-2 p-2 col-8" style={{"max-width":"740px"}}>
                        <div className="row col-12"  key={lis.id} >
                          <div className="col-4">
                          <img src={lis.img} class="img-fluid mt-3" style={{"max-width":"200px"}} alt="..."/>
                          </div>
                          <div className="col-8">
                              <div className="card-body">
                                  <h5 className="card-title h4">{lis.name}</h5>
                                  <p className="card-text">{lis.desc}</p>
                                  <div className='row col-12'>
                                       <p className="card-text col-4"><small className="text-muted">Horas: {lis.hours}</small></p>
                                       <p className="card-text col-7"><small className="text-muted">Profesor: {lis.Teacher}</small></p>
                                       <p className="card-text col-4"><small className="text-muted">Clases: {lis.Class}</small></p>
                                        <p className="card-text col-7"><small className="text-muted">Estudiantes: {lis.Students}</small></p>
                                         <p className="col-4 h6 fw-bold text-center"><small className="text-muted">Precio :{lis.price} S/</small></p>
                                         <a onClick={()=>{deleteLocaStoragelData(lis.id)}} href="">Eliminar</a>
                              </div>
                           
                            </div>
                          </div>
                        </div>
                      </div>
            )
})
        }
            <div className="col-md-3 mt-3">
                          <p className="card-text col-4  fw-bold"><small className="text-muted">Total</small></p>
                          <p className="col-4 h2 fw-bold text-center"><small className="text-muted">{sum}S/</small></p>
                          <button className="btn btn-primary w-100" onClick={()=>{deleteAll()}}>Pagar</button>
                          </div>
              
        </div>
                </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Actualizar Datos</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>El monto correspondiente a S/.{sum} Ha sido procesado con exito</Form.Label>
                            <Link to="/"> <Button onClick={()=>{deleteStorage()}}>Aceptar</Button></Link>
                          
                        </Form.Group>
                       
                    </Modal.Body>
                </Form>
            </Modal>
                        
    </div>
      
  )
}
