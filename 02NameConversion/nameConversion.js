const camel = document.querySelector("#camel-case");
const pascal = document.querySelector("#pascal-case");
const snake = document.querySelector("#snake-case");
const screamsnake = document.querySelector("#screaming-snake-case");
const kebab = document.querySelector("#kebab-case");
const screamkebab = document.querySelector("#screaming-kebab-case");

function camelCase(s)
{
    var n = s.length;
    s=s.toLowerCase();
    var str="";
    for (var i = 0; i < n; i++)
    {
        if (s[i] == ' ' || s[i] =='.' || s[i] == '-')
        {
            str+= s[i+1].toUpperCase();
            i++;    
        }
        else{
                str+= s[i];
            }
    }
     return str;
}

function pascalCase(s)
{
    var n = s.length;
    s=s.toLowerCase();
    var str="";
    str=str+s[0].toUpperCase();
    for (var i = 1; i < n; i++)
    {
        
        if (s[i] == ' ' || s[i] =='.' || s[i] == '-')
        {
            //str+=' ';
            str+= s[i+1].toUpperCase();
            i++;    
        }
        else{
                str+= s[i];
            }
    }
     return str;
}

function snakeCase(s)
{
    var n = s.length;
    s=s.toLowerCase();
    var str="";
    for (var i = 0; i < n; i++)
    {
        if (s[i] == ' ' || s[i] =='.' || s[i] == '-')
        {
            str+= "_";
                
        }
        else{
                str+= s[i];
            }
    }
     return str;
}

function screamingSnakeCase(s)
{
    var n = s.length;
    s=s.toLowerCase();
    var str="";
    for (var i = 0; i < n; i++)
    {
        if (s[i] == ' ' || s[i] =='.' || s[i] == '-')
        {
            //str+= s[i].toUpperCase();
            str+= "_";
                
        }
        else{
                str+= s[i].toUpperCase();
            }
    }
     return str;
}

function kebabCase(s)
{
    var n = s.length;
    s=s.toLowerCase();
    var str="";
    for (var i = 0; i < n; i++)
    {
        if (s[i] == ' ' || s[i] =='.' || s[i] == '-')
        {
            str+= "-";
                
        }
        else{
                str+= s[i];
            }
    }
     return str;
}

function screamingKebabCase(s)
{
    var n = s.length;
    s=s.toLowerCase();
    var str="";
    for (var i = 0; i < n; i++)
    {
        if (s[i] == ' ' || s[i] =='.' || s[i] == '-')
        {
            //str+= s[i].toUpperCase();
            str+= "-";
                
        }
        else{
                str+= s[i].toUpperCase();
            }
    }
     return str;
}

function nameConversion() {
    const input = document.querySelector("#text");
    const convertBtn = document.getElementById("convert-btn");
    convertBtn.addEventListener("click", () => {
        if (input.value == "") return alert("Enter text");
        let data=camelCase(input.value);
        camel.textContent = data;
         data=pascalCase(input.value);
        pascal.textContent = data;
        data=snakeCase(input.value);
        snake.textContent = data;
        data=screamingSnakeCase(input.value);
        screamsnake.textContent = data;
        data=kebabCase(input.value);
        kebab.textContent = data;
        data=screamingKebabCase(input.value);
        screamkebab.textContent = data;
        
    });
}  
nameConversion();

 
