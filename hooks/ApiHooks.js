import { useEffect, useState } from 'react';
import { doFetch } from '../utils/http';
import { baseUrl } from '../utils/variables';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    // https://scriptverse.academy/tutorials/js-self-invoking-functions.html
    (async () => {
      setMediaArray(await loadMedia());
    })();
  }, []);

  const loadMedia = async () => {
    try {
      const mediaIlmanThumbnailia = await doFetch(baseUrl + 'media');
      const kaikkiTiedot = mediaIlmanThumbnailia.map(async (media) => {
        return await loadSingleMedia(media.file_id);
      });
      return Promise.all(kaikkiTiedot);
    } catch (e) {
      console.log('loadMedia', e.message);
    }
  };

  const loadSingleMedia = async (id) => {
    try {
      const tiedosto = await doFetch(baseUrl + 'media/' + id);
      return tiedosto;
    } catch (e) {
      console.log('loadSingleMedia', e.message);
      return {};
    }
  };

  return { mediaArray, loadMedia, loadSingleMedia };
};

const useLogin = () => {
  const login = async (userCredentials) => {
    const requestOptions = {
      method: 'POST',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: userCredentials,
    };
    try {
      const loginResponse = await doFetch(baseUrl + 'login', requestOptions);
      return loginResponse;
    } catch (error) {
      console.log('login error', error.message);
    }
  };
  return { login };
};

const useUser = () => {
  const checkToken = async (token) => {
    const options = {
      method: 'GET',
      headers: { 'x-access-token': token },
    };
    try {
      const userInfo = doFetch(baseUrl + 'users/user', options);
      return userInfo;
    } catch (error) {
      console.log('checkToken error', error);
    }
  };

  const register = async (token) => {
    // https://media.mw.metropolia.fi/wbma/docs/#api-User-PostUser
  };

  return { checkToken, register };
};

export { useMedia, useLogin, useUser };