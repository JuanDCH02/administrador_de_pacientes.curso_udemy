import {toast} from 'react-toastify'
import type { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientDetailprops={
  patient: Patient
}

export const PatientDetail = ({patient} : PatientDetailprops) => {

  const {deletePatient,getPatientById} = usePatientStore()
  const handleDelete = () =>{
    deletePatient(patient.id)
    toast('Paciente Eliminado', {type:'error', position:'top-center'})
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl ">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Nombre" data={patient.name} />
        <PatientDetailItem label="Propietario" data={patient.caretaker} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Fecha Alta" data={patient.date.toString() } />
        <PatientDetailItem label="Sintomas" data={patient.symptoms } />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
          <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase
           text-white font-bold rounded-lg"
           type="button"
           onClick={() => getPatientById(patient.id)}
            >Editar
          </button>

          <button className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase
           text-white font-bold rounded-lg"
           type="button"
           onClick={() => handleDelete()}
            >Eliminar
          </button>
        </div>
        
    </div>
  )
}
