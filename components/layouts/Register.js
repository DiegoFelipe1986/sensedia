import React from 'react';
import Link from 'next/link';

import useValidation from '@/hooks/useValidation';
import validateCreateUser from '@/validating/validateCreateUser';
import { postData } from '../../utils/api';

const INITIAL_STATE = {
    nickName: '',
    name: '',
    email: '',
    password: ''
}

const Register = () => {

    const { values, errors, submitForm, handleSubmit, handleChange } = useValidation(INITIAL_STATE, validateCreateUser, createUser);

    const { nickName, name, email, password } = values;

    async function createUser() {
        try {
            const response = await postData('users', values);
            console.log('Usuario creado:', response);
            alert('Usuario creado con éxito');
            resetForm();
            window.location.reload();
        } catch (error) {
            console.error('Error al crear usuario:', error.message);
            alert('Hubo un error al crear el usuario. Por favor, inténtalo de nuevo.');
        }
    }

    const resetForm = () => {
        values.nickName = '';
        values.name = '';
        values.email = '';
        values.password = '';
        console.log('borrar')
    };
    const apiUrl = process.env.API_BASE_URL;
    console.log(apiUrl);


    return (
        <>
            <div className="container mx-auto mt-5 mb-5">
                <h1 className="font-bold text-center">Registro de nuevos usuarios</h1>

                <p className="mt-5 mb-5 banner-text">¡Únete a nuestra comunidad y registra tu cuenta hoy mismo para acceder a todas las increíbles funcionalidades que ofrecemos! Al registrarte, podrás aprovechar al máximo nuestra plataforma, conectarte con otros usuarios, compartir tus experiencias y participar en emocionantes discusiones. ¡No te pierdas la oportunidad de formar parte de esta comunidad vibrante! ¡Regístrate ahora y comienza tu viaje con nosotros!</p>
            </div>

            <div className="container mx-auto form-register mb-5">
                <h1>Registro</h1>

                <form
                    onSubmit={handleSubmit}

                >
                    <div className="flex">
                        <div className="flex-1 p-4">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="nickName"
                                    name="nickName"
                                    className="form-input"
                                    placeholder="Nombre de usuario"
                                    value={nickName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    placeholder="Nombre completo"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="Correo Electrónico"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Días de la Semana</label>
                                <div className="flex flex-wrap">
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="lunes" className="mr-2" />
                                            Lun
                                        </label>
                                    </div>
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="martes" className="mr-2" />
                                            Mart
                                        </label>
                                    </div>
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="miércoles" className="mr-2" />
                                            Miérc
                                        </label>
                                    </div>
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="jueves" className="mr-2" />
                                            Juev
                                        </label>
                                    </div>
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="viernes" className="mr-2" />
                                            Vier
                                        </label>
                                    </div>
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="sábado" className="mr-2" />
                                            Sab
                                        </label>
                                    </div>
                                    <div className="w-1/4">
                                        <label className="flex items-center">
                                            <input type="checkbox" name="days[]" value="domingo" className="mr-2" />
                                            Dom
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {errors.nickName && <p className="errors-message">{errors.nickName}</p>}
                    {errors.name && <p className="errors-message">{errors.name}</p>}
                    {errors.email && <p className="errors-message">{errors.email}</p>}
                    {errors.password && <p className="errors-message">{errors.password}</p>}
                    <div>
                        <button
                            className="primary-button"
                        >
                            Registro
                        </button>
                        <button
                            type="button"
                            className="secondary-button"
                            onClick={resetForm}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
            <div className="container mx-auto mt-5 mb-5">
                <button className="ml-2 primary-button text-white p-2">
                    <Link href="/">
                        <p>Volver al inicio</p>
                    </Link>
                </button>
            </div>
        </>);
}

export default Register;