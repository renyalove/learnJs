/*��װ���ߺ���*/
window.lt = {};
/*��ȡ��ַ������*/
lt.getUrlParams = function(){
    /*�õ���get��ʽ���ݵĵ�ַ�������� ?key=1&name=10*/
    var search = location.search;
    /*��Ҫ���ַ���ת���ɶ���  ���ڿ���ʹ��*/
    var params = {};
    /*����У������в���*/
    /*û���ʺž�û�в���*/
    if(search.indexOf('?') == 0){
        search = search.substr(1);
        var arr = search.split('&');
        for(var i = 0 ; i < arr.length ; i++){
            /*itemArr name=10  ----> [name,10]*/
            var itemArr = arr[i].split('=');
            params[itemArr[0]] = itemArr[1];
        }
    }
    return params;
}