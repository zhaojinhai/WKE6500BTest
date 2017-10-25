var net=require('net');

// var host=process.argv[2];
// var port=Number(process.argv[3]);
var read=process.argv[2];
var socket=net.connect({
   port: 2000,host:'192.168.10.36'});
 //初化化数据
 

//socket.write(read+'\n');
//socket.end;
//console.log("发送指令:",read);

// if (read=='w')
// {
//     socket.write("METER:LEVEL 0.5\n");
//     socket.end();
//     console.log('发送写入指令成功!');
// }
if(read=="1")
{
    //设置电压
    socket.write(":METER:LEVEL 1\n");
    socket.end;
    console.log("设置电压1V");
}
if(read=="2")
{
    //设置频率
    socket.write(":Meter:freq 1e6\n");
    socket.end;
    console.log("设置频率 1e4");
}
if(read=="3")
{
    socket.write(":MeTER:func:1 c;2 d\n");
    socket.end;
    console.log("设置CD");
}
if(read=="4")
{
    socket.write(":meter:trig");
    socket.end;
    console.log("测试");
}

if(read=="5")
{
    socket.write(":ana:bias-stat on\n");
    socket.end;
    console.log("analysi bias on");
}
if(read=="6")
{
    socket.write(":ana:bias-stat off\n");
    socket.end;
    console.log("analysi bias off");
}
if(read=="7")
{
    socket.write(":meter:bias-stat on\n");
    socket.end;
    console.log("测量 dc bias on");
}
if(read=="8")
{
    socket.write(":meter:bias-stat off\n");
    socket.end;
    console.log("测量 dc bias off");
}
if(read=="9")
{
  socket.write(":meter:bias-type vol;:meter:bias 40\n");
  socket.end;
  console.log("设置测量点的电压:1v");   
}
if (read=='r')
{    
   
    console.log('发送读取指令成功!')
}

socket.on('data',function(data){
    console.log(data);
    console.log(data.toString("ascii"));
    console.log("接收到数据！")
});


