
import {create} from 'zustand'
import {v4 as uuid} from 'uuid'
import type { DraftPatient, Patient } from './types'


type PatientState = {
    patients: Patient[]
    //funcion que toma un dato de tipo draftpatient y no devuelve nada
    addPatient: (data: DraftPatient) => void
}
const createPatient = (patient: DraftPatient): Patient => {
    //tomo un borrador de paciente y le agrego un id
    return{...patient, id : uuid()}
}

export const usePatientStore = create<PatientState>((set,get) => ({
    patients: [],
    addPatient: (data) => {
        //creo un paciente con mi funcion y lo agrego al array de mi state
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
}))