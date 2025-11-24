export const getData = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if(!response.ok) {
      throw new Error('Сервер не может обработать запрос');
    }
    return response.json();
  });
