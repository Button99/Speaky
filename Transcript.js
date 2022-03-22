function transcription(file) {
    const { Deepgram } = require('@deepgram/sdk');
    const fs= require('fs');

    const deepGram= new Deepgram('4f302e1890d12d28aa93deb2772a3d5978066691');
        
    const audio= fs.readFileSync(file);

    source= { 
        buffer: audio,
        mimetype: 'wav'
    }
        
    deepGram.transcription.preRecorded(source, {
        punctuate: true
    }).then((res) => {
        fs.writeFileSync('Text.txt', JSON.stringify(res), (err) => {
        if(err) throw err;
        });
    }).catch((err) => {
        alert(err);
    });
    }

// const deepGram= new Deepgram('4f302e1890d12d28aa93deb2772a3d5978066691');

// // if is local  --> do sth || if is from the web  --> do sth

// const fileSource= {url : 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav'};


// // Local file
// const file= 'Test2.wav';


// const audio= fs.readFileSync(file);

// source = {
//     buffer: audio,
//     mimetype: 'wav'
// }

// deepGram.transcription.preRecorded(source, {
//     punctuate: true,
//   }).then((res) => {
//       fs.writeFileSync('Response.txt', JSON.stringify(res), (err) => {
//           if (err) throw err;
//       });

//       console.dir(res, {depth: null});
//   }).catch((err) => {
//       console.log(err);
//   });
// // deepGram.transcription.preRecorded(fileSource, {
// //     punctuate: true,
// //   }).then((res) => {
// //       console.dir(res, {depth: null});
// //   }).catch((err) => {
// //       console.log(err);
// //   });
