const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let arrayOfString = [];
  try {

    // create a promise
    const promise = new Promise((resolve, reject) => {
      fs.readFile(file1, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const json1 = JSON.parse(data);
          arrayOfString.push(json1.message.split(' ')[1]);
        }
      });

      fs.readFile(file2, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const json2 = JSON.parse(data);
          arrayOfString.push(json2[0].message.split(' ')[1]);
        }
      });

      fs.readFile(file3, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const json3 = JSON.parse(data);
          arrayOfString.push(json3[0].data.message.split(' ')[1]);
        }

        // resolve the promise
        resolve(arrayOfString);
      });
    });


    // if the promise is resolved, then call the callback function
    promise.then((data) => {
      fnCallback(null, data);
    }).catch((err) => {
      fnCallback(err, null);
    });
  } catch (err) {
    fnCallback(err, null);
  }

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
