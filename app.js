var express=require('express');
__dirname='public';
var app=express();
//app.get('/',function(req,res){
//		res.send('Hello World');
//		});




app.use(express.static(__dirname));
app.use(express.bodyParser());

var updateRes=[];


app.post('/',function(req,res){
		//res.send('x');	
		console.log('ajax');
		if(req.body.str){
			console.log(req.body.str);
			for(var i=0;i<updateRes.length;++i){
				updateRes[i].send(req.body.str);
				console.log('?');
				}
				res.send('');
			updateRes=[];
		}
		else{
			res.id=updateRes.length;
			res.set('Cache-Control','no-cache');
			updateRes.push(res);
			console.log(updateRes.length);
		}
		console.log('/ajax');
		});
app.listen(3000);

