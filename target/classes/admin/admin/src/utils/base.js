const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanwangshangshangpu/",
            name: "xiaoyuanwangshangshangpu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanwangshangshangpu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园网上店铺"
        } 
    }
}
export default base
