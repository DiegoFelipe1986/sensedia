import React from 'react';

const Header = () => {
    return (
        <>
            <div className="purple-header">
                <div className="container mx-auto ">
                    <div className="flex">
                        <div className="flex-col items-center m-6 text-white">
                            <div className="flex items-center">
                                <img src="/img/balon.png" className="mr-2 scale-80" alt="Icono de balón" />
                                <div className="flex-col items-center">
                                    <span className="font-bold">Fútbol</span> <br/>
                                    <span>Sociedad</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col items-center m-6 text-white">
                            <div className="flex items-center">
                                <img src="/img/level_icon.png" className="scale-80 mr-2 " alt="Icono de nivel" />
                                <div className="flex-col items-center">
                                    <span className="font-bold">Nivel</span> <br/>
                                    <span>Semiprofesional</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col items-center m-6 text-white">
                            <div className="flex items-center ">
                                <img src="/img/trophy.png" className="mr-2" alt="Icono de nivel" />
                                <div className="flex-col items-center">
                                    <span className="font-bold">Victorias</span> <br/>
                                    <span>345</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;