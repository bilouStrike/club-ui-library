import { storiesOf } from '@storybook/react';
import Heading from '../components/atoms/heading';

storiesOf('Heading', module)
 .add('H1', () => <Heading level="h1"> Heading 01 </Heading>)
 .add('H2', () => <Heading level="h2"> Heading 02 </Heading>)
 .add('H3', () => <Heading level="h3"> Heading 03 </Heading>)
 .add('H4', () => <Heading level="h4"> Heading 04 </Heading>)
 .add('H5', () => <Heading level="h5"> Heading 05 </Heading>)
 .add('H6', () => <Heading level="h6"> Heading 06 </Heading>)
