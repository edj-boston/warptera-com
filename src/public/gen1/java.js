function SwitchImg()
{
  var rem, keep=0, store, obj, switcher=new Array, history=document.Data;
    for (rem=0; rem < (SwitchImg.arguments.length-2); rem+=3) {
    	store = SwitchImg.arguments[(navigator.appName == 'Netscape')?rem:rem+1];
    if ((store.indexOf('document.layers[')==0 && document.layers==null) ||
        (store.indexOf('document.all[')==0 && document.all==null))
         store = 'document'+store.substring(store.lastIndexOf('.'),store.length);
         obj = eval(store);
    if (obj != null) {
   	   switcher[keep++] = obj;
      switcher[keep++] = (history==null || history[keep-1]!=obj)?obj.src:history[keep];
      obj.src = SwitchImg.arguments[rem+2];
  } }
  document.Data = switcher;
}

function RestoreImg()
{
  if (document.Data != null)
    for (var rem=0; rem<(document.Data.length-1); rem+=2)
      document.Data[rem].src=document.Data[rem+1];
}

function openPopWin(winURL)
{
popWin = window.open(winURL,"sodaconstructor","width=734,height=530,top=" + (screen.availHeight-530)/2 + ",left=" + (screen.availWidth-734)/2) 
}