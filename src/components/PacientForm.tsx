

export const PacientForm = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

        <h2 className="font-black text-3xl text-center">
            Seguimiento pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
            añade pacientes 
            <span className="text-indigo-700 font-bold"> y administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" noValidate>
            <div className="mb-5">
                <label 
                    htmlFor="name"
                    className="text-sm uppercase font-bold"
                    >Paciente

                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="name" type="text" placeholder="nombre del paciente" />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="caretaker"
                    className="text-sm uppercase font-bold"
                    >Propietario

                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="caretaker" type="text" placeholder="nombre del propietario"/>
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-sm uppercase font-bold"
                    >Email

                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="email" type="text" placeholder="email de registro"/>
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="date"
                    className="text-sm uppercase font-bold"
                    >Alta fecha

                </label>
                <input className="w-full p-3  border border-gray-200" 
                    id="date" type="date" />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="symptoms"
                    className="text-sm uppercase font-bold"
                    >Sintomas

                </label>
                <textarea className=" w-full p-3 border border-gray-200"
                    id="symptoms" placeholder="sintomas del paciente"
                ></textarea>
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
