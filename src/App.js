import React, { Component } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJSBackend from './backends/pdfjs';

class App extends Component {
  render() {
    let url = 'https://cors-anywhere.herokuapp.com/https://hb.tinkerfcu.org/Online/tinkerdisclosureservice.aspx?esignhb.pdf/https://hb.tinkerfcu.org/Online/tinkerdisclosureservice.aspx?esignhb.pdf';
    let encodedURI = encodeURI(url);
    return (
      <div className="App">
        <PDFViewer
          backend={PDFJSBackend}
          src={encodedURI}
        />
      </div>
    );
  }
}

export default App;