import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        window.open(
            'https://drive.google.com/file/d/11P7IBlJlkw0sxQEjgv4fW-bOJ2uhVxxE/view?usp=drive_link',
            '_blank'
        );
    };

    return (
        <button onClick={handleDownload}>
            Download Resume
        </button>
    );
};

export default DownloadButton;