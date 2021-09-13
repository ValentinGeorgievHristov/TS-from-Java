import {Lights} from "./enum";

export class TrafficLight {
    enum: {} = Lights

    convertEnumToArray() {
        let entries = Object.entries(this.enum);
        let configuration: string[] = [];

        for (let i = 0; i < entries.length / 2; i++) {
            configuration.push(entries[i][1].toString());
        }
        return configuration;
    }

    result(n: number){
    let array = this.convertEnumToArray()

        for (let i=0; i<n; i++){
            let changed =  array.pop()
            array.unshift(changed).toString();
            console.log(array.join(' '));
        }
    }
}



