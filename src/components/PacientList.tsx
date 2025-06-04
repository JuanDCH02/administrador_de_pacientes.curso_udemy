import { usePatientStore } from "../store"
import { PatientDetail } from "./PatientDetail"

export const PacientList = () => {

    const {patients} = usePatientStore()
    console.log(patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length? (
        <>
          <h2 className="font-black text-center text-3xl"></h2>
          <p className="text-xl mt-5 mb-10 text-center"
            >administra tus 
          <span className="text-indigo-600 font-bold"> pacientes y citas</span>
          </p>
          {patients.map(patient =>(
            <PatientDetail
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ):(
        <>
          <h2 className="font-black text-3xl text-center capitalize"
            >no hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center"
            >comienza agregando pacientes
          <span className="text-indigo-600 font-bold"> y apareceran acá</span>
          </p>
          
        </>
      )}
      
    </div>
  )
}
