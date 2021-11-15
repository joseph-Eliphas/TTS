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
    ["CM21",41],
    ["CM20",41],
    ["DA12",62],
    ["DA13",61],
    ["DE11",61],
    ["DBE7",62]
];

let object = {};

let intervals = [];

function strchoper(list, from){
    let str = "";
    for(let i = from; i < list.length; i += 1){
        str += list[i];
    }
    return str;
}

function _(programs,_class){
    let __ = [];
    for(let j = 0; j < Object.keys(programs).length; j += 1){
        let subjectModule = Object.keys(programs)[Math.round(Math.random() * Object.keys(programs).length) - 1];
            // console.log(subjectModule);
        if(__.length == 0){
            let _programs = Object.keys(programs)[Math.round(Math.random() * Object.keys(programs).length)];
            let modId = strchoper(`${_programs}`,4).split("0")[0];
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
        _(programs,_class);
    }else{
    }
    return __;
}

// console.log(Math.round(Math.random() * (+classes.length - 1)));

function schedular(){
    let scheduleList = ["DA12","Jesca","CTT04101"];
    let dimension_1 = {};
    let returned = "";
    // for(let i = 0;i < classes.length; i += 1){
        let _class = classes[Math.round(Math.random() * (+classes.length-1))];
        // scheduleList.push(_class[i]);
        dimension_1 = _(programs,_class);
        // console.log(`${_class[0]}::::::::::${dimension_1[1]}::::::::::${programs[dimension_1[1]][2]}`);
        // returned = `${_class[0]}::::::::::${dimension_1[1]}::::::::::${programs[dimension_1[1]][2]}`;
        returned = [_class[0],dimension_1[1],programs[dimension_1[1]]];
    // }
    // console.log("_____________________");
    return returned;
}


function algorithm(object,intervalfrom,intervalto,interval){
    let intervalList = []
    for(let i = intervalfrom; i <= intervalto; i+=interval){
        intervalList.push(`${i <= 9 ? '0'+i: i}:00`);
    }

    for(let a = 0; a < WeekDays.length; a+= 1){
        let WeekDay = WeekDays[a];
        
        object[WeekDay] = {};
        for(let b = 0; b < venues.length; b+=1){
            let venue = venues[b];
            object[WeekDay][venue] = {};
    
            for(let c = 0; c < intervalList.length; c+=1){
                let _interval = intervalList[c];
    
                object[WeekDay][venue][_interval] = `${schedular()[0]} : ${schedular()[1]}`;
            }
        }
    }

    return object;
}


const schedule = [
    [],
    []
];
for (let i = 0; i < 10000; i += 1){
    for(let j = 0; j < classes.length; j += 1){
        let _ = schedular();
        if(schedule.length == 0){
            schedule.push([classes[j][0]],[_]);
        }else{
            // console.log(`:::::::::: Appending..........${i}..........${j}`);
            if(classes[j][0] == _[0]){
                // console.log(schedule[0].includes("DA12"));
                // console.log(schedule);
                if(schedule[0].includes(classes[j][0])){
                    // console.log(`${_[0]}: It's in`);
            //         j = j - 1;
            //         // break
                }else{
                    // console.log(`Appending....... ${_}`);
                    schedule[0].push(classes[j][0]);
                    schedule[1].push(_);
                }
            //     // console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
            }
        }
    }
}

console.log(algorithm(object,8,20,interval));

// _(Object.keys(programs)[15],["CM21", 41]);

// console.log(algorithm());


console.log("################################################################################################################################")