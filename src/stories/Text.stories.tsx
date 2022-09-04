import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../components/atoms/text';

storiesOf('Text', module)
 .add('simple text', () =><Text size={16}> Text component </Text>);