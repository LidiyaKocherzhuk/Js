//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

let time = new Date();

            // callback

//
// function wakeUp(whatTime, callback) {
//     setTimeout(() => {
//         if (whatTime < 8.30) {
//             time = whatTime;
//             console.log(time);
//             document.write(`<h3>Прокидаюся - ${time} год.</h3>`);
//             callback(null, time);
//         } else {
//             callback('Oppss overslept(', null);
//         }
//     }, 300);
// }
//
// function toGetDressed(howLong, callback) {
//     setTimeout(() => {
//         document.write(`<h3>Одягаюся - ${time} год.</h3>`);
//         time += howLong;
//         console.log(time);
//         callback(null, time);
//     }, 700);
// }
//
// function toWash(howLong, callback) {
//     setTimeout(() => {
//         if (howLong) {
//             document.write(`<h3>Вмиваюся - ${time} год.</h3>`);
//             time += howLong;
//             console.log(time);
//             callback(null, time);
//         } else {
//             callback('no water((((', null);
//         }
//     }, 500);
// }
//
// function brushTeeth(howLong, callback) {
//     setTimeout(() => {
//         if (howLong) {
//             document.write(`<h3>Чищу зуби - ${time} год.</h3>`);
//             time += howLong;
//             console.log(time);
//             callback(null, time);
//         } else {
//             callback('no water((((', null);
//         }
//     }, 100);
// }
//
// function cookBreakfast(howLong, callback) {
//     setTimeout(() => {
//         if (howLong < 0.30) {
//             document.write(`<h3>Готую сніданок - ${time} год.</h3>`);
//             time += howLong;
//             console.log(time);
//             callback(null, time);
//         } else {
//             callback('did not have time to work', null);
//         }
//     }, 200);
// }
//
// function eat(howLong, callback) {
//     setTimeout(() => {
//         if (howLong) {
//             document.write(`<h3>Снідаю - ${time} год.</h3>`);
//             time += howLong;
//             console.log(time);
//             callback(null, time);
//         } else {
//             callback('dont eat', null);
//         }
//     }, 100);
// }
//
// function goToWork(howLong, callback) {
//     setTimeout(() => {
//         if (howLong <= 1) {
//             document.write(`<h3>Їду на роботу - ${time} год.</h3>`);
//             time += howLong;
//             console.log(time);
//             callback(null, time);
//         } else {
//             callback('did not have time to work', null);
//         }
//     }, 300);
// }
//
// function toWork(howLong, callback) {
//     setTimeout(() => {
//         if (howLong <= 10) {
//             document.write(`<h3>Починаю працювати - ${time} год.</h3>`);
//             time += howLong;
//             console.log(time);
//             callback(null, time);
//         } else {
//             callback('Hard work  )', null);
//         }
//     }, 3000);
// }
//
// function backHome(howLong) {
//     setTimeout(() => {
//         document.write(`<h3>Повептаюсь додому - ${time} год.</h3>`);
//         time += howLong;
//         console.log(time);
//         document.write(`<h3>У дома - ${time} год.</h3>`);
//     }, 300);
// }
//
//
// wakeUp(8, (error, time) => {
//     if (error) {
//         console.error(error);
//         document.write('Upppssss... Щось пішло не так!');
//     } else {
//         toGetDressed(0.02, (error, time) => {
//             if (error) {
//                 console.error(error);
//                 document.write('Upppssss... Щось пішло не так!');
//             } else {
//                 toWash(0.05, (error, time) => {
//                     if (error) {
//                         console.error(error);
//                         document.write('Upppssss... Щось пішло не так!');
//                     } else {
//                         brushTeeth(0.04, (error, time) => {
//                             if (error) {
//                                 console.error(error);
//                                 document.write('Upppssss... Щось пішло не так!');
//                             } else {
//                                 cookBreakfast(0.15, (error, time) => {
//                                     if (error) {
//                                         console.error(error);
//                                         document.write('Upppssss... Щось пішло не так!');
//                                     } else {
//                                         eat(0.15, (error, time) => {
//                                             if (error) {
//                                                 console.error(error);
//                                                 document.write('Upppssss... Щось пішло не так!');
//                                             } else {
//                                                 goToWork(1, (error, time) => {
//                                                     if (error) {
//                                                         console.error(error);
//                                                         document.write('Upppssss... Щось пішло не так!');
//                                                     } else {
//                                                         toWork(8, (error, time) => {
//                                                             if (error) {
//                                                                 console.error(error);
//                                                                 document.write('Upppssss... Щось пішло не так!');
//                                                             } else {
//                                                                 backHome(1);
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });

                // Promise

