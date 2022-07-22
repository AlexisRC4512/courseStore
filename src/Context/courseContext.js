import React, { createContext,useState,useEffect } from 'react'
import { useFetch } from '../hooks/fetchUse';
export const ListCourse=createContext([]);
export const CourseContextProvider = ({children}) => {
const [course,setCourse]= useState([]);
const URL="http://localhost:4000/Cursos";
const fetchList = useFetch(URL, (response) => {
    setCourse(response);
    console.log("-----------s---------------")
    console.log(response);
});

useEffect(() => {
    fetchList();
}, []);
  return (
    <ListCourse.Provider value={{course}}>
        {children}
    </ListCourse.Provider>
  )
}
