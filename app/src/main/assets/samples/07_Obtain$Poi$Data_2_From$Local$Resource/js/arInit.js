AR.logger.activateDebugMode();
AR.logger.info("activate logger ...");
var searchInit=false;
var placeSearch;
AMap.service('AMap.PlaceSearch',function(){//回调函数
    //实例化PlaceSearch
    placeSearch= new AMap.PlaceSearch();
    //TODO: 使用placeSearch对象调用关键字搜索的功能
    searchInit=true;
    AR.logger.info("AMap.PlaceSearch init finish...");
});
AR.logger.info("activate logger ...");