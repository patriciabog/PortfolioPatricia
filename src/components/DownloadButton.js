import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        window.open(
            'https://drive.google.com/file/d/1O_UG32RE-MuI5Icr0NqIbIA952P2N_Wh/view?usp=sharing',
            '_blank'
        );
    };
    return (
        <div className='downBtn'>
            <h4 className='downBtn__title'>Download my CV here!</h4>
            <button className='button' onClick={handleDownload}>
                <i className="fa-solid fa-circle-down"></i>
            </button>
        </div>
       
    );
};

export default DownloadButton;