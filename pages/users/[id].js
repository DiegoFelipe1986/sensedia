// pages/user/[username].js
import Layout from '@/components/layouts/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const response = await fetch(`http://localhost:8080/api/v1/users/${id}`);
        const data = await response.json();

        setUserData(data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error.message);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  if (!id) {
    return <p>Cargando...</p>;
  }

  if (!userData || Object.keys(userData).length === 0) {
    return (
      <Layout>
        <div className="container mx-auto mt-5 mb-5">
          <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
            <img className="w-full h-60 object-cover" src="/img/user_image.jpeg" alt="Imagen de usuario" />
            <div className="p-4">
              <p className="text-gray-600">Usuario no encontrado</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto mt-5 mb-5">
        <h1 className="font-bold text-center">Bienvenido al perfil del usuario</h1>
        <p className="mt-5 mb-5 banner-text">
          ¡Únete a nuestra comunidad y registra tu cuenta hoy mismo para acceder a todas las increíbles funcionalidades que ofrecemos! Al registrarte, podrás aprovechar al máximo nuestra plataforma, conectarte con otros usuarios, compartir tus experiencias y participar en emocionantes discusiones. ¡No te pierdas la oportunidad de formar parte de esta comunidad vibrante! ¡Regístrate ahora y comienza tu viaje con nosotros!
        </p>
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <img className="w-full h-60 object-cover" src="/img/user_image.jpeg" alt="Imagen de usuario" />
          <div className="p-4">
            <p className="text-gray-600 font-bold">Nombre de usuario:</p>
            <p className="text-gray-600">{!userData.name ? <p>Usuario no encontrado</p> : <p>{userData.name}</p>}</p>
            <p className="text-gray-600 font-bold">Correo Electrónico:</p>
            <p className="text-gray-600">{!userData.email ? <p>Email no encontrado</p> : <p>{userData.email}</p>}</p>
          </div>
        </div>
        <div className="container mx-auto mt-5 mb-5">
          <button className="ml-2 primary-button text-white p-2">
            <Link href="/">
              <p>Volver al inicio</p>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
