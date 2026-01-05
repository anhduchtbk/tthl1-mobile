import { colors } from '@/theme/colors';
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
    <Image
      source={{ uri }}
      style={{
        width,
        height,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: colors.white,
      }}
      resizeMode="cover"
    />
  );
};

export default AutoWidthImage;
