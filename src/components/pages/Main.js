import React, { useState,  } from 'react';
import Swal from 'sweetalert2';
const Main = () => {
    const [miligramos, setMiligramos] = useState(null);
    const [mililitros, setMililitros] = useState(null);
    const [conversion, setConversion] = useState(null);
    const [kg, setKg] = useState(null);
    const [dosis, setDosis] = useState(null)
    const [error, setError] = useState(null)
    const clearForm = () => {
        setMiligramos('');
        setMililitros('');
        setKg('');
        setConversion('');
        setDosis(null);
    }
    const calcularDosis = (event) => {
        if (!kg || !mililitros || !conversion || !miligramos) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Asegurese de completar todos los campos',
              })
        }else{
        const calculate = kg * mililitros * conversion / miligramos;
        if (isNaN(calculate)) {
           setError(true); 
           Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Asegurese de introducir solo datos numéricos',
          })
        }else{
            setError(false);
            setDosis(calculate)

        }
        }
        event.preventDefault();

    }
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="./logo.png" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Cálculo de dosis</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" >
                    <div>
                        <label for="mg" class="block text-sm font-medium leading-6 text-gray-900">Miligramos</label>
                        <div class="mt-2">
                            <input id="mg" name="mg" type="text" onChange={event => setMiligramos(event.target.value)} value={miligramos} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="ml" class="block text-sm font-medium leading-6 text-gray-900">Mililitros</label>
                        <div class="mt-2">
                            <input id="ml" name="ml" type="text" onChange={event => setMililitros(event.target.value)} value={mililitros} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="conversion" class="block text-sm font-medium leading-6 text-gray-900">Miligramos por Kg</label>
                        <div class="mt-2">
                            <input id="conversion" name="conversion" type="text" onChange={event => setConversion(event.target.value)} value={conversion} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="kg" class="block text-sm font-medium leading-6 text-gray-900" >Kg del paciente</label>
                        <div class="mt-2">
                            <input id="kg" name="kg" type="text" onChange={event => setKg(event.target.value)} value={kg} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div>
                        <button type="submit" onClick={calcularDosis} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Calcular</button>
                        <button type="button" class=" w-5/12 justify-center rounded-md mt-5 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Favoritos</button>
                        <button type="button" class="ml-8 w-6/12 justify-center rounded-md mt-5 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={clearForm}>Limpiar</button>
                    </div>
                </form>
                {
                    dosis ? (
                        <h3 class="mt-10 text-center text-lg text-gray-500">
                            La dosis indicada para {kg} kg es {dosis} ml
                        </h3>
                    ) : (
                        <h3 class="mt-10 text-center text-lg text-gray-500">
                            Introduzca los valores del medicamento requerido para calcular la dosificación
                        </h3>
                    )
                }

            </div>
        </div>
    )
}

export default Main