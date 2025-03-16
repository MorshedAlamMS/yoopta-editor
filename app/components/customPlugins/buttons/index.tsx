import { YooptaPlugin, PluginElementRenderProps } from '@yoopta/editor';
import { MousePointerClickIcon } from 'lucide-react';
import { ButtonComponent } from './ButtonsComponent';


const ButtonPlugin = new YooptaPlugin({
  type: 'Button',
  elements: {
    button: {
      render: (props: PluginElementRenderProps) => <ButtonComponent {...props} />, // ✅ Pass correct props
      asRoot: true,
      props: {
        label: 'Click Me',
        action: null, // URL or function
        style: 'default', // "default", "primary", "secondary"
      },
    },
  },

  options: {
    display: {
      title: 'Button',
      icon: <MousePointerClickIcon size={24} />,
    },
    shortcuts: ['button'],
  },

  parsers: {
    html: {
      deserialize: {
        nodeNames: ['BUTTON'],
      },
    },
  },
});

export { ButtonPlugin };
