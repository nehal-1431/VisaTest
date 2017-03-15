
var visaApp = angular.module('visaApp', ['ngAria']);

var primaryNavCtrl = function () {  
                    
                    var self = this;
                    self.SCREEN_WIDTH = 450;
                    self.navObj = {
                         menuTitle1 : "Pay With Visa",
                         menuTitle2 : "Partner With Us",
                         menuTitle3 : "Run Your Business",
                         menuTitle4 : "Visa Everywhere"       
                    };
           
                    $("#primary-nav ul > li").click(function(event){
                        var position = $(this).position().left;
                        var width = Math.round($(this).width()/2) - 5;
                        var arrowPos = position + width;
                        $('#marker').css('left', arrowPos);
                      
                          if($(window).innerWidth() <= self.SCREEN_WIDTH) {
                                $('#marker').css('visibility', 'hidden');                              
                          }
                          else
                          {
                                $('#marker').css('visibility', 'visible');                            
                          }
                         event.preventDefault();
                      });
    }

 visaApp.component('primaryNavComponent', {
      bindings: {
          
      },
      controllerAs:"model",
      templateUrl : '../pages/primaryNavbar.html',
      controller: primaryNavCtrl,
  });