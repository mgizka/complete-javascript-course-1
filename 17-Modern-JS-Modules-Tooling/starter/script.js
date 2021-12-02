('use strict');

function fetchDocument(doc) {
  fetch(doc)
    .then(response => {
      console.log(response);
      return response.blob();
    })
    .then(blob => URL.createObjectURL(blob))
    .then(function (data) {
      console.log(data);
      window.open(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const doc =
  'https://myopensearchbucket.s3.eu-central-1.amazonaws.com/TMF621_Trouble_Ticket_API_REST_Specification_R19.0.1.docx';
//`https://myopensearchbucket.s3.eu-central-1.amazonaws.com/Folders101.pdf`;
fetchDocument(doc);

window.open('https://docs.google.com/viewer?url=' + doc);
