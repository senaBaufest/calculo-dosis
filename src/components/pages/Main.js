import React, { useState, useForm } from 'react';

const Main = () => {
    const [miligramos, setMiligramos] = useState(0);
    const [mililitros, setMililitros] = useState(0);
    const [conversion, setConversion] = useState(0);
    const [kg, setKg] = useState(0);
    const [dosis, setDosis] = useState(null)
    const handleChange = (event) => {
        console.log({ value: event.target.value });
    }
    const calcularDosis = (event) => {
        const calculate = kg * mililitros * conversion / miligramos;
        console.log(calculate);
        setDosis(calculate)
        event.preventDefault();

    }
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Cálculo de dosis</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" >
                    <div>
                        <label for="mg" class="block text-sm font-medium leading-6 text-gray-900">Miligramos</label>
                        <div class="mt-2">
                            <input id="mg" name="mg" type="text" onChange={event => setMiligramos(event.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="ml" class="block text-sm font-medium leading-6 text-gray-900">Mililitros</label>
                        <div class="mt-2">
                            <input id="ml" name="ml" type="text" onChange={event => setMililitros(event.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="conversion" class="block text-sm font-medium leading-6 text-gray-900">Miligramos por Kg</label>
                        <div class="mt-2">
                            <input id="conversion" name="conversion" type="text" onChange={event => setConversion(event.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="kg" class="block text-sm font-medium leading-6 text-gray-900">Kg del paciente</label>
                        <div class="mt-2">
                            <input id="kg" name="kg" type="text" onChange={event => setKg(event.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div>
                        <button type="submit" onClick={calcularDosis} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Calcular</button>
                    </div>
                </form>
                {
                    !isNaN(dosis) && dosis ? (
                        <h3 class="mt-10 text-center text-lg text-gray-500">
                            La dosis indicada para {kg} kg es {dosis}
                        </h3>
                    ) : (
                        <h3 class="mt-10 text-center text-lg text-gray-500">
                            Asegurese de introducir sólo datos numéricos 
                        </h3>
                    )
                }

            </div>
        </div>
    )
}

export default Main