import { storiesOf } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/atoms/button';
/*storiesOf('Button', module)
 .add('Default', () => <Button> Default </Button>)
 .add('secondary', () => <Button variant="secondary"> Secondary </Button>)
 .add('Inverted', () => <Button inverted={true} color="green"> Inverted </Button>)
 .add('Disabled', () => <Button disabled={true} onClick={() => console.log('click')}> Disabled </Button>)

*/

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;
  
export const Default: ComponentStory<typeof Button> = () => <Button>Default</Button>;
export const Variant: ComponentStory<typeof Button> = () => 
    <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
    </>
export const Size: ComponentStory<typeof Button> = () => 
    <>
        <Button size="mini">Mini</Button>
        <Button size="normal">Normal</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
    </>
export const Inverted: ComponentStory<typeof Button> = () => 
    <>
        <Button inverted={true} color="green">Inverted</Button>
        <Button inverted={true} color="red">Inverted</Button>
        <Button inverted={true} color="#f5h145">Inverted</Button>
    </>
export const Loading: ComponentStory<typeof Button> = () => 
    <>
        <Button loading={true}>Success loading</Button>
    </>
export const Corner: ComponentStory<typeof Button> = () => 
    <>
        <Button rounded="small" >Small</Button>
        <Button rounded="medium" >Medium</Button>
        <Button rounded="large" >Large</Button>
    </>
export const Disabled: ComponentStory<typeof Button> = () => <Button disabled={true}>Disabled</Button>;
