const SUCCESS_STATUS = [200, 201];
const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`,
  };
};

// Login
export const userLogin = async (URL, data = {}, options = {}) => {
  if (!URL && Object.keys(data).length) return null;
  try {
    const _options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    };
    const res = await fetch(URL, _options)
      .then((response) => {
        if (!SUCCESS_STATUS.includes(response.status)) {
          return {
            status: response.status,
            error: response.statusText,
          };
        }
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    return res;
  } catch (error) {
    return error;
  }
};

// POST
export const createRecord = async (
  URL = "",
  data = {},
  isUser = false,
  options = {}
) => {
  if (!URL && Object.keys(data).length) return null;
  try {
    const headers = isUser
      ? {
          "Content-Type": "application/json",
        }
      : getHeaders();
    const _options = {
      ...options,
      headers,
      method: "POST",
      body: JSON.stringify(data),
    };
    const res = await fetch(URL, _options)
      .then((response) => {
        if (!SUCCESS_STATUS.includes(response.status)) {
          return {
            status: response.status,
            error: response.statusText,
          };
        }
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    return res;
  } catch (error) {
    return error;
  }
};

// GET
export const getRecords = async (URL = "", options = {}) => {
  if (!URL) return null;
  try {
    const _options = { headers: getHeaders(), ...options, method: "GET" };
    const res = await fetch(URL, _options)
      .then((response) => {
        if (!SUCCESS_STATUS.includes(response.status)) {
          return {
            status: response.status,
            error: response.statusText,
          };
        }
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    return res;
  } catch (error) {
    return error;
  }
};

// GET
export const getRecord = async (URL = "", options = {}) => {
  if (!URL) return null;
  try {
    const _options = { headers: getHeaders(), ...options, method: "GET" };
    const res = await fetch(URL, _options)
      .then((response) => {
        if (!SUCCESS_STATUS.includes(response.status)) {
          return {
            status: response.status,
            error: response.statusText,
          };
        }
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    return res;
  } catch (error) {
    return error;
  }
};

// PUT
export const updateRecord = async (URL = "", data = {}, options = {}) => {
  if (!URL && Object.keys(data).length) return null;
  try {
    const _options = {
      ...options,
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    };
    const res = await fetch(URL, _options)
      .then((response) => {
        if (!SUCCESS_STATUS.includes(response.status)) {
          return {
            status: response.status,
            error: response.statusText,
          };
        }
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    return res;
  } catch (error) {
    return error;
  }
};

// DELETE
export const deleteRecord = async (URL = "", options = {}) => {
  if (!URL) return null;
  try {
    const _options = {
      ...options,
      method: "DELETE",
      headers: getHeaders(),
    };
    const res = await fetch(URL, _options)
      .then((response) => {
        if (!SUCCESS_STATUS.includes(response.status)) {
          return {
            status: response.status,
            error: response.statusText,
          };
        }
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    return res;
  } catch (error) {
    return error;
  }
};