function wakeUp (whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (whatTime < 8.30) {
                time = whatTime;
                console.log(time);
                document.write(`<h3>Прокидаюся - ${time} год.</h3>`);
                resolve(time);
            } else {
               reject('Oppss overslept(');
            }
        }, 300);
    });
}

function toGetDressed(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                document.write(`<h3>Одягаюся - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
        }, 700);
    });
}

function toWash(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (howLong) {
                document.write(`<h3>Вмиваюся - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
            } else {
                reject('no water((((')
            }
        }, 500);
    });
}

function brushTeeth(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (howLong) {
                document.write(`<h3>Чищу зуби - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
            } else {
                reject('no water((((')
            }
        }, 100);
    });
}

function cookBreakfast(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (howLong < 0.30) {
                document.write(`<h3>Готую сніданок - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
            } else {
                reject('did not have time to work')
            }
        }, 200);
    });
}

function eat(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (howLong) {
                document.write(`<h3>Снідаю - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
            } else {
                reject('dont eat')
            }
        }, 100);
    });
}

function goToWork(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (howLong <= 1) {
                document.write(`<h3>Їду на роботу - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
            } else {
                reject('did not have time to work')
            }
        }, 300);
    });
}

function toWork(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (howLong <= 10) {
                document.write(`<h3>Починаю працювати - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
                resolve(time);
            } else {
                reject('Hard work  )')
            }
        }, 3000);
    });
}

function backHome(howLong, whatTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.write(`<h3>Повептаюсь додому - ${time} год.</h3>`);
                time += howLong;
                console.log(time);
            resolve(time);
        }, 300);
    });
}

//
// wakeUp(8.00)
//     .then(timeWakeUp => {
//         return toGetDressed(0.05)
//     })
//     .then(timeToGetDressed => {
//         return toWash(0.05)
//     })
//     .then(timeToWash => {
//         return brushTeeth(0.03)
//     })
//     .then(timeBrushTeeth => {
//         return cookBreakfast(0.20)
//     })
//     .then(timeCookBreakfast => {
//         return eat(0.10);
//     })
//     .then(timeEat => {
//         return goToWork(1);
//     })
//     .then(timeGoToWork => {
//         return toWork(8);
//     })
//     .then(timeToWork => {
//         return backHome(1);
//     })
//     .then(timeBackHome => {
//         document.write(`<h3>Я дома - ${timeBackHome} год.</h3>`);
//     })
//     .catch(e => {
//         console.error(e);
//         document.write(`Упсс... Щось пішло не так!!!`);
//     });


                // think away

async function routine() {
    try {
        const timeWakeUp = await wakeUp(8.00);
        const timeToGetDressed = await toGetDressed(0.06, timeWakeUp);
        const timeToWash = await toWash(0.10, timeToGetDressed);
        const timeCookBreakfast = await cookBreakfast(0.15, timeToWash);
        const timeEat = await eat(0.15, timeCookBreakfast);
        const timeGoToWork = await goToWork(1, timeEat);
        const timeToWork = await toWork(10, timeGoToWork);
        const timeBackHome = await backHome(1, timeToWork);

        console.log(timeBackHome);
        document.write(`<h3>Я дома - ${timeBackHome} год.</h3>`);
    } catch (e){
        console.error(e);
        document.write(`Упсс... Щось пішло не так!!!`);
    }

}

routine();