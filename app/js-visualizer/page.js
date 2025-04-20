import JsVisualizerLayout from '@/layouts/JsVisualizer';

export const metadata = {
  title: 'JavaScript Visualizer || TheHTTP',
  description:
    'Visualize JavaScript execution, call stack, and task queue in real-time',
  keywords:
    'JavaScript, Visualizer, Call Stack, Task Queue, Real-Time, Debugging, Ashutosh Panda, TheHTTP, Execution Context, Event Loop, Microtasks, Macrotasks, JavaScript Visualizer, loupe',
  author: 'Ashutosh Panda (ashutosh4336) || TheHTTP',
  robots: 'index, follow',
  icons: {
    icon: '/js.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const JsVisualizer = () => {
  return <JsVisualizerLayout />;
};

export default JsVisualizer;
