// GitHub Cloud Drive 示例代码

function greet(name) {
    console.log(`Hello, ${name}!`);
    console.log('欢迎使用 GitHub 云盘');
}

function listFeatures() {
    const features = [
        '文件浏览',
        '文件下载',
        '自动更新',
        '响应式设计'
    ];
    
    console.log('功能列表：');
    features.forEach((feature, index) => {
        console.log(`${index + 1}. ${feature}`);
    });
}

// 运行
greet('GitHub Cloud Drive');
listFeatures();