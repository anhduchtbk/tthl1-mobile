import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

type AutoWidthImageProps = {
  uri: string;
  height: number;
};

const AutoWidthImage = ({ uri, height }: AutoWidthImageProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Image.getSize(uri, (w, h) => {
      const ratio = w / h;
      setWidth(height * ratio);
    });
  }, [uri, height]);

  if (!width) return null;

  return (
    <Image source={{ uri }} style={{ width, height }} resizeMode="contain" />
  );
};

export default AutoWidthImage;
