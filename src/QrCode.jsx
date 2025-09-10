import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';

function QrCode(props) {
    console.log(props);
    return <QRCodeSVG {...props}  />;
}

export default QrCode;