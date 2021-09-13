import {Lights} from "./enum";

export class TrafficLight{
    enum: {} = Lights

    showLights(n: number){
       let entries =  Object.entries(this.enum);
       let configuration:  string[] = [];
        // console.log(entries.length)
        // console.log(entries[0][1])
        // console.log(entries[1][1])
        // console.log(entries[2][1])
        // console.log(typeof entries)
        // console.log(entries)

        for (let i=0; i < entries.length/2; i++){
            configuration.push(entries[i][1].toString())
            // console.log(entries[i][1])
            // console.log(typeof entries[i][1])

        }
        // console.log(configuration)
        for (let i=0; i<n; i++){

          let changed =  configuration.pop()
            configuration.unshift(changed).toString();
            console.log(configuration.join(' '));
        }
    }
}




