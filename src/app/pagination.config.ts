export class PaginationConfig {
    public main :any = {
        maxSize: void 0,
        itemsPerpage: 10,
        boundaryLinks: true,
        directionLinks: true,
        firstText:'首页',
        previousText:'上一页',
        nextText:'下一页',
        lastText:'尾页',
        pageBtnClass:'',
        rotate: true
    };
    public pager :any = {
        previousPerPage: 15,
        previousText:'<< 上一页',
        nextText:'下一页 >>',
        pageBtnClass:'',
        align:true
    };
}

export function PaginationConfigFactory(){
    return new PaginationConfig();
}