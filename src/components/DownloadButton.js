import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        window.open(
            'https://drive.google.com/file/d/1vLw74EgxSFI4j6X9HHGGwCoTEPonyUzW/view?usp=sharing',
            '_blank'
        );
    };
    return (
        <button onClick={handleDownload}>
            Download CV
        </button>
    );
};

export default DownloadButton;