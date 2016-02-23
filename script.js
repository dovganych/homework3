// JavaScript File
function calc()
{
	var a,b,c,d,x1,x2;
	a=document.getElementById('a').value;
	b=document.getElementById('b').value;
	c=document.getElementById('c').value;
	d=b*b-4*a*c;
	if(d>0)
	{
		x1=((b*-1)+Math.sqrt(d))/(2*a);
		x2=((b*-1)-Math.sqrt(d))/(2*a);
		document.getElementById('par').innerHTML='x1:'+x1;
		document.getElementById('par1').innerHTML='x2:'+x2;
	}
	if(d==0)
	{
		x1=((b*-1)/(2*a))*-1;
		x2=x1;
		document.getElementById('par').innerHTML='x1:'+x1;
		document.getElementById('par1').innerHTML='x2:'+x2;
	}
	if(d<0)
	{
		document.getElementById('par').innerHTML='no solution';
		document.getElementById('par1').innerHTML='no solution';
	}
	document.getElementById('par0').innerHTML='discriminant:'+d;
}