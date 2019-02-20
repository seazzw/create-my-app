const headerMenuConfig = [
    {
        name: '首页',
        path: '/',
        external: false,
        newWindow: true,
        icon: 'smile'
    },
    {
        name: '模块A',
        path: '',
        external: false,
        newWindow: true,
        icon: 'smile',
        children: [
            { name: '子菜单', path: '/module/a' }
        ]
    },
    {
        name: '模块B',
        path: '/module/b',
        external: false,
        newWindow: true,
        icon: 'smile'

    }
];
const asideMenuConfig = [
    {
        name: '目录一',
        path: '/home',
        icon: 'home2',
        children: [
            { name: '直播', path: '/home/live' },
            { name: '监控详情', path: '/home/monitor' },
            { name: '无线接入', path: '/home/mobile' }
        ]
    },
    {
        name: '目录一',
        path: '/home',
        icon: 'home2',
        children: [
            { name: '直播', path: '/home/live' },
            { name: '监控详情', path: '/home/monitor' },
            { name: '无线接入', path: '/home/mobile' }
        ]
    }
];
export { headerMenuConfig, asideMenuConfig };
