let properties = {
    "theatre": {
        time: 5,
        earning: 1500
    },
    "pub": {
        time: 4,
        earning: 1000
    },
    "commercialPark": {
        time: 10,
        earning: 3000
    }
};

const profits ={}

const MaxProfits =(n)=>{
    let dynTime;

    for(let k in properties){
        dynTime =n;
        profits[k] ={cost:0,num:0,key: k[0].toUpperCase()}

        console.log(profits);


        while(dynTime-properties[k].time>0){
            profits[k].num++;

            profits[k].cost += (dynTime-properties[k].time)*properties[k].earning;


            dynTime -= properties[k].earning;
        }
    }

    console.log(profits);


    let maxEarnings =0,maxProperties=[];


    for(let i in profits){
        if(profits[i].cost>maxEarnings){
            maxEarnings = profits[i].cost;

            maxProperties[0]=i;
        }else if(profits[i].cost===maxEarnings){
            maxProperties.push(i)
        }
    }


    let solution = maxProperties.map(x=>{
        const solObj ={T:0,P:0,c:0};
        solObj[profits[x].key] = profits[x].num;
        return solObj
    })

    return solution;
}


console.log(MaxProfits(7));