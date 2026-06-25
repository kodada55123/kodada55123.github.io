<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>作業猜數字</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    </head>
    <body>
       <input type="text" id="num" name="num" placeholder="請輸入數字"></input>
       <button onclick="check(); ">送出</button>
		<table id="table">
		</table>

       <script type="text/javascript">
       		var target = '5967';
       		var a=0;
       		var b=0;
       		function check(){
       			for (var i = 0; i <4; i++) {
       				if(target[i] == $('#num').val()[i]){
       					a++;
       				}
       				for(var j = 0;j<4;j++){
       					if(target[i] == $('#num').val()[j] && target[i] != $('#num').val()[i]){
       						b++;
       					}
       				}
       			}
       			addtab(a,b);
       			a=0;
       			b=0;
       		}

       		function addtab(a,b){
       			var num = document.getElementById("table").rows.length;
       			var tr = document.getElementById("table").insertRow(num);
       			Td = tr.insertCell(tr.cells.length);
       			Td.innerHTML='<input name = "name[]"  size = "12" value='+$('#num').val()+'>';
       			Td = tr.insertCell(tr.cells.length);
       			Td.innerHTML='<input name = "content[]"  size = "12" value='+a+'A'+b+'B'+'>';
       		} 
       </script>
    </body>
</html>