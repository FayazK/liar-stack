import './bootstrap';
import '../css/app.css';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ConfigProvider} from "antd";
import { RecoilRoot } from 'recoil'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(<ConfigProvider
            theme={{
                token:{
                    fontFamily:'Work Sans, sans-serif'
                }
            }}
        >
            <RecoilRoot>
                <App {...props} />
            </RecoilRoot>
        </ConfigProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
