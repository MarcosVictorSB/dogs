export const APi_URL = 'https://dogsapi.origamid.dev/json'

export const TOKEN_POST = (body) => {
  return {
    url: APi_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: APi_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    }
  }
}

export const USER_GET = (token) => {
  return {
    url: APi_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export const USER_POST = (body) => {
  return {
    url: APi_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}


export const PHOTO_POST = (formData, token) => {
  return {
    url: APi_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      body: formData
    }
  }
}

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${APi_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      caches: 'no-store'
    }
  }
}

export const PHOTO_GET = (id) => {
  return {
    url: `${APi_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      caches: 'no-store'
    }
  }
}

export const COMMENT_POST = (id, body) => {
  console.log({
    url: `${APi_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body)
    }
  })
  return {
    url: `${APi_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body)
    }
  }
}



