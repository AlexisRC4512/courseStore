import React,{useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ListCourse } from '../Context/courseContext';
import { setToLocalStorage } from '../Utils/LocalStorageUtils';
export const Course = () => {
  
    const {course}= useContext(ListCourse);
    const saveData=(id,data)=>{
        if (!localStorage.getItem(id)) {
            setToLocalStorage(id,data);
        }
       
    }
    
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
        <div className='container'>
        <a className="navbar-brand">Acasity</a> 
        <NavLink className="navbar-brand" to="/">Course</NavLink>
        <Link  className="nav-link h1" aria-current="page" to="/cart">🛒  <span className="badge bg-primary"></span></Link>
        </div> 
        </nav>
        <div className='container mt-3'>
            <h1 className='text'>Cursos</h1>
        {course.map((lis)=>{
            return(
                <div className="mb-3 border border-2 p-2" style={{"max-width":"940px"}}>
                <div className="row" key={lis.id}>
                  <div className="col-md-4">
                    <img src={lis.img} class="img-fluid mt-3" style={{"max-width":"300px"}} alt="..."/>
                  </div>
                  <div className="col-5">
                    <div className="card-body">
                      <h5 className="card-title h4">{lis.name}</h5>
                      <p className="card-text">{lis.desc}</p>
                      <div className='row col-12'>
                      <p className="card-text col-4"><small className="text-muted">Horas: {lis.hours}</small></p>
                      <p className="card-text col-7"><small className="text-muted">Profesor: {lis.Teacher}</small></p>
                      <p className="card-text col-4"><small className="text-muted">Clases: {lis.Class}</small></p>
                      <p className="card-text col-7"><small className="text-muted">Estudiantes: {lis.Students}</small></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3">
                  <p className="card-text col-4 h5 fw-bold"><small className="text-muted">{lis.price} S/</small></p>
                  <button className="btn btn-primary w-100" onClick={()=>{saveData(lis.id,lis)}}>Añadir a la cesta</button>
                  </div>
                </div>
              </div>
            )
})

        }
        </div>
       
    </div>
  )
    }
