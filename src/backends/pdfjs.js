export default class PDFJs {
    init = (source, element) => {
        const iframe = document.createElement('iframe');
        iframe.src = `/web/viewer.html?file=${source}`;
        iframe.width = '100%';
        iframe.height = '10%';
        element.appendChild(iframe);
    }
}