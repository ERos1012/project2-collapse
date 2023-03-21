import { html } from 'lit';
import '../src/project2-collapse.js';

export default {
  title: 'Project2Collapse',
  component: 'project2-collapse',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project2-collapse
      style="--project2-collapse-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project2-collapse>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
