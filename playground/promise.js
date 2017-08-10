var somePromise = new Promise((resolve, reject) => {
  setTimeout(()=> {
      resolve('hey. it worked');
      reject('unable to fulffil promise');
  }, 2500);
});

somePromise.then((message) => {
  console.log('sucess: ', message);
}, (errorMessage) => {
  console.log('error: ', errorMessage);
});
