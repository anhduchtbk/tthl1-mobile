import React, { useState } from 'react';
import { ScrollView, type ScrollViewProps } from 'react-native';
import { Box } from '@/components/common/Layout/Box';

const OverflowScrollView = ({
  children,
  ...props
}: { children: React.ReactNode } & ScrollViewProps) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollContentHeight, setScrollContentHeight] = useState(0);

  return (
    <ScrollView
      onLayout={e => {
        setScrollHeight(e.nativeEvent.layout.height);
      }}
      scrollEnabled={scrollHeight < scrollContentHeight}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      <Box
        onLayout={e => {
          setScrollContentHeight(e.nativeEvent.layout.height);
        }}
      >
        {children}
      </Box>
    </ScrollView>
  );
};

export default OverflowScrollView;
