import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import style from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, className, alt, fallback = images.noImage, ...props }, ref) => {
    const [fallbackSrc, setFallbackSrc] = useState('');

    const handleError = () => {
        setFallbackSrc(fallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallbackSrc || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

forwardRef.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
