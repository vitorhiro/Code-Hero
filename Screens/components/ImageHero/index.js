import React from 'react';

import { Image } from 'react-native';

import { ImageArea } from './styles';

function ImageHero({ thumbnail, size, width, height }) {
  const imageSize = {
    small: 'portrait_small',
    medium: 'portrait_medium',
    large: 'portrait_xlarge',
  };
  const uri = `${thumbnail.path}/${imageSize[size]}.${thumbnail.extension}`;
  return (
    <ImageArea width={width} height={height}>
      <Image style={{ width: '100%', height: '100%' }} source={{ uri }} />
    </ImageArea>
  );
}

export default ImageHero;
