export default function getFullResponseFromAPI(success) {
  const promise = new Promise((res, rej) => {
    if (success) {
      res({ status: 200, body: 'Success' });
    } else {
      rej(Error('The fake API is not working currently'));
    }
  });
  return promise;
}
