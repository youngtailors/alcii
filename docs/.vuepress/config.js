module.exports = {
    title: 'Algorithm With C++',
    description: 'Learning Algorithm With C++',
    base: '/alcii/',
    plugins: [
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                },
            },
        ],
    ],
    themeConfig: {
        sidebar: [
            {
                title: 'Giới thiệu',
                path: '/',
                children: [
                    {
                        title: 'Tác giả',
                        path: '/introdution/intro',
                    },
                ],
            },
            {
                title: 'DSAP Textbook',
                path: '/algorithm-and-data-structure',
                children: [
                    {
                        title: 'PHẦN 1. BÀI TOÁN LIỆT KÊ',
                        path: '/algorithm-and-data-structure/chap-one/chapone',
                        children: [
                            {
                                title:
                                    '§1. NHẮC LẠI MỘT SỐ KIẾN THỨC ĐẠI SỐ TỔ HỢP',
                                path:
                                    '/algorithm-and-data-structure/chap-one/lessonone',
                            },
                            {
                                title: '§2. PHƯƠNG PHÁP SINH (GENERATION)',
                                path:
                                    '/algorithm-and-data-structure/chap-one/lessontwo',
                            },
                        ],
                    },
                ],
            },
        ],
    },
}
