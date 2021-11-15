class ScheduleGenerator {
    
    constructor({courses,programs, venues, weekdays, intervals = {interval: 2, from: 8, to: 20},classes}){
        this.object = {};
        this.intervals = intervals;
        this.courses = courses;
        this.weekdays = weekdays;
        this.venues = venues;
        this.interval = interval;
        this.classes = classes;
        this.programs = programs;
        this.schedule = [
            [],
            []
        ];
        this.res = {}
        this.queu = [];
    }


    strchoper(list, from){
        let str = "";
        for(let i = from; i < list.length; i += 1){
            str += list[i];
        }
        return str;
    }



    _(programs,_class){
        let __ = [];
        for(let j = 0; j < Object.keys(programs).length; j += 1){
            let subjectModule = Object.keys(programs)[Math.round(Math.random() * Object.keys(programs).length) - 1];
                // console.log(subjectModule);
            if(__.length == 0){
                let _programs = Object.keys(programs)[Math.round(Math.random() * Object.keys(programs).length)];
                let modId = this.strchoper(`${_programs}`,4).split("0")[0];
                if(_class[1] == 41){
                    // console.log(`${_class[1]} == ${_class[0]}`);
                    if(_class[1] == modId){
                        // console.log(`${_class[0]}:::::::::: ${modId}`);
                        __.push(_class[0]);
                        __.push(_programs);
                    }
    
                }else if(_class[1] == 42){
                    // console.log(`${_class[1]} == ${_class[0]}`);
                    if(_class[1] == modId){
                        // console.log(`${_class[0]}:::::::::: ${modId}`);
                        __.push(_class[0]);
                        __.push(_programs);
                    }
    
                }else if(_class[1] == 51){
                    // console.log(`${_class[1]} == ${_class[0]}`);
                    if(_class[1] == modId){
                        // console.log(`${_class[0]}:::::::::: ${modId}`);
                        __.push(_class[0]);
                        __.push(_programs);
                    }
    
                }else if(_class[1] == 52){
                    // console.log(`${_class[1]} == ${_class[0]}`);
                    if(_class[1] == modId){
                        // console.log(`${_class[0]}:::::::::: ${modId}`);
                        __.push(_class[0]);
                        __.push(_programs);
                    }
    
                }else if(_class[1] == 61){
                    // console.log(`${_class[1]} == ${_class[0]}`);
                    if(_class[1] == modId){
                        // console.log(`${_class[0]}:::::::::: ${modId}`);
                        __.push(_class[0]);
                        __.push(_programs);
                    }
    
                }else if(_class[1] == 62){
                    // console.log(`${_class[1]} == ${_class[0]}`);
                    if(_class[1] == modId){
                        // console.log(`${_class[0]}:::::::::: ${modId}`);
                        __.push(_class[0]);
                        __.push(_programs);
                    }
    
                }                
            }
        }
        if(__.length == 0){
            this._(programs,_class);
        }else{
        }
        return __;
    }



    schedular(){
        let scheduleList = ["DA12","Jesca","CTT04101"];
        let dimension_1 = {};
        let returned = "";
        // for(let i = 0;i < classes.length; i += 1){
            let _class = classes[Math.round(Math.random() * (+classes.length-1))];
            // scheduleList.push(_class[i]);
            dimension_1 = this._(this.programs,_class);
            // console.log(`${_class[0]}::::::::::${dimension_1[1]}::::::::::${programs[dimension_1[1]][2]}`);
            // returned = `${_class[0]}::::::::::${dimension_1[1]}::::::::::${programs[dimension_1[1]][2]}`;
            returned = [_class[0],dimension_1[1],programs[dimension_1[1]]];
        // }
        // console.log("_____________________");
        return returned;
    }

    Queu(){
        let setSchedule = this.schedular();
        // let spit = false;
        let result = [];
        if(this.queu.length == 0){
            this.queu.push([setSchedule[0], 1]);
        }else{
            let contained = false;
            let index = 0;
            for(let d = 0; d < this.queu.length; d += 1){
                // console.log(`${this.queu[d]}`);
                if(this.queu[d][0] == setSchedule[0]){
                    contained = false;
                }else{
                    contained = true;
                    break
                }
            }
            if(contained){
                // console.log(contained);
                for(let j = 0; j < this.classes.length; j += 1){
                    if(this.classes[j][0] == setSchedule[0]){
                        this.queu.push([setSchedule[0], 1]);
                        // console.log(this.classes[j][2]);
                        // if(this.queu[d][1] > this.classes[j][2]){
                        //     spit = true;
                        //     break;
                        // }else{
                        //     spit = false;
                        //     this.queu[d][1] += 1;
                        // }
                    }
                }
                result = setSchedule;
            }else{
                // result = undefined;
            }
        }
        // console.log(this.queu);
        if(result == undefined){
            this.Queu();
            // return result;
        }else{
            // console.log(this.queu);   
            return result;
        }


    }


    algorithm(object,intervalfrom,intervalto,interval){
        let intervalList = [];
        for(let i = intervalfrom; i <= intervalto; i+=interval){
            intervalList.push(`${i <= 9 ? '0'+i: i}:00`);
        }
    
        for(let a = 0; a < this.weekdays.length; a+= 1){
            let WeekDay = this.weekdays[a];
            
            object[WeekDay] = {};
            for(let b = 0; b < this.venues.length; b+=1){
                let venue = this.venues[b];
                object[WeekDay][venue] = {};
                
                for(let c = 0; c < intervalList.length; c+=1){
                    let _interval = intervalList[c];
                    let q = this.Queu();
                    // console.log(`:::::::::: ${q.length}`);
                    object[WeekDay][venue][_interval] = q;
                    // ;
                    // console.log("__________________________________________________________");
                }
            }
        }

        // console.log(object)
        
        this.res = object;
        return this.res;
    }

    generate(){
        for (let i = 0; i < 10000; i += 1){
            for(let j = 0; j < this.classes.length; j += 1){
                let _ = this.schedular();
                if(this.schedule.length == 0){
                    // console.log(`:::::::::: Initializing..........`);
                    this.schedule.push([this.classes[j][0]],[_]);
                }else{
                    // console.log(`:::::::::: Appending..........${i}..........${j}`);
                    if(this.classes[j][0] == _[0]){
                        // console.log(schedule[0].includes("DA12"));
                        // console.log(schedule);
                        if(this.schedule[0].includes(classes[j][0])){
                            // console.log(`${_[0]}: It's in`);
                    //         j = j - 1;
                    //         // break
                        }else{
                            // console.log(`Appending....... ${_}`);
                            this.schedule[0].push(classes[j][0]);
                            this.schedule[1].push(_);
                        }
                    //     // console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
                    }
                }
            }
        }
    }

    refine({result}){
        // console.log("Refining ...");
        let days = Object.keys(result);
        let vens = Object.keys(result[days[0]]);
        let durations = Object.keys(result[days[0]][vens[0]]);
        let clses = this.classes;
        // console.log(days);
        for(let i = 0; i < days.length; i += 1){
            let day = days[i];
            let included = [];
            for(let j = 0; j < vens.length; j += 1){
                let ven = vens[j];
                for(let l = 0; l < durations.length; l += 1){
                    let duration = durations[l];
                    // let classIn = result[day][ven];
                    for(let k = 0; k < clses.length; k += 1){
                        let cls = clses[k][0];
                        // if(result[day][ven][duration])
                        if(!included.includes(cls)){
                            included.push([cls, duration]);
                        }else{
                            // console.log("::::::::::");
                        }
                    }
                    for(let k = 0; k < included.length; k += 1){
                        if(included[k] == result[day][ven][duration][0]){
                            result[day][ven][duration] = this.Queu();
                            // console.log(`${result[day][ven][duration][0]} :::::::::: ${included[k]}`)
                        }else{
                            // console.log(`${included[k]} == ${result[day][ven][duration][0]}`)
                        }
                        // console.log(result[day][ven][duration][0]);
                    }
                }
            }
            console.log(included);
            included = [];
            // if(i == days.length - 1){
                // }
            }
    }

    result(){
        console.log("Generating ...");
        return this.refine({
            result: this.algorithm(
                this.object,
                this.intervals.from,
                this.intervals.to,
                this.intervals.interval
            )
        });
    }
}
// Courses
let courses = ["IT","BIT"];
const WeekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
let programs = {
    // Certificate 1
    "CTT04101": ["Mathematics", "Certificate", 0, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT04102": ["Entrepreneurship", "Certificate", 0, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT04103": ["Entrepreneurship", "Certificate", 0, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT04104": ["Entrepreneurship", "Certificate", 0, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT04105": ["PC and networking 1", "Certificate", 0, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
    "CTT04201": ["PC and networking 2", "Certificate", 1, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT04202": ["Introduction to web developement", "Certificate", 1, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT04203": ["Introduction to web developement", "Certificate", 1, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT04204": ["Introduction to web developement", "Certificate", 1, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT04205": ["Introduction to web developement", "Certificate", 1, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
    "CTT05101": ["Introduction to programming", "Diploma 1", 1, courses[0],["Jesca","Mackdonald","Munyaga"],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT05102": ["Mathematics", "Diploma 1", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT05103": ["Entrepreneurship", "Diploma 1", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT05104": ["Entrepreneurship", "Diploma 1", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT05105": ["Entrepreneurship", "Diploma 1", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
    "CTT05201": ["PC and networking", "Diploma 2", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT05202": ["Introduction to web developement", "Diploma 2", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT05203": ["Introduction to web developement", "Diploma 2", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT05204": ["Introduction to web developement", "Diploma 2", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT05205": ["Introduction to web developement", "Diploma 2", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
    "CTT06101": ["Introduction to programming", "Diploma 3", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT06102": ["Mathematics", "Diploma 3", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT06103": ["Mathematics", "Diploma 3", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT06104": ["Mathematics", "Diploma 3", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT06105": ["Mathematics", "Diploma 3", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
    "CTT06201": ["Mobile app developement", "Diploma 4", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 0: Fundamental
    "CTT06202": ["Introduction to linux", "Diploma 4", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT06203": ["Project management", "Diploma 4", 0, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT06204": ["Final year project", "Diploma 4", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    "CTT06205": ["Connecting network", "Diploma 4", 1, courses[0],["Jesca","Mackdonald","Munyaga"]], // 1: Core
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
};
let instructor = [
    {
        1 :[
            "Mackdonald",[
                programs.CTT0404
            ]
        ]
    }
];
let venues = [
    "TR1","TR2","TR4","TR5","TR6","CISCO","SOFTWARE"
];
let interval = 2;
let classes = [
    ["CM21",41, 2],
    ["CM20",41, 2],
    ["DA12",62, 2],
    ["DA13",61, 2],
    ["DE11",61, 2],
    ["DBE7",62, 2]
];


const generator = new  ScheduleGenerator({
    classes: classes,
    courses: courses,
    venues: venues,
    weekdays: WeekDays,
    programs: programs,
    intervals: {
        interval: 2,
        from: 8,
        to: 20
    },
})

// generator.generate();
let result = generator.result();

// console.log(result.Monday);