$(document).ready(function(){
   
$("#cpf").mask("000.000.000-00");
$("#celular").mask("(00)00000-0000");
$("#dataN").mask("00/00/0000");

$("#cep").focusout(function(event){
  event.preventDefault();
        var cep = $("#cep").val();
        cep = cep.replace("-", "");

        var urlStr = "https://api.postmon.com.br/v1/cep/"+ cep;

        $.ajax({
            url: urlStr,
            method:"get",
            dataType: "json",
            success: function(data){
                    $("#bairro").val(data.bairro);
                    $("#logradouro").val(data.logradouro);
                    $("#uf").val(data.estado);
                    $("#cidade").val(data.cidade);

            }
          });
        })

        
       
    });


function enviaDados(){
  var array = new Array();
  array  = $('.needs-validation').serializeArray();
  var bio = $("#txt").val();



  for (let index = 0; index < array.length; index++) {
    const element = array[index];
 if(element.value){
  console.log("Dados corretos "+ element.value);
  
 }
     
    
}
if(bio)console.log("Dados corretos "+ bio);


};
     

  




  
