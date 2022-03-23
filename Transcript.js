function transcription(file, lang) {
    const { Deepgram } = require('@deepgram/sdk');
    const {jsPDF}= require('jspdf');
    const fs= require('fs');
    const mime= require('mime-types');

    const deepGram= new Deepgram('4f302e1890d12d28aa93deb2772a3d5978066691');
        
    const audio= fs.readFileSync(file);

    source= { 
        buffer: audio,
        mimetype: mime.extension(file),
    }
        
    deepGram.transcription.preRecorded(source, {
        punctuate: true,
        numerals: true,
        language: lang
    }).then((res) => {
        const doc= new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });
        const date= new Date();
        doc.text('Created: ' + date , 10, 10);
        var split= doc.splitTextToSize(JSON.stringify(res.results.channels[0].alternatives[0].transcript), 50);
        doc.text(split, 20, 20);
        doc.save('Rec' + date.getTime() +date.getDate() + date.getMonth() + date.getFullYear() + '.pdf');
    }).catch((err) => {
        alert(err);
    });
}
