const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Hubo un error en la solicitud');
    }

    return data;
  } catch (error) {
    console.error('Error de red:', error.message);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Hubo un error en la solicitud');
      }

      return responseData;
    } catch (error) {
      console.error('Error de red:', error.message);
      throw error;
    }
  };

  export const deleteData = async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',

        },
      });

      if (!response.ok) {
        throw new Error(`Error al realizar la solicitud DELETE: ${response.status} ${response.statusText}`);
      }


      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la solicitud DELETE:', error.message);
      throw error;
    }
  };

  export const getDataById = async (id) => {
    const apiUrl = `${API_BASE_URL}/${id}`;

    try {

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },
      });

      if (!response.ok) {
        throw new Error(`Error al realizar la solicitud GET: ${response.status} ${response.statusText}`);
      }


      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la solicitud GET por ID:', error.message);
      throw error;
    }
  };