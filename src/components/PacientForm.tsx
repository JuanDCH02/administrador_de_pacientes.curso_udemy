import {useForm} from 'react-hook-form'
import { Error } from './Error'
import { usePatientStore } from '../store'

import type { DraftPatient } from '../types'

export const PacientForm = () => {

    const {addPatient} = usePatientStore()
    const {register, handleSubmit, formState: {errors}} = useForm<DraftPatient>()
    const registerPacient = (data: DraftPatient) => {
        addPatient(data)
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

        <h2 className="font-black text-3xl text-center capitalize">
            seguimiento pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
            añade pacientes 
            <span className="text-indigo-700 font-bold"> y administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
        noValidate 
        onSubmit={handleSubmit(registerPacient)} 
        >
            <div className="mb-5">
                <label 
                    htmlFor="name"
                    className="text-sm uppercase font-bold"
                    >Paciente
                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="name" type="text" placeholder="nombre del paciente" 
                    {...register('name', { // valido que haya algo en el input
                        required: 'el nombre del paciente es obligatorio'
                    })}
                />
                {errors.name && ( //muestro si hay algun error
                    <Error>{errors.name?.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="caretaker"
                    className="text-sm uppercase font-bold"
                    >Propietario
                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="caretaker" type="text" placeholder="nombre del propietario"
                    {...register('caretaker', { // valido que haya algo en el input
                        required: 'el propietario es obligatorio'
                    })}
                />
                {errors.caretaker && ( //muestro si hay algun error
                    <Error>{errors.caretaker?.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-sm uppercase font-bold"
                    >Email
                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="email" type="text" placeholder="email de registro"
                    {...register("email", {
                        required: "el email es obligatorio",
                        pattern: {
                            //regex para validar el email
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'email no valido'
                        }
                      })} 
                />
                {errors.email && ( //muestro si hay algun error
                    <Error>{errors.email?.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="date"
                    className="text-sm uppercase font-bold"
                    >Alta fecha
                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="date" type="date" 
                    {...register('date', { // valido que haya algo en el input
                        required: 'la fecha es obligatorio'
                    })}
                />
                {errors.date && ( //muestro si hay algun error
                    <Error>{errors.date?.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="symptoms"
                    className="text-sm uppercase font-bold"
                    >Sintomas
                </label>
                <textarea className=" w-full p-3 border border-gray-200"
                    id="symptoms" placeholder="sintomas del paciente"
                    {...register('symptoms', { // valido que haya algo en el input
                        required: 'los sintomas es obligatorio'
                    })}
                />
                {errors.symptoms && ( //muestro si hay algun error
                    <Error>{errors.symptoms?.message}</Error>
                )}
            </div>

            <input type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
                cursor-pointer transition-colors"
                value={'guardar-paciente'} 
            />

        </form>

    </div>
  )
}
