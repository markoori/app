class String{

    constructor(){

    }

   static Format(arg1,arg2) {
        // generate the dummy strings
        let pos_search = [];
        for(let i = 0; i<= 10; i++){
            if (arg1.search(i) >= 0){
                pos_search.push(arg1.search(i));
            }
        }

        console.log(pos_search) 

        let tracker = [];
        let trac_count = 0;
        for (let i = 0; i <= pos_search.length; i++) {

            if (trac_count == 0){
                tracker.push(arg1.replace(arg1.slice( pos_search[i] - 1, pos_search[i] + 2  ),arg2[i]));
                trac_count++;
            }
            else{
                tracker[trac_count - 1].replace(tracker[trac_count - 1].slice( pos_search[i + 1] -1, pos_search[i + 1] + 2 ), arg2[i]);
                console.log(tracker);
                trac_count++;
            }



            console.log()
            arg1.replace(arg1.slice( pos_search[i] - 1, pos_search[i] + 2  ), arg2[i]);
        }

        console.log(arg1);
        return arg1;
                
 
        // replace the format sym
        
   }
}

console.log(String.Format("My name is $0 and I come from $1 and I am $3", ['mark ','India ','a boy']))

