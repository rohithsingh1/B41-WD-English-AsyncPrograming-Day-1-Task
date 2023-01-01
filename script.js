let h1tag = document.getElementById('countDownDisplay')


const countDownPrint=function(val) {
    h1tag.innerHTML = val
}

const print=function() {
    h1tag.innerHTML='Happy Independence Day'
    let istrue = false
    setInterval(() => {
        if(istrue) {
            h1tag.classList.remove('text-color-green')
            h1tag.classList.add('text-color-orange') 
        } else {
            h1tag.classList.remove('text-color-orange')
            h1tag.classList.add('text-color-green')
        }
        istrue=!istrue
    },1000)
}

const countDown=function(val,callback) {
    countDownPrint(val)
    setTimeout(() => {
        callback(--val)
    },1000)
}

const countDown1=function(val, callback) {
    countDownPrint(val)
    setTimeout(() => {
        callback(--val)
    },1000)
}


let val = 10
countDown(val, (val) => {
    countDown1(val, (val) => {
        countDown(val, (val) => {
            countDown1(val, (val) => {
                countDown(val, (val) => {
                    countDown1(val, (val) => {
                        countDown(val, (val) => {
                            countDown1(val, (val) => {
                                countDown(val, (val) => {
                                    countDown1(val, (val) => {
                                        if(val===0) {
                                            print()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

















