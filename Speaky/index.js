const { Deepgram } = require('@deepgram/sdk');

const deepGram= new Deepgram('4f302e1890d12d28aa93deb2772a3d5978066691');

// if is local  --> do sth || if is from the web  --> do sth

const fileSource= {url : 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav'};

deepGram.transcription.preRecorded(fileSource, {
    punctuate: true,
  }).then((res) => {
      console.dir(res, {depth: null});
  }).catch((err) => {
      console.log(err);
  });

