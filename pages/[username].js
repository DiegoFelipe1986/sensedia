import { useRouter } from 'next/router';

const UserProfile = ({ user }) => {
  const router = useRouter();
  const { username } = router.query;

  if (!user) {
    return <p>Usuario no encontrado</p>;
  }


  return (

    <div>
      <h1>Perfil de Usuario: {username}</h1>
      <p>Nombre: {user.name}</p>
    </div>
  );
};

export default UserProfile;