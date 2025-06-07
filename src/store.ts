
import { devtools } from 'zustand/middleware'
import {create} from 'zustand'
import {v4 as uuid} from 'uuid'
import type { DraftPatient, Patient } from './types'


type PatientState = {
    // en el state cargo todas las funciones y elementos para tener acceso en todos lados
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    activeId: Patient['id']
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data:DraftPatient) => void
}
const createPatient = (patient: DraftPatient): Patient => {
    //tomo un borrador de paciente y le agrego un id
    return{...patient, id : uuid()}
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
        patients: [],
        activeId:'',
        addPatient: (data) => {
            //creo un paciente con mi funcion y lo agrego al array de mi state
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) =>({
                //escribo en el state todos los pacientes menos el que coincide con el 
                //id que le paso
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() =>({
                //seteo el id activo
                activeId: id
            }))
        },
        updatePatient: (data) =>{
            set((state) =>({
                //busco el paciente a editar con el id activo y lo actualizo con los datos nuevos
                patients: state.patients.map(patient => patient.id === state.activeId?
                    {id: state.activeId, ...data} : patient),
                //vacio el id activo
                    activeId:''
            }))
        }
    }))
)