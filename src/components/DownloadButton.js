import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        window.open(
            'https://drive.google.com/file/d/1AxSbkZX15hDpdUhbRaEQoQrs4j2tvi8O/view?usp=sharing',
            '_blank'
        );
    };
    return (
        <button className='button' onClick={handleDownload}>
            Download CV
        </button>
    );
};

export default DownloadButton;