function isSym(str)
{
    if(str=='+' || str=='-' || str=='X' || str=='/' || str=='*')
    {
        return true;
    }
    return false;
}
// function isNum()
let b1=document.querySelectorAll('.btn');
var b2=document.getElementById('inp');
for(i of b1)
{
    i.addEventListener('click',(e)=>{
        if(e.target.innerText=='CE')
        {
            b2.value=b2.value.slice(0,-1);
        }
        else if(e.target.innerText=='C')
        {
            document.querySelector('.p').innerText=0;
            b2.value="";
        }
        else if(e.target.innerText=='.')
        {
            if(!b2.value.includes('.'))
            {
                b2.value+=".";
            }
        }
        else if(e.target.innerText=='=')
        {
            let s=b2.value;
            document.querySelector('.p').innerText=s;
            if(b2.value=="")
            {
                b2.value=0;
            }
            b2.value=eval(b2.value);
        }
        else if(isSym(e.target.innerText))
        {
            let s=b2.value;
            document.querySelector('.p').innerText=s;
            if(isSym(b2.value[b2.value.length-1]))
            {
                b2.value=b2.value.slice(0,-1);
            }
            if(e.target.innerText=="X")
            {
                b2.value+="*";
            }
            else
            {
                b2.value+=e.target.innerText;
            }
        }
        else
        {
            b2.value+=e.target.innerText;
        }
        if(eval(b2.value)!=undefined)
        {
            document.querySelector('.ans').innerText=eval(b2.value);
        }
        else{
            document.querySelector('.ans').innerText="0";
        }
    })
}
document.onkeydown=function(e)
{
    const isNumber = (e.key >= "0" && e.key <= "9");
    const isSym1= (e.key=='+' || e.key=='-' || e.key=='*' || e.key=='/');
    if(e.key=='.')
    {
        if(!b2.value.includes('.'))
        {
            b2.value+=".";
        }
    }
    else if(e.key=='Backspace')
    {
        b2.value=b2.value.slice(0,-1);
    }
    else if(e.key=='Enter')
    {
        let s=b2.value;
        document.querySelector('.p').innerText=s;
        if(b2.value=="")
        {
            b2.value=0;
        }
        b2.value=eval(b2.value);
    }
    else if(isSym1)
    {
        let s=b2.value;
        document.querySelector('.p').innerText=s;
        if(isSym(b2.value[b2.value.length-1]))
        {
            b2.value=b2.value.slice(0,-1);
        }
        if(e.key=="X")
        {
            b2.value+="*";
        }
        else
        {
            b2.value+=e.key;
        }
    }
    else if(isNumber)
    {
        b2.value+=e.key;
    }
    if(eval(b2.value)!=undefined)
    {
        document.querySelector('.ans').innerText=eval(b2.value);
    }
    else{
        document.querySelector('.ans').innerText="0";
    }
}