(function(){
    var app = ons.bootstrap("myApp");
    var brandname = '';
    var categoryname = '';
    
    app.controller('ItemController', function($scope, $http, SharedData) {
        $http.get("itemdata.json").then(function(response){
            $scope.itemdata = response.data; 
        });
    });

    // コントローラ間でデータを共有するサービス
    app.factory('SharedData', function(){
        var sharedData = {};
        sharedData.data = {};
            
        // データを設定
        sharedData.set = function(data){
          sharedData.data = data;
        };
         
        // データを返す
        sharedData.get = function(){
            return sharedData.data;
        };
        return sharedData;
    });    
    
    
    function renderTable(data){   
        $(data).each(function(){
           var $name = $('<ons-list-item></ons-list-item>').text(this.name);
           var $str = $('<ons-list-item></ons-list-item>');
           
           $('#item-list').append('<ons-list-item></ons-list-item>');
           
           
//           $('<ons-list-item></ons-list-item>').append($name).appendto('#item-list');
           
        });
    }
    
    $(document).on('pageinit', '#item-page', function() {
        $('.item-header').text(brandname + ':' + categoryname);
        
//        $.getJSON("itemdata.json", function(data){
//            itemdata = data;
////            renderTable(data);
//            $(itemdata).each(function(){
//                
//                cnt++;
//                var $name = $('<td></td>').text(this.name);
//                $('#item-list').append($('<tr></tr>').append($name));
//                
//                $('<tr></tr>')
//                .append($name)
//                .appendto('#item-list');
//            });
//        });           
    });
    
    $(document).on('pageinit', '#category-page', function() {
        $('.category-header', this).text(brandname);
        $('.category',this).on('click', function() {
            categoryname = $('.category-name', this).text();
            myNavigator.pushPage('item.html');
        });
    });
    
    $(document).on('pageinit', '#bland-page', function() {
        $('.brand',this).on('click', function() {
            brandname = $('.brand-name', this).text();
            myNavigator.pushPage('category.html');
        });
        $('.brand-button',this).on('click', function() {
            brandname = $('.brand-name', this).text();
            myNavigator.pushPage('category.html');
        });
    });


})();

