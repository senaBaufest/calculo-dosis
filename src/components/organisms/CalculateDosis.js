import React, { useState, } from 'react';
import Button from './../atoms/Button';
import FormGroup from './../molecules/FormGroup';
import Swal from 'sweetalert2';

const CalculateDosis = () => {
    const [miligramos, setMiligramos] = useState('');
    const [mililitros, setMililitros] = useState('');
    const [conversion, setConversion] = useState('');
    const [kg, setKg] = useState('');
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
        } else {
            const calculate = kg * mililitros * conversion / miligramos;
            if (isNaN(calculate)) {
                setError(true);
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Asegurese de introducir solo datos numéricos',
                })
            } else {
                setError(false);
                setDosis(calculate)

            }
        }
        event.preventDefault();

    }
    return (
        <>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="./logoDose.png"
                        alt="senasoft logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Cálculo de dosis
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <FormGroup
                                label="Miligramos"
                                id="miligramos"
                                name="miligramos"
                                type="text"
                                action={setMiligramos}
                                value={miligramos}
                                classes="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                        <div>
                            <FormGroup
                                label="Mililitros"
                                id="mililitros"
                                name="mililitros"
                                type="text"
                                action={setMililitros}
                                value={mililitros}
                                classes="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <FormGroup
                                label="Miligramos por Kg"
                                id="conversion"
                                name="conversion"
                                type="text"
                                action={setConversion}
                                value={conversion}
                                classes="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div>
                            <FormGroup
                                label="Kilogramos"
                                id="kg"
                                name="kg"
                                type="text"
                                action={setKg}
                                value={kg}
                                classes="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                        <div>
                            <Button
                                type='submit'
                                action={calcularDosis}
                                classes="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                text="Calcular"
                            />
                            <Button
                                type='button'
                                action={clearForm}
                                classes="w-full justify-center rounded-md mt-5 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                text="Limpiar"
                            />
                            {/* <button type="button" class=" w-5/12 justify-center rounded-md mt-5 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Favoritos</button> */}
                        </div>
                    </form>

                    {
                        dosis ? (
                            <h3 className="mt-10 text-center text-lg text-gray-500">
                                La dosis indicada para {kg} kg es {dosis} ml
                            </h3>
                        ) : (
                            <h3 className="mt-10 text-center text-lg text-gray-500">
                                Introduzca los valores del medicamento requerido para calcular la dosificación
                            </h3>
                        )
                    }
                </div>
        </>
    )
}

export default CalculateDosis;