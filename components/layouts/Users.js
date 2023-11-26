import React, { useState, useEffect } from 'react';
import { fetchData, deleteData } from '../../utils/api';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const [version, setVersion] = useState(0);
  const [hoveredUserId, setHoveredUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await fetchData('users');
        const postData = await fetchData('posts');
        const usersWithInfo = userData.users.map((user) => ({
          ...user,
          weekdays: getRandomWeekdays(),
          posts: postData.posts.filter((post) => post.user_id === user.id),
        }));
        setUsers(usersWithInfo);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    };


    fetchUsers();
  }, [version]);

  const handleSearch = async () => {
    try {
      const data = await fetchData(`users?search=${searchTerm}`);
      const postData = await fetchData('posts');
      const usersWithInfo = data.users.map((user) => ({
        ...user,
        weekdays: getRandomWeekdays(),
        posts: postData.posts.filter((post) => post.user_id === user.id),
      }));
      setUsers(usersWithInfo);
    } catch (error) {
      console.error('Error al buscar usuarios:', error.message);
    }
  };

  const getRandomWeekdays = () => {
    const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const numberOfDays = Math.floor(Math.random() * weekdays.length) + 1;
    const selectedDays = [];

    for (let i = 0; i < numberOfDays; i++) {
      const randomIndex = Math.floor(Math.random() * weekdays.length);
      const selectedDay = weekdays[randomIndex];
      selectedDays.push(selectedDay);
      weekdays.splice(randomIndex, 1);
    }

    return selectedDays;
  };


  const handleDelete = async (userId) => {
    try {

      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');

      if (!confirmDelete) {

        return;
      }

      await deleteData(`users/${userId}`);
      setVersion((prevVersion) => prevVersion + 1);
    } catch (error) {
      console.error('Error al eliminar usuario:', error.message);
    }
  };


  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <h2 className="font-bold mb-5 text-2xl">Usuarios</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2"
          />
          <button onClick={handleSearch} className="ml-2 pagination-button text-white p-2">
            Buscar
          </button>
          <button className="ml-2 primary-button text-white p-2">
            <Link href="/users/new">
              Nuevo usuario
            </Link>
          </button>
        </div>
        <div className="overflow-x-auto" style={{ minHeight: '400px' }}>
          <table className="min-w-full bg-white border border-gray-300" style={{ maxHeight: '400px' }}>
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Nombre</th>
                <th className="py-2 px-4 border-b text-left">Correo Electrónico</th>
                <th className="py-2 px-4 border-b text-left">Días de la Semana</th>
                <th className="py-2 px-4 border-b text-left">Número de Posts</th>
                <th className="py-2 px-4 border-b">Borrar</th>
                <th className="py-2 px-4 border-b">Ver</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers.map((user) => (
                <tr key={user.id} onMouseEnter={() => setHoveredUserId(user.id)} onMouseLeave={() => setHoveredUserId(null)}>
                  <td className="py-2 px-4 border-b text-gray-500"><span className="font-bold">{user.name}</span></td>
                  <td className="py-2 px-4 border-b text-gray-500">{user.email}</td>
                  <td className="py-2 px-4 border-b text-gray-500">{user.weekdays.join(', ')}</td>
                  <td className="py-2 px-4 border-b text-gray-500">{user.posts?.length}</td>
                  <td className="py-2 px-4 border-b text-gray-500">
                    {hoveredUserId === user.id && (
                      <button onClick={() => handleDelete(user.id)} className="pagination-button text-white p-2">
                        <img src="/img/trash_icon.png" className="icon-trash"></img>
                      </button>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-500">
                    <Link href={`/users/${user.id}`}>
                      <img src="/img/user_image.jpeg" className="icon"></img>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            pageClassName={'mx-2'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination flex justify-center items-center mt-5'}
            previousLinkClassName={'pagination-button text-white p-2 rounded-l-md'}
            nextLinkClassName={'pagination-button text-white p-2 rounded-r-md'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active bg-gray-300'}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
