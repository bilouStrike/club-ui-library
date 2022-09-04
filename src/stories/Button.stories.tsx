import { storiesOf } from '@storybook/react';
import Button from '../components/atoms/button';

storiesOf('Button', module)
 .add('Button 01', () => <Button color="primary" loading={true}> Heading 01 </Button>)
 .add('Button 02', () => <Button size="mini" color="secondary" onClick={() => console.log('click')}> Heading 02 </Button>)
 
