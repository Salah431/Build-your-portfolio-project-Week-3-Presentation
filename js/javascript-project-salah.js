
function list()
{
    x=document.getElementById('sub').value;
    document.getElementById('sub').style.visibility='visible';
    y=document.getElementById('sub2').value;
    document.getElementById('sub2').style.visibility="hidden";
    z=document.getElementById('sub3').value;
    document.getElementById('sub3').style.visibility='hidden';
    t=document.getElementById('sub4').value;
    document.getElementById('sub4').style.visibility='hidden';
}
function list2()
{
    x=document.getElementById('sub2').value;
    y=document.getElementById('sub').value;
    document.getElementById('sub2').style.visibility='visible';
    document.getElementById('sub').style.visibility="hidden";
    z=document.getElementById('sub3').value;
    document.getElementById('sub3').style.visibility='hidden';
    t=document.getElementById('sub4').value;
    document.getElementById('sub4').style.visibility='hidden';
    f=document.getElementById('gdwal').value; 
    document.getElementById('gdwal').style.display="none";
}
function list3()
{
    x=document.getElementById('sub2').value;
    y=document.getElementById('sub').value;
    z=document.getElementById('sub3').value;
    document.getElementById('sub3').style.visibility='visible';
    document.getElementById('sub').style.visibility="hidden";
    document.getElementById('sub2').style.visibility="hidden";
    t=document.getElementById('sub4').value;
    document.getElementById('sub4').style.visibility='hidden';
    f=document.getElementById('gdwal').value; 
    document.getElementById('gdwal').style.display="none";
}
function list4()
{
    x=document.getElementById('sub4').value;
    document.getElementById('sub4').style.visibility='visible';
    y=document.getElementById('sub').value;
    document.getElementById('sub').style.visibility='hidden';
    z=document.getElementById('sub2').value;
    document.getElementById('sub2').style.visibility="hidden";
    t=document.getElementById('sub3').value;
    document.getElementById('sub3').style.visibility='hidden';
    f=document.getElementById('gdwal').value; 
    document.getElementById('gdwal').style.display="none";
}
function exit()
{
    y=document.getElementById('sub').value;
    x=document.getElementById('sub2').value;
    z=document.getElementById('sub3').value; 
    t=document.getElementById('sub4').value; 
    document.getElementById('sub').style.visibility="hidden";
    document.getElementById('sub2').style.visibility="hidden";
    document.getElementById('sub3').style.visibility='hidden';
    document.getElementById('sub4').style.visibility='hidden';
    f=document.getElementById('gdwal').value; 
    document.getElementById('gdwal').style.display="none";
}
function listlateral1()
{
    x=document.getElementById('gdwal').value;
    document.getElementById('gdwal').style.display="block";
}
function exit2()
{
    y=document.getElementById('body1').value;
    x=document.getElementById('exxit').value;
    z=document.getElementById('leftbody1').value; 
    t=document.getElementById('rightbody1').value; 
    document.getElementById('body1').style.display="none";
    document.getElementById('exxit').style.display="none";
    document.getElementById('leftbody1').style.display='none';
    document.getElementById('rightbody1').style.display='none';
}
